const API_KEY = "";

async function generateText() {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: "Explain how LLM works in simple terms",
              },
            ],
          },
        ],
      }),
    },
  );

  const data = await response.json(); // JSON -> Object
  console.log(data.candidates[0].content.parts[0].text);
  return data.candidates[0].content.parts[0].text;
}

// Select
const action = document.querySelector("button");
const resContainer = document.querySelector(".res-container");

action.addEventListener("click", async () => {
  try {
    const res = await generateText();
    console.log("Final Response : ", res);
  } catch (error) {}
});
