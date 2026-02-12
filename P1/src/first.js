import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey:"AIzaSyCZatZkxBJYyHlLeiu9dm4AMq14zzS5a-g"});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents:[

    {role:"user",
     text:"Explain me some important points about the Block Chain Devlopment"  
    },
    {
      role:"model",
      text:"can u guess my name"
    },
    {
      role:"model",
      text:"My name is Prashant Choudhary"
    },
    {
      role:"user",
      text:"what is Today Date and Year"
    }

]
  });
  console.log(response.text);
}

await main();
