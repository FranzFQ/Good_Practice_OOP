import postgres from "postgres";
import Create_Post from "./create_post";

export default class Postgres_Post {
  constructor() {}

  public async save(post_info: Create_Post) {
    const connection_string =
      "postgresql://postgres.xytmqlnbpvqaqwmollnk:FQ_241609@aws-0-us-east-2.pooler.supabase.com:6543/postgres";
    const sql = postgres(connection_string);

    await sql`INSERT INTO post (title, description, author) VALUES (${post_info.title.value}, ${post_info.description.value}, ${post_info.author.value});`;
  }
}
