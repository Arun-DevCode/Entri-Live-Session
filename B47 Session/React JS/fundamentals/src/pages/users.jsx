import { Form } from "react-router";

function UsersPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-slate-100 p-8">
        <h1 className="text-2xl font-bold text-slate-800 text-center mb-6">
          Welcome to User Page
        </h1>

        <Form method="POST" className="space-y-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-semibold text-slate-700"
            >
              User Feedback
            </label>
            <textarea
              name="feedback"
              id="message"
              rows={4}
              placeholder="Drop your feedback..."
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none text-slate-800 placeholder-slate-400 text-sm"
            ></textarea>

            <input name="rating" type="text" placeholder="rating" />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-lg shadow-sm hover:shadow transition-all duration-200 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit Feedback
          </button>
        </Form>
      </div>
    </div>
  );
}

export default UsersPage;
