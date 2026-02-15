// const { GoogleGenAI } = require("@google/genai");
// const readlineSync = require('readline-sync');
// require('dotenv').config();
// import dotenv from "dotenv";
// dotenv.config();
import 'dotenv/config';

import { GoogleGenAI } from "@google/genai";
import readlineSync from "readline-sync";

const ai = new GoogleGenAI({
  // apiKey: process.env.API_KEY,
});

async function main() {
  const chat = ai.chats.create({
    model: "gemini-3-flash-preview",
    history: [],
    config: {
      systemInstruction: `You are a coding platform.
Answer only programming-related questions.
If the user asks something unrelated, politely refuse and guide them back to coding.`,
    },
  });

  console.log("Coding Assistant Started (type 'exit' to quit)\n");

  while (true) {
    const question = readlineSync.question("Ask me Question: ");

    if (question.toLowerCase() === "exit") {
      console.log("Goodbye.");
      break;
    }

    try {
      const response = await chat.sendMessage({
        message: question,
      });

      console.log("Response:", response.text, "\n");
    } catch (err) {
      console.error("Error:", err.message);
    }
  }
}

main();


// const ai = new GoogleGenAI({
//   apiKey: process.env.API_KEY
// });

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",

//     config: {
//       systemInstruction: `
// You are a coding platform.
// Answer only programming-related questions.
// If the user asks something unrelated, politely refuse and guide them back to coding.
// `
//     },

//     contents: "What is LinkedList? Explain it."
//   });

//   console.log(response.text);
// }

// main().catch(console.error);
