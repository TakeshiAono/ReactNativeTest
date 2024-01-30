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
    return this.blogs;
  }


  @action
  setUserId(userId: number): void {
    this.userId = userId;
  }

  @action
  createBlog(title: string, content: string): Promise<void> {
    this.db.transaction((tx) => {
      tx.executeSql(
        `insert into blogs (title, content, user_id) values (?, ?, ?);`,
        [title, content, this.userId],
        () => {
          this.addBlog(title, content)
        },
        () => {
          console.log("失敗");
        }
      );
    });
  }

  @action
  updateBlog(id: number, title: string, content: string): Promise<void> {
    this.db.transaction((tx) => {
      tx.executeSql(
        `update blogs set title=?, content=? where id=?;`,
        [title, content, id],
        () => {
          const blog = this.findBlog(id)
          blog.title = title
          blog.content = content
        },
        () => {
          console.log("失敗");
        }
      );
    });
  }

  @action
  async fetchBlogsByUserId(userId: number) {
    this.db.transaction((tx) => {
      tx.executeSql(
        `select blogs.* from users join blogs on users.id = blogs.user_id where users.id=?;`,
        [userId],
        (first, fetchBlogs) => {
          this.blogs = fetchBlogs.rows._array
        },
        () => {
          console.log("失敗");
        }
      );
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

  @action
  public deleteBlog(id: number) {
    this.db.transaction((tx) => {
      tx.executeSql(
        `delete from blogs where id=?;`,
        [id],
        (first, fetchBlogs) => {
          this.blogs = this.blogs.filter((blog) => blog.id != id)
        },
        () => {
          console.log("失敗");
        }
      );
    });
  }
}
