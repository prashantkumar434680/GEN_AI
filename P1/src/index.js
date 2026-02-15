require("dotenv").config();

async function main() {
  const res = await fetch("https://router.huggingface.co/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.HF_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "meta-llama/Meta-Llama-3-8B-Instruct",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: "Explain CPU scheduling in simple words." }
      ],
      max_tokens: 150
    })
  });

  // 👇 important for debugging
  const text = await res.text();

  try {
    const json = JSON.parse(text);
    console.log(json.choices[0].message.content);
  } catch (e) {
    console.error("Raw response from HF:\n", text);
  }
}

main();
