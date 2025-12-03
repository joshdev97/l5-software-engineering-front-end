// dashboard.jsx – DASHBOARD BOTTOM BAR DISCLAIMER + PROFILE/SETTINGS NAV
import logo from "./assets/historyai-logo.png";
import alanImg from "./assets/alan-turing.png";
import adaImg from "./assets/ada-lovelace.png";
import johnImg from "./assets/john-von-neumann.png";
import Sidebar from "./sidebar";
import menuIcon from "./assets/menu.png";

function Dashboard({
  onSelectCharacter,
  onLogoClick,
  isSidebarOpen,
  onToggleSidebar,
  onOpenProfile,
  onOpenSettings,
}) {
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

      {/* MAIN DASHBOARD COLUMN */}
      <main className="flex-1 bg-[#050816] px-6 py-4 overflow-y-auto flex flex-col justify-between">
        {/* TOP SECTION: header + hero + cards */}
        <div>
          {/* TOP BAR */}
          <header className="flex items-center justify-between h-16">
            {/* MENU CARD */}
            <div className="h-full flex items-center">
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

            {/* CENTERED LOGO */}
            <div className="flex-1 flex items-center justify-center">
              <img
                src={logo}
                alt="history.ai logo"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </div>

            {/* right spacer to balance layout */}
            <div className="h-16 w-10" />
          </header>

          {/* HERO TITLE */}
          <section className="mt-4 mb-8 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl text-center tracking-wide leading-tight">
              <span className="animate-heroChatWith opacity-0 inline-block font-light">
                Chat with
              </span>
              <span className="mx-2 animate-heroHistorical opacity-0 inline-block text-[#46BCEC] font-medium">
                historical
              </span>
              <span className="animate-heroLegends opacity-0 inline-block text-[#46BCEC] font-medium">
                legends.
              </span>
            </h2>
          </section>

          {/* CHARACTER CARDS */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Alan Turing */}
            <div
              className="group rounded-2xl bg-[#020617] border border-gray-700 overflow-hidden flex flex-col transition-all duration-200 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/20 hover:-translate-y-1 cursor-pointer"
              onClick={() => onSelectCharacter && onSelectCharacter("Alan Turing")}
            >
              <div className="h-28 w-full overflow-hidden">
                <img
                  src={alanImg}
                  alt="Alan Turing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="px-3 py-3 flex-1 flex flex-col">
                <p className="text-sm font-semibold group-hover:text-sky-400 transition-colors duration-200">
                  Alan Turing
                </p>
                <p className="mt-1 text-[10px] text-gray-400">
                  Alan Turing was an English mathematician and codebreaker whose
                  work on the concept of a universal computing machine, wartime
                  cryptanalysis of the Enigma, and early ideas about machine
                  intelligence laid the foundations of modern computer science and
                  artificial intelligence.
                </p>
                <button className="mt-auto self-center rounded-full bg-sky-500 px-6 py-1 text-[11px] font-semibold hover:bg-sky-400 transition">
                  Chat Now
                </button>
              </div>
            </div>

            {/* Ada Lovelace */}
            <div
              className="group rounded-2xl bg-[#020617] border border-gray-700 overflow-hidden flex flex-col transition-all duration-200 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/20 hover:-translate-y-1 cursor-pointer"
              onClick={() => onSelectCharacter && onSelectCharacter("Ada Lovelace")}
            >
              <div className="h-28 w-full overflow-hidden">
                <img
                  src={adaImg}
                  alt="Ada Lovelace"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="px-3 py-3 flex-1 flex flex-col">
                <p className="text-sm font-semibold group-hover:text-sky-400 transition-colors duration-200">
                  Ada Lovelace
                </p>
                <p className="mt-1 text-[10px] text-gray-400">
                  Ada Lovelace was a 19th‑century English mathematician who
                  collaborated with Charles Babbage on his Analytical Engine and
                  is widely regarded as the first computer programmer for
                  designing an algorithm for the machine and imagining computers
                  could manipulate more than just numbers.
                </p>
                <button className="mt-auto self-center rounded-full bg-sky-500 px-6 py-1 text-[11px] font-semibold hover:bg-sky-400 transition">
                  Chat Now
                </button>
              </div>
            </div>

            {/* John von Neumann */}
            <div
              className="group rounded-2xl bg-[#020617] border border-gray-700 overflow-hidden flex flex-col transition-all duration-200 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/20 hover:-translate-y-1 cursor-pointer"
              onClick={() =>
                onSelectCharacter && onSelectCharacter("John von Neumann")
              }
            >
              <div className="h-28 w-full overflow-hidden">
                <img
                  src={johnImg}
                  alt="John von Neumann"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="px-3 py-3 flex-1 flex flex-col">
                <p className="text-sm font-semibold group-hover:text-sky-400 transition-colors duration-200">
                  John von Neumann
                </p>
                <p className="mt-1 text-[10px] text-gray-400">
                  John von Neumann was a 20th‑century Hungarian‑American
                  mathematician and polymath who helped define the architecture of
                  modern stored‑program computers, made pioneering contributions to
                  game theory and economics, and worked on quantum mechanics and
                  nuclear physics.
                </p>
                <button className="mt-auto self-center rounded-full bg-sky-500 px-6 py-1 text-[11px] font-semibold hover:bg-sky-400 transition">
                  Chat Now
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* BOTTOM DISCLAIMER BAR */}
        <footer className="mt-6 border-top border-gray-800 pt-2 text-center text-[10px] text-gray-400">
          This app is a fictional AI chat experience for educational purposes
          only. Responses may be inaccurate or incomplete and should not be
          treated as professional advice.
        </footer>
      </main>
    </div>
  );
}

export default Dashboard;
