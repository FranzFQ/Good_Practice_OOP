import next from "next";
import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

export async function POST(request: NextRequest) {
  const data = await request.json();

  const title = data.title;
  const description = data.description;
  const author = data.author;
  try {
    if (title.length < 5) {
      throw new Error("The title needs more than five characters");
    }

    if (description < 10) {
      throw new Error("The description needs more than ten characters");
    }

    if (author < 3) {
      throw new Error("The author needs more than three characters");
    }
    const connection_string =
      "postgresql://postgres.xytmqlnbpvqaqwmollnk:FQ_241609@aws-0-us-east-2.pooler.supabase.com:6543/postgres";
    const sql = postgres(connection_string);

    await sql`INSERT INTO post (title, description, author) VALUES (${title}, ${description}, ${author});`;

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
