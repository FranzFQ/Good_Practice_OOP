import next from "next";
import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";
import { TLSSocket } from "tls";
import Create_Post from "./create_post";
import Save_Post from "./save_post";

export async function POST(request: NextRequest) {
  const data = await request.json();

  const title = data.title;
  const description = data.description;
  const author = data.author;

  try {
    const post = new Create_Post(title, description, author)
    const database = new Save_Post()
    database.save(post)
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

