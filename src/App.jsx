// App.jsx - FIXED SO "CREATE AN ACCOUNT" DOES NOT GO TO DASHBOARD
import { useEffect, useState } from "react";
import logo from "./assets/historyai-logo.png";
import Dashboard from "./dashboard";
import Chat from "./chat";

function Splash() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="relative flex flex-col items-center">
        <img
          src={logo}
          alt="history.ai logo"
          className="scale-25 origin-center animate-logoIn block"
        />
        <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2">
          <p className="text-xs text-white/70 animate-textIn">
            Developed by Group 10
          </p>
        </div>
      </div>
    </div>
  );
}

function Login({ mode, setMode, onContinue }) {
  const isLogin = mode === "login";

  function handleSubmit(e) {
    e.preventDefault();
    if (isLogin) {
      // ONLY login submits go to dashboard
      onContinue();
    }
    // register submit stays on this screen for now
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-sm rounded-2xl bg-[#1f2933] px-6 py-6 shadow-lg animate-screenIn">
        <header className="flex items-center justify-center mb-6">
          <img
            src={logo}
            alt="history.ai logo"
            className="h-10 object-contain"
          />
        </header>

        <main>
          {isLogin ? (
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-300">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg bg-[#020617] border border-gray-700 px-3 py-2 text-xs focus:outline-none focus:border-sky-500"
                  placeholder="you@example.com"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-300">Password</label>
                <input
                  type="password"
                  className="w-full rounded-lg bg-[#020617] border border-gray-700 px-3 py-2 text-xs focus:outline-none focus:border-sky-500"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="mt-3 w-full rounded-full bg-sky-500 py-2 text-xs font-semibold hover:bg-sky-400 transition"
              >
                Chat Now
              </button>

              {/* just switches view to register */}
              <button
                type="button"
                onClick={() => setMode("register")}
                className="w-full rounded-full border border-gray-500 py-2 text-xs font-semibold text-gray-200 hover:bg-gray-700 transition"
              >
                Create an account
              </button>
            </form>
          ) : (
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-300">Full name</label>
                <input
                  type="text"
                  className="w-full rounded-lg bg-[#020617] border border-gray-700 px-3 py-2 text-xs focus:outline-none focus:border-sky-500"
                  placeholder="Your name"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-300">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg bg-[#020617] border border-gray-700 px-3 py-2 text-xs focus:outline-none focus:border-sky-500"
                  placeholder="you@example.com"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-300">Password</label>
                <input
                  type="password"
                  className="w-full rounded-lg bg-[#020617] border border-gray-700 px-3 py-2 text-xs focus:outline-none focus:border-sky-500"
                  placeholder="Create a password"
                />
              </div>

              <button
                type="submit"
                className="mt-3 w-full rounded-full bg-sky-500 py-2 text-xs font-semibold hover:bg-sky-400 transition"
              >
                Create account
              </button>

              <button
                type="button"
                onClick={() => setMode("login")}
                className="w-full rounded-full border border-gray-500 py-2 text-xs font-semibold text-gray-200 hover:bg-gray-700 transition"
              >
                Back to login
              </button>
            </form>
          )}
        </main>
      </div>
    </div>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [authMode, setAuthMode] = useState("login"); // 'login' | 'register'
  const [view, setView] = useState("login"); // 'login' | 'dashboard' | 'chat'
  const [currentCharacter, setCurrentCharacter] = useState("Alan Turing");

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  function handleAuthContinue() {
    setView("dashboard");
  }

  function handleSelectCharacter(name) {
    setCurrentCharacter(name);
    setView("chat");
  }

  function handleLogoClick() {
    setView("dashboard");
  }

  if (showSplash) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Splash />
      </div>
    );
  }

  if (view === "chat") {
    return (
      <Chat
        character={currentCharacter}
        onBack={() => setView("dashboard")}
        onSelectCharacter={handleSelectCharacter}
        onLogoClick={handleLogoClick}
      />
    );
  }

  if (view === "dashboard") {
    return (
      <div className="min-h-screen bg-black text-white">
        <Dashboard
          onSelectCharacter={handleSelectCharacter}
          onLogoClick={handleLogoClick}
        />
      </div>
    );
  }

  // login / register
  return (
    <div className="min-h-screen bg-black text-white">
      <Login
        mode={authMode}
        setMode={setAuthMode}
        onContinue={handleAuthContinue}
      />
    </div>
  );
}

export default App;
