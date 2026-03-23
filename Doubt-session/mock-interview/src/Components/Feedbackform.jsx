import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Star } from "lucide-react";

const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { rating: 0 },
  });

  // Watch the rating value to update the UI
  const currentRating = watch("rating");
  const [hoverRating, setHoverRating] = useState(0);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert(`Rating: ${data.rating} stars!`);
    reset();
    setHoverRating(0);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-2xl shadow-2xl border border-gray-100">
      <h2 className="text-2xl font-bold mb-1 text-gray-800 text-center">
        Feedback
      </h2>
      <p className="text-gray-400 text-center mb-6 text-sm">
        How was your experience?
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Manual Star Rating Logic */}
        <div className="flex flex-col items-center">
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => {
                  // Manually setting the value in react-hook-form
                  setValue("rating", star, { shouldValidate: true });
                }}
                className="focus:outline-none transition-transform active:scale-110 p-1"
              >
                <Star
                  size={32}
                  className={`transition-colors duration-150 ${
                    star <= (hoverRating || currentRating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-200"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Hidden input to ensure validation rules apply */}
          <input
            type="hidden"
            {...register("rating", {
              required: "Please pick a star rating",
              min: { value: 1, message: "Please pick a star rating" },
            })}
          />

          {errors.rating && (
            <p className="mt-2 text-xs text-red-500 font-medium italic">
              {errors.rating.message}
            </p>
          )}
        </div>

        {/* Name Input */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1 ml-1">
            Name
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all outline-none ${
              errors.name
                ? "border-red-400 focus:border-red-500"
                : "border-gray-100 focus:border-indigo-500"
            }`}
            placeholder="Your name"
          />
        </div>

        {/* Message Input */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1 ml-1">
            Message
          </label>
          <textarea
            {...register("message", { required: "Message is required" })}
            rows="3"
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all outline-none ${
              errors.message
                ? "border-red-400 focus:border-red-500"
                : "border-gray-100 focus:border-indigo-500"
            }`}
            placeholder="Tell us more..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-black transition-colors shadow-lg active:scale-[0.98]"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
