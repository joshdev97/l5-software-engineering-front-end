// chat.jsx – MENU CARD MATCHING DASHBOARD + PROFILE/SETTINGS NAV
// WITH CHAT STATE MANAGEMENT + AI WORD-BY-WORD TYPING

import { useState, useRef, useEffect } from "react";
import logo from "./assets/historyai-logo.png";
import icon from "./assets/historyai-icon.png";
import alanImg from "./assets/alan-turing.png";
import adaImg from "./assets/ada-lovelace.png";
import johnImg from "./assets/john-von-neumann.png";
import Sidebar from "./sidebar";

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
  const [isTyping, setIsTyping] = useState(false);
  const [hasStartedTyping, setHasStartedTyping] = useState(false);
  const [error, setError] = useState(null);
  const [hasSentFirstMessage, setHasSentFirstMessage] = useState(false);

  const lastMessageTimeRef = useRef(Date.now());
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const fallback = CHARACTER_CONFIG["Alan Turing"];
  const config = CHARACTER_CONFIG[character] || fallback;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const sendMessage = () => {
    const now = Date.now();

    if (isTyping) {
      setError("Please wait for the AI to finish responding.");
      return false;
    }

    if (hasSentFirstMessage && now - lastMessageTimeRef.current < 5000) {
      setError("Please wait 5 seconds between messages.");
      return false;
    }

    const trimmedInput = input.trim();
    if (!trimmedInput) {
      setError("Message cannot be empty.");
      return false;
    }
    if (trimmedInput.length > 1500) {
      setError("Message cannot exceed 1500 characters.");
      return false;
    }

    const userMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmedInput,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setIsTyping(true);
    setHasStartedTyping(false);
    setError(null);
    lastMessageTimeRef.current = now;
    if (!hasSentFirstMessage) setHasSentFirstMessage(true);

    setTimeout(() => {
      const fullText = `Thanks for your message: "${userMessage.content}". This is a demo response from ${character}. In a real app, this would come from an AI API!`;

      const words = fullText.split(" ");
      const messageId = `ai-${Date.now()}`;
      const startTimestamp = Date.now();

      setMessages((prev) => [
        ...prev,
        {
          id: messageId,
          role: "ai",
          content: "",
          timestamp: startTimestamp,
        },
      ]);

      let index = 0;
      const stepMs = 120;

      const interval = setInterval(() => {
        index += 1;

        if (!hasStartedTyping && index > 0) {
          setHasStartedTyping(true);
        }

        setMessages((prev) =>
          prev.map((m) => {
            if (m.id !== messageId) return m;
            const nextContent = words.slice(0, index).join(" ");
            return { ...m, content: nextContent };
          })
        );

        if (index >= words.length) {
          clearInterval(interval);
          setIsLoading(false);
          setIsTyping(false);
          setHasStartedTyping(false);
        }
      }, stepMs);
    }, 500);

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
      {/* Sidebar keeps its own width (w-72 / w-16) */}
      <Sidebar
        onSelectCharacter={onSelectCharacter}
        onLogoClick={onLogoClick}
        onOpenProfile={onOpenProfile}
        onOpenSettings={onOpenSettings}
        isOpen={isSidebarOpen}
        onToggleSidebar={onToggleSidebar}
      />

      {/* MAIN CHAT AREA – mobile-friendly via padding/fonts, scrollable height */}
      <main className="flex-1 bg-[#050816] px-3 sm:px-4 py-3 sm:py-4 flex flex-col relative min-h-screen">
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
        <div className="relative flex flex-col h-full gap-3 sm:gap-4">
          {/* TOP BAR */}
          <header className="mb-2 sm:mb-3 flex flex-wrap items-center justify-between gap-2 sm:gap-3 flex-shrink-0">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
              <div className="h-11 sm:h-12 rounded-2xl bg-020617 border border-gray-700 px-3 sm:px-4 flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-400 overflow-hidden flex-shrink-0">
                  <img
                    src={config.image}
                    alt={character}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-semibold truncate">
                    {character}
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-gray-400 truncate whitespace-nowrap">
                    {config.bio}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 flex items-center justify-end">
              <img
                src={logo}
                alt="history.ai logo"
                className="h-7 sm:h-8 md:h-9 w-auto object-contain"
              />
            </div>
          </header>

          {/* MESSAGES AREA */}
          <section className="flex-1 flex flex-col gap-3 sm:gap-4 overflow-y-auto scrollbar-hide pb-3 sm:pb-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "items-start"
                } gap-2 sm:gap-3`}
              >
                {message.role === "ai" && (
                  <>
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-400 flex-shrink-0 overflow-hidden">
                      <img
                        src={config.image}
                        alt={character}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="flex flex-col max-w-[90%] sm:max-w-[85%]">
                      <span className="text-xs sm:text-sm text-white font-semibold mb-1">
                        {character}
                      </span>
                      <p className="text-[13px] sm:text-[15px] leading-snug font-thin text-[#BEE6F9] m-0">
                        {message.content}
                      </p>
                      <span className="text-[10px] sm:text-xs text-gray-500 mt-0.5">
                        {formatTimestamp(message.timestamp)}
                      </span>
                    </div>
                  </>
                )}
                {message.role === "user" && (
                  <div className="flex flex-col items-end max-w-[90%] sm:max-w-[85%]">
                    <div className="text-[13px] sm:text-[15px] leading-snug font-thin text-white bg-[#124968] px-3 py-2 rounded-2xl">
                      {message.content}
                    </div>
                    <span className="text-[10px] sm:text-xs text-gray-500 mt-0.5">
                      {formatTimestamp(message.timestamp)}
                    </span>
                  </div>
                )}
              </div>
            ))}

            {isTyping && isLoading && !hasStartedTyping && (
              <div className="flex items-start gap-2 sm:gap-3 mt-1 sm:mt-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-400 flex-shrink-0 overflow-hidden">
                  <img
                    src={config.image}
                    alt={character}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex flex-col max-w-[90%] sm:max-w-[85%]">
                  <span className="text-xs sm:text-sm text-white font-semibold mb-1">
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
                <div className="p-3 rounded-2xl bg-red-500/20 border border-red-500/50 text-red-300 text-[10px] sm:text-xs max-w-xs animate-pulse">
                  {error}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </section>

          {/* INPUT BAR */}
          <form
            className="flex flex-col gap-1 flex-shrink-0"
            onSubmit={handleSubmit}
          >
            <div className="relative flex items-center bg-020617 border border-gray-700 rounded-2xl px-3 focus-within:border-sky-500 focus-within:shadow-0-0-1px-rgba(56,189,248,0.6) transition-all duration-150 h-11 sm:h-12">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Enter your message..."
                className="flex-1 bg-transparent outline-none text-[11px] sm:text-xs text-gray-200 py-2 pr-10 sm:pr-12 resize-none max-h-24 mr-8 sm:mr-10 caret-[#8FD5F5]"
                disabled={isLoading || isTyping}
                maxLength={1500}
                rows={1}
                aria-label="Enter your message"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading || isTyping}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-base sm:text-lg transition-all duration-150 absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 disabled:opacity-50 disabled:cursor-not-allowed"
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
            <div className="flex justify-between text-[10px] sm:text-xs text-gray-500">
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
