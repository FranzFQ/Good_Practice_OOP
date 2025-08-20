import postgres, { Sql } from "postgres";
import Create_Post from "./create_post";
import { Crafty_Girls } from "next/font/google";

export default class Postgres_Post {
  private readonly sql: Sql;
  constructor() {
    const connection_string =
      "postgresql://postgres.xytmqlnbpvqaqwmollnk:FQ_241609@aws-0-us-east-2.pooler.supabase.com:6543/postgres";
    this.sql = postgres(connection_string);
  }

  public async save(post_info: Create_Post) {
    await this
      .sql`INSERT INTO post (title, description, author) VALUES (${post_info.title.value}, ${post_info.description.value}, ${post_info.author.value});`;
  }

  async obtain_posts() {
    try {
      const posts = await this.sql`SELECT * FROM post`;
      const post_list = [];
      for (const post of posts) {
        post_list.push(
          new Create_Post(post.title, post.description, post.author)
        );
      }
      return post_list.length;
    } catch {}
  }
}
