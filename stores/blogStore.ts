import { action, observable } from "mobx";
import useSQlite from "../hooks/useSQlite";

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
    return new Promise((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          `insert into blogs (title, content, user_id) values (?, ?, ?);`,
          [title, content, this.userId],
          () => {
            this.addBlog(title, content)
            resolve();
          },
          () => {
            console.log("失敗");
            reject();
          }
        );
      });
    });
  }

  @action
  async fetchBlogsByUser(): Promise<Blog[]> {
    return new Promise((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          `select blogs.* from users join blogs on users.id = blogs.user_id where users.id=?;`,
          [this.userId],
          (first, fetchBlogs) => {
            this.blogs = fetchBlogs.rows._array
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
  public findBlog(id: number) {
    return this.blogs.find((blog) => blog.id == id)
  }

  @action
  private addBlog(title, content) {
    this.blogs.push({ title: title, content: content, userId: this.userId });
    this.blogs = [...this.blogs]
  }
}
