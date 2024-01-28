import { action, observable } from "mobx";
import { User } from "./userStore";
import useSQlite from "../hooks/useSQlite";
// import { ACTION } from "mobx/dist/internal";

export type Blog = {
  id: number;
  title: string;
  content: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
};

export default class BlogStore {
  @observable
  blogs: Blog[];

  @observable
  userId: number | null;

  db = useSQlite();

  constructor() {
    this.blogs = [];
    this.userId = null;
  }

  @action
  async getBlogs() {
    return this.fetchBlogsByUser();
  }

  @action
  setUserId(userId: number): void {
    this.userId = userId;
  }

  @action
  createBlog(title: string, content: string): Promise<void> {
    console.log("くりぶろ")
    return new Promise((resolve, reject) => {
      console.log("くりぶろ２")
      this.db.transaction((tx) => {
        console.log("くりぶろ３")
        tx.executeSql(
          `insert into blogs (title, content, user_id) values (?, ?, ?);`,
          [title, content, this.userId],
          (a,b) => {
            console.log("成功");
            console.log("りり", a);
            console.log("りり2",b)
            this.addBlog(title, content)
            resolve();
            // resolve(fetchBlogs.rows._array);
          },
          (e) => {
            console.log(e)
            console.log("失敗");
            reject();
          }
        );
      });
    });
  }

  @action
  async fetchBlogsByUser(): Promise<Blog[]> {
    // console.log("いあいあ", this.userId)
    return new Promise((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          `select blogs.* from users join blogs on users.id = blogs.user_id where users.id=?;`,
          [this.userId],
          (first, fetchBlogs) => {
            console.log("成功");
            console.log(first);
            console.log(fetchBlogs.rows._array);
            console.log("成功2");
            // return fetchBlogs.rows._array
            resolve(fetchBlogs.rows._array);
          },
          () => {
            console.log("失敗");
            reject([]);
          }
        );
      });
    });
  }

  @action
  private addBlog(title, content) {
    this.blogs.push({ title: title, content: content, userId: this.userId });
  }
}
// const blogStore = new BlogStore();
// export default blogStore;
