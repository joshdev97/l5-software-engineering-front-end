// chat.jsx – MENU CARD MATCHING DASHBOARD + PROFILE/SETTINGS NAV
// WITH CHAT STATE MANAGEMENT (messages, input, isLoading, error, refs, welcome message)

import { useState, useRef, useEffect } from "react";
import logo from "./assets/historyai-logo.png";
import icon from "./assets/historyai-icon.png";
import alanImg from "./assets/alan-turing.png";
import adaImg from "./assets/ada-lovelace.png";
import johnImg from "./assets/john-von-neumann.png";
import Sidebar from "./sidebar";
import menuIcon from "./assets/menu.png";

const CHARACTER_CONFIG = {
  "Alan Turing": {
    image: alanImg,
    bio: "Alan Turing was an English mathematician and codebreaker whose work on universal computing machines, wartime codebreaking of Enigma, and early ideas about machine intelligence laid the foundations of modern computer science and AI.",
  },
  "Ada Lovelace": {
    image: adaImg,
    bio: "Ada Lovelace was a 19th‑century English mathematician who collaborated with Charles Babbage on his Analytical Engine and is often regarded as the first computer programmer for her visionary notes on what the machine could do.",
  },
  "John von Neumann": {
    image: johnImg,
    bio: "John von Neumann was a Hungarian‑American mathematician and polymath who helped define the stored‑program computer architecture, made pioneering contributions to game theory, and worked on quantum mechanics and nuclear physics.",
  },
};

// Utility function to format timestamp into readable form (e.g., "4:32 PM")
const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const adjustedHours = hours % 12 || 12;
  const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${adjustedHours}:${paddedMinutes} ${ampm}`;
};

function Chat({
  character = "Alan Turing",
  onSelectCharacter,
  onLogoClick,
  isSidebarOpen,
  onToggleSidebar,
  onOpenProfile,
  onOpenSettings,
}) {
  // 1.1 Chat state management
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "ai",
      content:
        "Welcome to HistoryAI! I'm here to help you explore the foundations of computing through conversations with historical AI pioneers. Ask me anything about computing history!",
      timestamp: Date.now(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const lastMessageTimeRef = useRef(Date.now());
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const fallback = CHARACTER_CONFIG["Alan Turing"];
  const config = CHARACTER_CONFIG[character] || fallback;

  // Auto-scroll to bottom when new messages added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // 1.2 Implement sendMessage function
  const sendMessage = () => {
    // Check 5-second throttle
    const now = Date.now();
    if (now - lastMessageTimeRef.current < 5000) {
      setError("Please wait 5 seconds between messages.");
      return false;
    }

    // Validate: not empty, not whitespace-only, max 1500 chars
    const trimmedInput = input.trim();
    if (!trimmedInput) {
      setError("Message cannot be empty.");
      return false;
    }
    if (trimmedInput.length > 1500) {
      setError("Message cannot exceed 1500 characters.");
      return false;
    }

    // Add user message to chat
    const userMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmedInput,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setError(null);
    lastMessageTimeRef.current = now;

    // Simulate AI response after 1.5s delay
    setTimeout(() => {
      const aiResponse = {
        id: `ai-${Date.now()}`,
        role: "ai",
        content: `Thanks for your message: "${userMessage.content}". This is a demo response from ${character}. In a real app, this would come from an AI API!`,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const characterCount = input.length;

  return (
    <div className="min-h-screen bg-[#050816] text-white flex animate-dashboardIn">
      {/* COLLAPSIBLE SIDEBAR */}
      <Sidebar
        onSelectCharacter={onSelectCharacter}
        onLogoClick={onLogoClick}
        onOpenProfile={onOpenProfile}
        onOpenSettings={onOpenSettings}
        isOpen={isSidebarOpen}
      />

      {/* MAIN CHAT AREA (full background) */}
      <main className="flex-1 bg-[#050816] px-4 py-4 flex flex-col relative h-screen">
        {/* Tiled background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute opacity-2"
            style={{
              inset: "-100%",
              backgroundImage: `url(${icon})`,
              backgroundRepeat: "repeat",
              backgroundSize: "40px 40px",
              transform: "rotate(45deg)",
              transformOrigin: "center",
            }}
          />
        </div>

        {/* CONTENT LAYER */}
        <div className="relative flex flex-col h-full gap-4">
          {/* TOP BAR */}
          <header className="mb-3 flex items-center justify-between gap-3 flex-shrink-0">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              {/* MENU CARD */}
              <div className="h-16 flex items-center">
                <div className="h-10 w-10 rounded-lg bg-020617 border border-gray-700 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={onToggleSidebar}
                    className="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-150 ease-out hover:scale-110"
                  >
                    <img
                      src={menuIcon}
                      alt="Open sidebar"
                      className="w-full h-full object-contain"
                    />
                  </button>
                </div>
              </div>

              {/* CHARACTER PROFILE (restored) */}
              <div className="h-12 rounded-2xl bg-020617 border border-gray-700 px-4 flex items-center gap-3 min-w-0 flex-1">
                <div className="w-9 h-9 rounded-full bg-gray-400 overflow-hidden">
                  <img
                    src={config.image}
                    alt={character}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate">{character}</p>
                  <p className="text-[10px] text-gray-400 truncate whitespace-nowrap">
                    {config.bio}
                  </p>
                </div>
              </div>
            </div>

            {/* history.ai logo */}
            <div className="flex-shrink-0 flex items-center justify-end">
              <img
                src={logo}
                alt="history.ai logo"
                className="h-8 md:h-9 w-auto object-contain"
              />
            </div>
          </header>

          {/* MESSAGES AREA */}
          <section className="flex-1 flex flex-col gap-4 overflow-y-auto scrollbar-hide pb-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "items-start"
                } gap-3`}
              >
                {message.role === "ai" && (
                  <>
                    <div className="w-7 h-7 rounded-full bg-gray-400 flex-shrink-0 overflow-hidden">
                      <img
                        src={config.image}
                        alt={character}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="flex flex-col max-w-[85%]">
                      <span className="text-sm text-white font-semibold mb-1">
                        {character}
                      </span>
                      <p className="text-[15px] leading-snug font-thin text-[#BEE6F9] m-0">
                        {message.content}
                      </p>
                      <span className="text-xs text-gray-500 mt-0.5">
                        {formatTimestamp(message.timestamp)}
                      </span>
                    </div>
                  </>
                )}
                {message.role === "user" && (
                  <div className="flex flex-col items-end max-w-[85%]">
                    <div className="text-[15px] leading-snug font-thin text-white bg-[#124968] px-3 py-2 rounded-2xl">
                      {message.content}
                    </div>
                    <span className="text-xs text-gray-500 mt-0.5">
                      {formatTimestamp(message.timestamp)}
                    </span>
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-start gap-3 mt-2">
                <div className="w-7 h-7 rounded-full bg-gray-400 flex-shrink-0 overflow-hidden">
                  <img
                    src={config.image}
                    alt={character}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex flex-col max-w-[85%]">
                  <span className="text-sm text-white font-semibold mb-1">
                    {character}
                  </span>
                  <div className="inline-flex items-center gap-1 px-3 py-2 bg-transparent">
                    <span className="typing-dot" />
                    <span className="typing-dot typing-dot-delay-1" />
                    <span className="typing-dot typing-dot-delay-2" />
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="flex justify-center">
                <div className="p-3 rounded-2xl bg-red-500/20 border border-red-500/50 text-red-300 text-xs max-w-xs animate-pulse">
                  {error}
                </div>
              </div>
            )}

            {/* Scroll anchor */}
            <div ref={messagesEndRef} />
          </section>

          {/* INPUT BAR - Send button INSIDE bubble with custom caret color */}
          <form className="flex flex-col gap-1 flex-shrink-0" onSubmit={handleSubmit}>
            <div 
              className="relative flex items-center bg-020617 border border-gray-700 rounded-2xl px-3 focus-within:border-sky-500 focus-within:shadow-0-0-1px-rgba(56,189,248,0.6) transition-all duration-150 h-12"
              style={{ position: "relative" }}
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Enter your message..."
                className="flex-1 bg-transparent outline-none text-xs text-gray-200 py-2 pr-12 resize-none max-h-24 mr-10 caret-[#8FD5F5]"
                disabled={isLoading}
                maxLength={1500}
                rows={1}
                aria-label="Enter your message"
              />
              {/* Send button positioned INSIDE the bubble */}
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-9 h-9 rounded-full flex items-center justify-center text-lg transition-all duration-150 absolute right-3 top-1/2 transform -translate-y-1/2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: "#1BA1DA" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#8FD5F5";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#1BA1DA";
                }}
                aria-label="Send message"
              >
                ➤
              </button>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Shift + Enter for new line</span>
              <span>{characterCount}/1500</span>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Chat;
