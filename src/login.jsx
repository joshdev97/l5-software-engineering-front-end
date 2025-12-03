// login.jsx – Full-page login with same fade-in as other screens

import { useState } from "react";
import logo from "./assets/historyai-logo.png";

function Login({ onSuccess, onBack }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulated auth
    setTimeout(() => {
      setIsLoading(false);
      onSuccess();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-4 animate-dashboardIn">
      <div className="w-full max-w-sm rounded-2xl bg-[#020617] border border-gray-700 px-6 py-8 shadow-2xl">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <img
            src={logo}
            alt="history.ai logo"
            className="h-10 w-auto object-contain"
          />
          <h1 className="text-lg font-semibold">Log in</h1>
          <p className="text-[11px] text-gray-400 text-center">
            Access your history.ai conversations
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-300">Email</label>
            <input
              type="email"
              className="w-full rounded-lg bg-[#020617] border border-gray-700 px-3 py-2 text-xs text-gray-100 placeholder-gray-500 focus:outline-none focus:border-sky-500"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-300">Password</label>
            <input
              type="password"
              className="w-full rounded-lg bg-[#020617] border border-gray-700 px-3 py-2 text-xs text-gray-100 placeholder-gray-500 focus:outline-none focus:border-sky-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || !email || !password}
            className="mt-2 w-full rounded-full bg-sky-500 py-2 text-xs font-semibold hover:bg-sky-400 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {isLoading ? "Signing in..." : "Log in"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 space-y-2 text-[11px] text-gray-400">
          <button
            type="button"
            onClick={onBack}
            className="w-full rounded-full border border-gray-600 py-2 text-xs font-semibold text-gray-200 hover:bg-gray-700 transition"
          >
            ← Back to dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
