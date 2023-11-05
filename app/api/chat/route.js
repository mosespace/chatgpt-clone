import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { text } = await request.json();
    console.log("Data received successfully", text);

    const url = process.env.NEXT_PUBLIC_OPEN4_AI_URL;
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_OPEN4_AI_KEY,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_OPEN4_AI_HOST,
      },
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: `${text}`,
          },
        ],
        web_access: false,
        // stream: false,
      }),
    };

    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result);
    const finalResponse = result.MPT;
    console.log(finalResponse);

    const GptResponse = {
      prompt: text,
      response: finalResponse,
    };
    console.log(GptResponse);

    return NextResponse.json({ GptResponse }, { status: 200 });
  } catch (error) {
    console.log("An error occurred while processing the questions", error);
    return NextResponse.json({ error });
  }
}
