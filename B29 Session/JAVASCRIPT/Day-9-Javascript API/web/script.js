// SELECT ELEMENTS
const input = document.querySelector(".text-container input");
const speakBtn = document.querySelector(".text-container button");

const startSpeechBtn = document.querySelector(".speech-container button");
const transcriptContainer = document.querySelector(".transcript-container");

// TEXT TO SPEECH (TTS)
speakBtn.addEventListener("click", () => {
  const text = input.value.trim(); // hi everyone

  if (!text) {
    alert("Please enter text to speak");
    return;
  }

  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  speech.pitch = 1;
  speech.rate = 1;

  // Audio
  console.log("Audio:", speech);

  window.speechSynthesis.speak(speech);
});

// SPEECH TO TEXT (STT)
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  alert("Speech Recognition not supported in this browser");
} else {
  const recognition = new SpeechRecognition();

  recognition.lang = "en-US";
  recognition.continuous = false;
  recognition.interimResults = false;

  // Start listening
  startSpeechBtn.addEventListener("click", () => {
    recognition.start();
    startSpeechBtn.innerText = "Listening...";
  });

  // Result
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;

    transcriptContainer.innerHTML = `
      <p><strong>You said:</strong> ${transcript}</p>
    `;

    startSpeechBtn.innerText = "Start Speech";
  };

  // Error handling
  recognition.onerror = (event) => {
    transcriptContainer.innerHTML = `
      <p style="color:red;">Error: ${event.error}</p>
    `;
    startSpeechBtn.innerText = "Start Speech";
  };

  // When speech ends
  recognition.onend = () => {
    startSpeechBtn.innerText = "Start Speech";
  };
}
