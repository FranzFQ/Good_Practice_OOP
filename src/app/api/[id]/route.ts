import In_Memori_Post from "@/app/utils/in_memori_post";
import Postgres_Post from "@/app/utils/postgres_post";
import { NextRequest, NextResponse } from "next/server";
import { json } from "stream/consumers";

export async function PUT(request: Request, { info }: any) {
  try {
    const { id } = await info;
    const data = await request.json();
    const database = new Postgres_Post();
    const update = await database.update_post(id, data);

    if (update === false) {
      return NextResponse.json({
        error: "id not found",
      });
    }

    return NextResponse.json({
      message: "update successfully",
    });
  } catch (e) {
    return NextResponse.json({
      error: "Fail to update",
    });
  }
}
