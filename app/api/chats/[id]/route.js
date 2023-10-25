import db from "@/libs/db";
import { NextResponse } from "next/server";
{
  /* Going to the single detailed page */
}
export async function GET(request, { params: { id } }) {
  // console.log(id);
  try {
    const chat = await db.chat.findUnique({
      where: { id: parseInt(id) },
      include: {
        conversation: true,
      },
    });
    // console.log(chat);
    // console.log(id);

    if (!chat) {
      return NextResponse.json(
        {
          message: "Single Chat Is Not Found",
          error: error.message,
        },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json(chat);
  } catch (error) {
    console.log(
      "An Error occurred while trying to fetch the detailed page for a chat",
      error
    );
    return NextResponse.json(
      {
        message: "Failure to fetch the detailed chat",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
