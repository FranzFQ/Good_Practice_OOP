import { Port_Lligat_Sans } from "next/font/google";
import Create_Post from "./create_post";

export default class In_Memori_Post {
  private posts: Array<{
    title: string;
    description: string;
    author: string;
  }> = [];
  constructor(){
    this.posts = []
  }

  public async save(post_info: Create_Post): Promise <void>{
    const title = post_info.title.value
    const description = post_info.description.value
    const author = post_info.author.value
    this.posts.push({title, description, author})
  }
  obtain_posts(){
    return this.posts.length
  }
}
