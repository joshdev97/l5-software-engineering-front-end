// chat.jsx – MENU CARD MATCHING DASHBOARD + PROFILE/SETTINGS NAV
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

function Chat({
  character = "Alan Turing",
  onSelectCharacter,
  onLogoClick,
  isSidebarOpen,
  onToggleSidebar,
  onOpenProfile,
  onOpenSettings,
}) {
  const fallback = CHARACTER_CONFIG["Alan Turing"];
  const config = CHARACTER_CONFIG[character] || fallback;

  return (
    <div className="min-h-screen bg-black text-white flex animate-dashboardIn">
      {/* COLLAPSIBLE SIDEBAR */}
      <Sidebar
        onSelectCharacter={onSelectCharacter}
        onLogoClick={onLogoClick}
        onOpenProfile={onOpenProfile}
        onOpenSettings={onOpenSettings}
        isOpen={isSidebarOpen}
      />

      {/* MAIN CHAT AREA – full background */}
      <main className="flex-1 bg-[#050816] px-4 py-4 flex flex-col relative">
        {/* tiled background */}
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
          <header className="mb-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              {/* MENU CARD */}
              <div className="h-16 flex items-center">
                <div className="h-10 w-10 rounded-lg bg-[#020617] border border-gray-700 flex items-center justify-center">
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

              {/* CHARACTER PROFILE */}
              <div className="h-12 rounded-2xl bg-[#020617] border border-gray-700 px-4 flex items-center gap-3 min-w-0 flex-1">
                <div className="w-9 h-9 rounded-full bg-gray-400 overflow-hidden">
                  <img
                    src={config.image}
                    alt={character}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate">{character}</p>
                  <p className="text-[10px] text-gray-400 truncate md:whitespace-normal">
                    {config.bio}
                  </p>
                </div>
              </div>
            </div>

            {/* right: history.ai logo */}
            <div className="flex-shrink-0 flex items-center justify-end">
              <img
                src={logo}
                alt="history.ai logo"
                className="h-8 md:h-9 w-auto object-contain"
              />
            </div>
          </header>

          {/* MESSAGES AREA */}
          <section className="flex-1 flex flex-col gap-4 overflow-y-auto">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-gray-400" />
              <div>
                <p className="text-xs font-semibold mb-1">{character}</p>
                <p className="text-[11px] text-gray-300 max-w-xs">
                  {fallback.bio}
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <button className="rounded-full bg-sky-500 px-4 py-1 text-[11px] font-semibold hover:bg-sky-400 active:bg-sky-600 transition-colors duration-150">
                Lorem ipsum dolor sit
              </button>
            </div>

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

            <div className="flex items-start gap-2 mt-2">
              <div className="w-6 h-6 rounded-full bg-gray-400" />
              <div className="w-40 h-40 rounded-2xl bg-gray-200 flex items-center justify-center hover:shadow-lg hover:shadow-sky-500/20 transition-shadow duration-150">
                <div className="w-20 h-16 border-2 border-gray-400 flex items-center justify-center">
                  <span className="text-gray-500 text-xs">Image</span>
                </div>
              </div>
            </div>
          </section>

          {/* INPUT BAR */}
          <form className="mt-2 flex items-center gap-2">
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
        </div>
      </main>
    </div>
  );
}

export default Chat;
