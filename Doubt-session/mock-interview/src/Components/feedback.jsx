// import { useForm } from "react-hook-form";

// function feedback() {
//   const { register, handleSubmit, watch } = useForm({
//     defaultValues: {
//       fullName: "",
//       rating: "😐",
//       message: "",
//     },
//   });

//   const feedbackCounter = watch();
//   const messageLimit = feedbackCounter.message.trim().length;
//   console.log("You reached limit:");

//   // Form submission
//   const onSubmit = (data) => {
//     console.log("Form Submitted", data);
//   };

//   return (
//     <div class="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//       <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
//         <div class="mb-8 text-center">
//           <h2 class="text-2xl font-bold text-gray-800">We value your input</h2>
//           <p class="text-gray-500 mt-2">
//             How was your experience with our product?
//           </p>
//         </div>

//         <form class="space-y-6" onSubmit={handleSubmit(onSubmit)}>
//           <div>
//             <label class="block text-sm font-semibold text-gray-700 mb-1">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="fullName"
//               {...register("fullName", {
//                 required: {
//                   value: true,
//                   message: "Full Name is required!",
//                 },
//               })}
//               placeholder="Jane Doe"
//               class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition duration-200"
//             />
//           </div>

//           <div>
//             <label class="block text-sm font-semibold text-gray-700 mb-3">
//               Rating
//             </label>
//             <div class="flex justify-between gap-2">
//               <button
//                 type="button"
//                 class="flex-1 py-2 border border-gray-200 rounded-md hover:bg-indigo-50 hover:border-indigo-500 transition-colors"
//                 {...register("rating", {
//                   required: {
//                     // value: true,
//                     message: "rating is required!",
//                   },
//                 })}
//               >
//                 😞
//               </button>
//               <button
//                 type="button"
//                 name="rating"
//                 class="flex-1 py-2 border border-gray-200 rounded-md hover:bg-indigo-50 hover:border-indigo-500 transition-colors"
//                 {...register("rating", {
//                   required: {
//                     // value: true,
//                     message: "rating is required!",
//                   },
//                 })}
//               >
//                 😐
//               </button>
//               <button
//                 type="button"
//                 name="rating"
//                 {...register("rating", {
//                   required: {
//                     // value: true,
//                     message: "rating is required!",
//                   },
//                 })}
//                 class="flex-1 py-2 border border-indigo-500 bg-indigo-50 rounded-md text-indigo-700"
//               >
//                 😊
//               </button>
//               <button
//                 type="button"
//                 name="rating"
//                 {...register("rating", {
//                   required: {
//                     // value: true,
//                     message: "rating is required!",
//                   },
//                 })}
//                 class="flex-1 py-2 border border-gray-200 rounded-md hover:bg-indigo-50 hover:border-indigo-500 transition-colors"
//               >
//                 🤩
//               </button>
//             </div>
//           </div>

//           <div className="relative">
//             <label class="block text-sm font-semibold text-gray-700 mb-1">
//               Your Message
//             </label>
//             <textarea
//               rows="4"
//               name="message"
//               {...register("message", {
//                 required: {
//                   value: true,
//                   message: "Message is required!",
//                 },
//               })}
//               placeholder="Tell us what we can improve..."
//               maxLength={255}
//               class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none transition duration-200 "
//             ></textarea>

//             <div className="absolute right-3 bottom-3">
//               {feedbackCounter && (
//                 <span className="font-semibold cursor-not-allowed">
//                   {messageLimit}/255
//                 </span>
//               )}
//             </div>
//           </div>

//           <button
//             type="submit"
//             class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transform active:scale-[0.98] transition-all duration-150"
//           >
//             Send Feedback
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default feedback;

import { useState } from "react";

function feedback() {
  const [feedbackCounter, setFeedbackCounter] = useState(0);
  const [message, setMessage] = useState("");
  console.log(feedbackCounter);

  const handleFeedbackLimiter = (e) => {
    const message = e.target.value; //random length
    setMessage(message.trim());
    setFeedbackCounter(
      message.length !== message.trim().length
        ? feedbackCounter
        : feedbackCounter + 1,
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            We value your input
          </h2>
          <p className="text-gray-500 mt-2">
            How was your experience with our product?
          </p>
        </div>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Jane Doe"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Rating
            </label>
            <div className="flex justify-between gap-2">
              <button
                type="button"
                className="flex-1 py-2 border border-gray-200 rounded-md hover:bg-indigo-50 hover:border-indigo-500 transition-colors"
              >
                😞
              </button>
              <button
                type="button"
                className="flex-1 py-2 border border-gray-200 rounded-md hover:bg-indigo-50 hover:border-indigo-500 transition-colors"
              >
                😐
              </button>
              <button
                type="button"
                className="flex-1 py-2 border border-indigo-500 bg-indigo-50 rounded-md text-indigo-700"
              >
                😊
              </button>
              <button
                type="button"
                className="flex-1 py-2 border border-gray-200 rounded-md hover:bg-indigo-50 hover:border-indigo-500 transition-colors"
              >
                🤩
              </button>
            </div>
          </div>
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              onChange={handleFeedbackLimiter}
              rows={4}
              placeholder="Tell us what we can improve..."
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition duration-200 resize-none"
              defaultValue={""}
            />
            <div className="absolute right-3 bottom-3">
              <span className="font-semibold cursor-not-allowed">
                {feedbackCounter}/255
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transform active:scale-[0.98] transition-all duration-150"
          >
            Send Feedback
          </button>
        </form>
      </div>
    </div>
  );
}

export default feedback;
