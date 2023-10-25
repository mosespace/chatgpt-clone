import db from "@/libs/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const chats = await db.chat.findMany({
      include: {
        conversation: true,
      },
    });
    // console.log(chats);

    return NextResponse.json(chats, {
      status: 201,
    });
  } catch (error) {
    console.log(
      "An Error occurred while trying to fetch chats from superbase db",
      error
    );
    return NextResponse.json(
      {
        message: "Failed to get the chats",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request) {
  try {
    const { response, prompt, chatId } = await request.json();
    console.log(typeof chatId);

    if (chatId) {
      console.log(chatId);
      const conversation = await db.conversations.create({
        data: { prompt, response, chatId },
      });
      console.log(conversation);
      return NextResponse.json(conversation, {
        status: 201,
      });
    } else {
      const chat = await db.chat.create({
        data: {
          title: prompt,
        },
      });

      const conversation = await db.conversations.create({
        data: { prompt, response, chatId: chat.id },
      });

      return NextResponse.json(conversation, {
        status: 201,
      });
    }
  } catch (error) {
    console.log(
      "An Error occurred while trying to add the question to the Superbase",
      error
    );
    return NextResponse.json(
      {
        message: "Failure to Update The Superbase",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
