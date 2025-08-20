import { Port_Lligat_Sans } from "next/font/google";
import Create_Post from "./create_post";

export default class In_Memori_Post {
  private posts: Array<{
    id: string;
    title: string;
    description: string;
    author: string;
  }> = [];
  constructor() {
    this.posts = [];
  }

  public async save(post_info: Create_Post): Promise<void> {
    const id = (this.posts.length + 1).toString();
    const title = post_info.title.value;
    const description = post_info.description.value;
    const author = post_info.author.value;
    this.posts.push({ id, title, description, author });
  }
  public obtain_posts() {
    return this.posts.length;
  }
  public update_post(id: string, data: any) {
    let position = this.find_position(id);
    if (position === null) {
      return false;
    }
    this.posts[position].title = data.title;
    this.posts[position].description = data.description;
    this.posts[position].author = data.author;
    return true;
  }

  public delet_post(id: string) {
    const position = this.find_position(id);
    if (position === null) {
      return false;
    }
    this.posts.splice(position, 1);
    return true;
  }

  private find_position(id: string) {
    for (const post of this.posts)
      if (id === post.id) {
        return parseInt(post.id) - 1;
      }
    return null;
  }
}
