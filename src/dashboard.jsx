import logo from "./assets/historyai-logo.png";

function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white flex animate-dashboardIn">
      {/* SIDEBAR */}
      <aside className="w-72 bg-[#111827] px-4 py-4 flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
            <img
              src={logo}
              alt="history.ai logo"
              className="w-8 h-8 object-contain"
            />
          </div>
          <input
            type="text"
            placeholder="Search chat history"
            className="flex-1 rounded-full bg-[#020617] border border-gray-700 px-3 py-1.5 text-xs text-gray-200 placeholder-gray-500 focus:outline-none focus:border-sky-500"
          />
        </div>

        <button className="flex items-center gap-2 text-sm text-gray-200 mb-4">
          <span className="w-6 h-6 rounded-md border border-gray-500 flex items-center justify-center">
            +
          </span>
          <span>New chat</span>
        </button>

        <hr className="border-gray-700 mb-3" />

        <h2 className="text-xs font-semibold text-gray-300 mb-2">
          Recent chats
        </h2>

        <div className="space-y-2 overflow-y-auto pr-1">
          {["Alan Turing", "Ada Lovelace", "John von Neumann"].map(
            (name, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-[#020617] border border-gray-700 px-3 py-2 flex items-start gap-2"
              >
                <div className="w-6 h-6 rounded-full bg-gray-400" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold">{name}</p>
                    <span className="text-sky-400 text-xs">↗</span>
                  </div>
                  <p className="mt-1 text-[10px] text-gray-400 line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                </div>
              </div>
            )
          )}
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-sky-400 text-xl">
            <span>⚙️</span>
            <span>🎙️</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-300">User123</span>
            <span className="w-7 h-7 rounded-full bg-sky-500 flex items-center justify-center">
              👤
            </span>
          </div>
        </div>
      </aside>

      {/* MAIN DASHBOARD */}
      <main className="flex-1 bg-[#050816] px-6 py-5 overflow-y-auto">
        <header className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="history.ai logo"
              className="h-8 object-contain"
            />
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-300">
            <span>Welcome Back,</span>
            <span className="font-semibold">Walid</span>
          </div>
        </header>

        <section className="mb-4">
          <h2 className="text-sm font-semibold text-gray-300">
            Chat with <span className="text-white">Historical Legends</span>
          </h2>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#020617] border border-gray-700 overflow-hidden flex flex-col"
            >
              <div className="h-28 bg-gray-500" />
              <div className="px-3 py-3 flex-1 flex flex-col">
                <p className="text-sm font-semibold">Alan Turing</p>
                <p className="mt-1 text-[10px] text-gray-400">
                  Alan Turing was an English mathematician, logician and
                  pioneer in computer science.
                </p>
                <button className="mt-3 self-start rounded-full bg-sky-500 px-4 py-1 text-[11px] font-semibold hover:bg-sky-400 transition">
                  Chat Now
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
