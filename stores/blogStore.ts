import { observable } from "mobx";

type Blog = {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

class BlogStore {
  @observable
  blogs: Blog[]

  constructor() {
    this.blogs = [{title: "store", content: "content", createdAt: new Date(), updatedAt: new Date()}]
  }

  getBlogs() {
    return this.blogs
  }

  addBlog(blog: Blog) {
    this.blogs.push(blog)
  }
}
const blogStore = new BlogStore()
export default blogStore