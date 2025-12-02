// dashboard.jsx - LOGO CENTERED ABOVE HERO TITLE
import logo from "./assets/historyai-logo.png";
import alanImg from "./assets/alan-turing.png";
import adaImg from "./assets/ada-lovelace.png";
import johnImg from "./assets/john-von-neumann.png";
import Sidebar from "./sidebar";

function Dashboard({ onSelectCharacter, onLogoClick }) {
  return (
    <div className="min-h-screen bg-black text-white flex animate-dashboardIn">
      {/* SHARED SIDEBAR */}
      <Sidebar
        onSelectCharacter={onSelectCharacter}
        onLogoClick={onLogoClick}
      />

      {/* MAIN DASHBOARD */}
      <main className="flex-1 bg-[#050816] px-6 py-8 overflow-y-auto flex flex-col">
        {/* CENTERED LOGO ABOVE HERO */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={logo}
            alt="history.ai logo"
            className="h-12 md:h-14 w-auto object-contain mb-2"
          />
        </div>

        {/* HERO TITLE */}
        <section className="mb-8 flex items-center justify-center">
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
                intelligence laid the foundations of modern computer science
                and artificial intelligence.
              </p>
              <button className="mt-3 self-start rounded-full bg-sky-500 px-4 py-1 text-[11px] font-semibold hover:bg-sky-400 transition">
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
              <button className="mt-3 self-start rounded-full bg-sky-500 px-4 py-1 text-[11px] font-semibold hover:bg-sky-400 transition">
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
              <button className="mt-3 self-start rounded-full bg-sky-500 px-4 py-1 text-[11px] font-semibold hover:bg-sky-400 transition">
                Chat Now
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
