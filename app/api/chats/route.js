import db from "@/libs/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { response, prompt } = await request.json();

    const finalChat = await db.bot.create({
      data: { prompt, response },
    });
    console.log(finalChat);
    return NextResponse.json(finalChat, {
      status: 201,
    });
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

{
  /* Creating A New Record We Use the Post and also === request */
}

// export async function POST(request) {
//   try {
//     const { names, phone, email, image } = await request.json();

//     const data = {
//       names,
//       email,
//       phone,
//       image,
//     };

//     const new_contact = await db.contact.create({
//       data,
//     });
//     // console.log(new_contact);

//     return NextResponse.json(new_contact, { status: 201 });
//   } catch (error) {
//     console.log(
//       "An Error occurred while trying to create the contact. Read more about it below",
//       error
//     );
//     return NextResponse.json(
//       {
//         message: "Failure to create a contact",
//         error: error.message,
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }
