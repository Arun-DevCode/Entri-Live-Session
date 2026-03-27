const express = require("express");
const { GoogleGenAI } = require("@google/genai");

// Gemini config
const genai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// Gemini Modal

// Generate Tags for video tile
async function generateAutomatedTags(PromptMessage) {
  try {
    const ai = genai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: PromptMessage,
    });
    if (!ai) {
      console.log(`Error throw!`);
      throw new Error("Internal server issue");
    }
    return ai;
  } catch (error) {
    return error.message;
  }
}

// Server config
const app = express();

// middleware
app.use(express.json()); // Body parser

// get all tags
app.post("/generate-tags", async (req, res) => {
  // Video Title
  const videoTitle = "How to integrate Gemini with Node JS";
  // Prompt
  const prompt = `
    Act as Content Creator, Generate tags based on ${videoTitle}

    return response as json format 
    {
     tags : [ string ]
    }
  `;
  // Generate Tag for video title
  try {
    const genAiRes = await generateAutomatedTags(prompt);
    if (!genAiRes) {
      console.log("Error Raised!");
      throw new Error("failed to generate tags!");
    }
    res.json({
      error: false,
      message: "Generated tags success",
      data: JSON.parse(genAiRes.candidates[0].content.parts[0].text),
    });
  } catch (error) {
    res.json({ error: true, message: error.message, data: null });
  }
});

app.listen(3000, () => console.log("server running.."));
