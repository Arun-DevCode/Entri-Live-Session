import React from "react";

export default function ReviewPage() {
  // Event Handler
  function FeedbackHandler(UserName = "Guest User") {
    console.log(UserName);// varun
    console.log("Feedback Sent..");
  }

  //   FeedbackHandler("Varun");
  return (
    <div className="m-12">
      <button
        className="bg-emerald-600 px-2 py-1 rounded text-white"
        onClick={() => FeedbackHandler("varun")}
      >
        Submit Feedback
      </button>
    </div>
  );
}
