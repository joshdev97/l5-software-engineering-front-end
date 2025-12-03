// App.jsx – login + dashboard + chat + profile + settings with screen fade

import { useEffect, useState } from "react";
import logo from "./assets/historyai-logo.png";
import Dashboard from "./dashboard";
import Chat from "./chat";
import Profile from "./profile";
import Settings from "./settings";
import Login from "./login";
import Register from "./register";

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

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [view, setView] = useState("dashboard"); // 'dashboard' | 'chat' | 'profile' | 'settings' | 'login' | 'register'
  const [currentCharacter, setCurrentCharacter] = useState("Alan Turing");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const handleSelectCharacter = (name) => {
    setCurrentCharacter(name);
    setView("chat");
  };

  const handleLogoClick = () => {
    setView("dashboard");
  };

  const handleOpenProfile = () => {
    setView("profile");
  };

  const handleOpenSettings = () => {
    setView("settings");
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setView("dashboard");
  };

  const handleRegisterSuccess = () => {
    setIsLoggedIn(true);
    setView("dashboard");
  };

  if (showSplash) {
    return <Splash />;
  }

  // Route views
  if (view === "login") {
    return (
      <Login
        onSuccess={handleLoginSuccess}
        onBack={() => setView("dashboard")}
      />
    );
  }

  if (view === "register") {
    return (
      <Register
        onSuccess={handleRegisterSuccess}
        onBack={() => setView("dashboard")}
      />
    );
  }

  if (view === "chat") {
    return (
      <Chat
        character={currentCharacter}
        onSelectCharacter={handleSelectCharacter}
        onLogoClick={handleLogoClick}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={toggleSidebar}
        onOpenProfile={handleOpenProfile}
        onOpenSettings={handleOpenSettings}
      />
    );
  }

  if (view === "profile") {
    return (
      <Profile
        onLogoClick={handleLogoClick}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={toggleSidebar}
        onOpenProfile={handleOpenProfile}
        onOpenSettings={handleOpenSettings}
      />
    );
  }

  if (view === "settings") {
    return (
      <Settings
        onLogoClick={handleLogoClick}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={toggleSidebar}
        onOpenProfile={handleOpenProfile}
        onOpenSettings={handleOpenSettings}
      />
    );
  }

  // Default: dashboard
  return (
    <Dashboard
      onSelectCharacter={handleSelectCharacter}
      onLogoClick={handleLogoClick}
      isSidebarOpen={isSidebarOpen}
      onToggleSidebar={toggleSidebar}
      onOpenProfile={handleOpenProfile}
      onOpenSettings={handleOpenSettings}
      isLoggedIn={isLoggedIn}
      onLogin={() => setView("login")}
      onRegister={() => setView("register")}
    />
  );
}

export default App;
