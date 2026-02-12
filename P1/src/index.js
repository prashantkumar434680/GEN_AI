require('dotenv').config();
const { HfInference } = require('@huggingface/inference');

const hf = new HfInference(process.env.HF_TOKEN);

async function main() {
  const response = await hf.chatCompletion({
    model: "HuggingFaceH4/zephyr-7b-beta",
    messages: [
      { role: "system", content: "You are a helpful AI agent." },
      { role: "user", content: "Plan a study schedule for a CS student." }
    ],
    max_tokens: 200,
  });

  console.log(response.choices[0].message.content);
}

main();
