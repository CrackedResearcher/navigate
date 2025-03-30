import React, { useState } from 'react';

const PromptBox = ({ onSubmit }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt);
      setPrompt('');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="relative flex items-center">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here..."
          className="w-full px-4 py-3 pr-12 text-gray-700 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
        />
        <button
          type="submit"
          className="absolute right-2 p-2 text-blue-500 hover:text-blue-600 transition-colors"
          aria-label="Send prompt"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              d="M3.478 2.404a.75.75 0 00-.926.941l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.404z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default PromptBox;