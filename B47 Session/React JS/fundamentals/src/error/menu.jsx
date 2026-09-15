import React from "react";

export default function MenuErrorUI() {
  return (
    <div className="max-w-xs mx-auto my-8 p-6 bg-white rounded-2xl border border-zinc-100 shadow-sm text-center">
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 text-rose-500 mb-3">
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
      </div>
      <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
        Error 404
      </h3>
      <h4 className="mt-1 text-base font-semibold text-zinc-900">
        Menu Item Unavailable
      </h4>
      <p className="mt-1.5 text-xs text-zinc-500 leading-relaxed">
        We couldn't load this dish details. It might have been updated or
        removed.
      </p>
      <button
        type="button"
        className="mt-5 w-full rounded-xl bg-zinc-900 py-2.5 text-xs font-medium text-white transition-colors hover:bg-zinc-800 active:bg-zinc-950"
      >
        Try refreshing
      </button>
    </div>
  );
}
