import next from "next";
import { NextRequest, NextResponse } from "next/server";
import Load_post from "../utils/load_post";
import Postgres_Post from "../utils/postgres_post";
import In_Memori_Post from "../utils/in_memori_post";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const database = new Postgres_Post();
    const load_post = new Load_post(database)
    load_post.run(data.title, data.description, data.author);
    return NextResponse.json({
      message: "The post its correct",
    });
  } catch (e) {
    console.error("The post had this error: ", e);
    return NextResponse.json(
      {
        e: "Failed to create the post",
      },
      { status: 500 }
    );
  }
}
