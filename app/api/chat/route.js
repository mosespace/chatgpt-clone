import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { text } = await request.json();
    console.log("Data received successfully", text);

    const url = "https://open-ai21.p.rapidapi.com/conversationmpt";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "224b9a932fmshe389b43f756ebd1p18ab51jsnebd144e92ef3",
        "X-RapidAPI-Host": "open-ai21.p.rapidapi.com",
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
