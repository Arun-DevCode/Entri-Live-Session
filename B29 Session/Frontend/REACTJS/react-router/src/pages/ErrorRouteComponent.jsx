import React from "react";

export default function ErrorRouteComponent() {
  return (
  <div className="bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 min-h-screen flex items-center justify-center px-6 py-12">
  <div className="text-center max-w-xl w-full space-y-8 animate-fade-in">
    <div className="relative flex justify-center">
      <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/5 blur-3xl rounded-full w-72 h-72 mx-auto -top-10" />
      <h1 className="text-9xl font-black tracking-tight text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 select-none">
        404
      </h1>
    </div>
    <div className="space-y-3">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
        Looks like you're lost.
      </h2>
      <p className="text-base text-gray-600 dark:text-gray-400 max-w-md mx-auto">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
    </div>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a href="/" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-200 group">
        Take me home
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
      <button onclick="history.back()" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 active:bg-gray-100 rounded-xl transition-all duration-200">
        Go back
      </button>
    </div>
    <div className="pt-8 border-t border-gray-200 dark:border-gray-800/60 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-gray-500 dark:text-gray-400">
      <a href="/support" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
        Contact Support
      </a>
      <span className="text-gray-300 dark:text-gray-700">•</span>
      <a href="/status" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
        System Status
      </a>
      <span className="text-gray-300 dark:text-gray-700">•</span>
      <a href="/search" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
        Search Site
      </a>
    </div>
  </div>
</div>

  );
}
