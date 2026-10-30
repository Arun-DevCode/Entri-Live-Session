import { useState } from "react";

function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/interactions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": "Your-API-KEY-HERE",
          },
          body: JSON.stringify({
            model: "gemini-3.1-flash-image",
            input: [
              {
                type: "text",
                text: prompt,
              },
            ],
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "Generation failed");
      }

      const generatedImage = data.output_image;

      setImage(`data:image/png;base64,${generatedImage.data}`);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe the image..."
      />

      <button onClick={generateImage} disabled={loading}>
        {loading ? "Generating..." : "Generate Image"}
      </button>

      {image && <img src={image} alt="Generated" style={{ width: "500px" }} />}
    </div>
  );
}

export default ImageGenerator;
