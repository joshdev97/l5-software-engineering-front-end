import logo from "./assets/historyai-logo.png";
import icon from "./assets/historyai-icon.png";
import alanImg from "./assets/alan-turing.png";
import adaImg from "./assets/ada-lovelace.png";
import johnImg from "./assets/john-von-neumann.png";
import Sidebar from "./sidebar";

const CHARACTER_CONFIG = {
  "Alan Turing": {
    image: alanImg,
    bio:
      "Alan Turing was an English mathematician and codebreaker whose work on universal computing machines, wartime codebreaking of Enigma, and early ideas about machine intelligence laid the foundations of modern computer science and AI.",
  },
  "Ada Lovelace": {
    image: adaImg,
    bio:
      "Ada Lovelace was a 19th‑century English mathematician who collaborated with Charles Babbage on his Analytical Engine and is often regarded as the first computer programmer for her visionary notes on what the machine could do.",
  },
  "John von Neumann": {
    image: johnImg,
    bio:
      "John von Neumann was a Hungarian‑American mathematician and polymath who helped define the stored‑program computer architecture, made pioneering contributions to game theory, and worked on quantum mechanics and nuclear physics.",
  },
};

function Chat({ character = "Alan Turing", onBack, onSelectCharacter, onLogoClick }) {
  const fallback = CHARACTER_CONFIG["Alan Turing"];
  const config = CHARACTER_CONFIG[character] || fallback;

  return (
    <div className="min-h-screen bg-black text-white flex animate-dashboardIn">
      {/* SHARED SIDEBAR */}
      <Sidebar
        onSelectCharacter={onSelectCharacter}
        onLogoClick={onLogoClick}
      />

      {/* MAIN CHAT AREA */}
      <main className="flex-1 bg-[#050816] px-4 py-4 flex flex-col">
        {/* top bar / header */}
        <header className="flex items-center justify_between mb-3">
          <h1 className="text-sm font-semibold text-gray-300">
            Character Chat
          </h1>
          <div className="flex items-center gap-2">
            {onBack && (
              <button
                type="button"
                onClick={onBack}
                className="text-xs text-gray-400 border border-gray-600 rounded-full px-2 py-1 hover:border-sky-500 hover:text-sky-400 transition-colors duration-150"
              >
                ← Back to dashboard
              </button>
            )}
            <img
              src={logo}
              alt="history.ai logo"
              className="h-6 object-contain"
            />
          </div>
        </header>

        {/* character header */}
        <section className="mb-4 rounded-2xl bg-[#020617] border border-gray-700 px-4 py-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-400 overflow-hidden">
            <img
              src={config.image}
              alt={character}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold">{character}</p>
            <p className="text-[10px] text-gray-400">{config.bio}</p>
          </div>
          <button className="text-sky-400 text-lg hover:text-sky-300 transition-colors duration-150">
            ★
          </button>
        </section>

        {/* messages area with rotated tiled icon background */}
        <section className="flex-1 rounded-2xl border border-gray-700 px-4 py-4 flex flex-col gap-4 overflow-y-auto relative bg-[#020617]">
          {/* background layer */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute opacity-5"
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

          {/* content layer */}
          <div className="relative flex flex-col gap-4">
            {/* incoming message */}
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-gray-400" />
              <div>
                <p className="text-xs font-semibold mb-1">{character}</p>
                <p className="text-[11px] text-gray-300 max-w-xs">
                  First Message Base - Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </div>

            {/* user reply bubble */}
            <div className="flex justify-end">
              <button className="rounded-full bg-sky-500 px-4 py-1 text-[11px] font-semibold hover:bg-sky-400 active:bg-sky-600 transition-colors duration-150">
                Lorem ipsum dolor sit
              </button>
            </div>

            {/* another example exchange */}
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-gray-400" />
              <div>
                <p className="text-xs font-semibold mb-1">{character}</p>
                <p className="text-[11px] text-gray-300 max-w-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <button className="rounded-full bg-sky-500 px-4 py-1 text-[11px] font-semibold hover:bg-sky-400 active:bg-sky-600 transition-colors duration-150">
                Lorem ipsum dolor sit
              </button>
            </div>

            {/* image placeholder */}
            <div className="flex items-start gap-2 mt-2">
              <div className="w-6 h-6 rounded-full bg-gray-400" />
              <div className="w-40 h-40 rounded-2xl bg-gray-200 flex items-center justify-center hover:shadow-lg hover:shadow-sky-500/20 transition-shadow duration-150">
                <div className="w-20 h-16 border-2 border-gray-400 flex items-center justify-center">
                  <span className="text-gray-500 text-xs">Image</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* input bar */}
        <form className="mt-4 flex items-center gap-2">
          <div className="flex-1 flex items-center bg-[#020617] border border-gray-700 rounded-2xl px-3 focus-within:border-sky-500 focus-within:shadow-[0_0_0_1px_rgba(56,189,248,0.6)] transition-all duration-150">
            <input
              type="text"
              placeholder="Enter your message..."
              className="flex-1 bg-transparent outline-none text-xs text-gray-200 py-2"
            />
          </div>
          <button
            type="submit"
            className="w-9 h-9 rounded-full bg-sky-500 flex items-center justify-center text-lg hover:bg-sky-400 active:bg-sky-600 transition-colors duration-150"
          >
            ➤
          </button>
        </form>
      </main>
    </div>
  );
}

export default Chat;
