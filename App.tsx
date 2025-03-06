import React from "react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-blue-400">Rahul Singh</h1>
        <p className="text-lg mt-2 text-gray-300">
          AI/ML Engineer | Developer | Innovator
        </p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-blue-300">About Me</h2>
          <p className="text-gray-400 mt-2">
            I am a passionate AI/ML Engineer with expertise in predictive
            modeling, computer vision, and NLP.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-blue-300">Projects</h2>
          <ul className="mt-2 text-gray-400 space-y-2">
            <li>
              🔹 <strong>Project 1:</strong> AI-based Chatbot
            </li>
            <li>
              🔹 <strong>Project 2:</strong> Image Classification using CNN
            </li>
            <li>
              🔹 <strong>Project 3:</strong> Predictive Analytics Dashboard
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-blue-300">Contact</h2>
          <p className="text-gray-400 mt-2">
            Email: rahulsingh51775177@gmail.com
          </p>
          <p className="text-gray-400">
            LinkedIn: linkedin.com/in/rahulsingh51775177
          </p>
          <p className="text-gray-400">GitHub: github.com/ctcrahul</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
