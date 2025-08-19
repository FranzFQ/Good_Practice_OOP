import next from "next";
import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";
import { TLSSocket } from "tls";

export async function POST(request: NextRequest) {
  const data = await request.json();

  const title = data.title;
  const description = data.description;
  const author = data.author;

  try {
    check_title(title);
    check_description(description);
    check_author(author);
    save_post(title, description, author);
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

function check_title(title: string) {
  if (title.length < 5) {
    throw new Error("The title needs more than five characters");
  }
}

function check_description(description: string) {
  if (description.length < 10) {
    throw new Error("The description needs more than ten characters");
  }
}

function check_author(author: string) {
  if (author.length < 3) {
    throw new Error("The author needs more than three characters");
  }
}

async function save_post(title: string, description: string, author: string) {
  const connection_string =
    "postgresql://postgres.xytmqlnbpvqaqwmollnk:FQ_241609@aws-0-us-east-2.pooler.supabase.com:6543/postgres";
  const sql = postgres(connection_string);

  await sql`INSERT INTO post (title, description, author) VALUES (${title}, ${description}, ${author});`;
}
