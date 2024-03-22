import db from "@/libs/db";
import { NextResponse } from "next/server";

export async function GET(request, { searchParams }) {
  try {
    const userId = request.nextUrl.searchParams.get("userId");
    // console.log(userId);

    const chats = await db.chat.findMany({
      where: {
        userId: userId,
      },
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
    const { response, prompt, chatId, userId } = await request.json();

    // Handle the case where response is not provided
    const data = { prompt, chatId };
    if (response) {
      data.response = response;
    }

    if (chatId) {
      const conversation = await db.conversations.create({
        data,
      });

      return NextResponse.json(conversation, {
        status: 201,
      });
    } else {
      const chat = await db.chat.create({
        data: { title: prompt, userId: userId },
      });

      const conversation = await db.conversations.create({
        data: { ...data, chatId: chat.id },
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

