// profile.jsx – PROFILE PAGE WITH DASHBOARD-STYLE MENU CARD
import Sidebar from "./sidebar";
import menuIcon from "./assets/menu.png";

function Profile({
  onLogoClick,
  isSidebarOpen,
  onToggleSidebar,
  onOpenProfile,
  onOpenSettings,
}) {
  return (
    <div className="min-h-screen bg-black text-white flex animate-dashboardIn">
      {/* SIDEBAR */}
      <Sidebar
        onSelectCharacter={() => {}}
        onLogoClick={onLogoClick}
        onOpenProfile={onOpenProfile}
        onOpenSettings={onOpenSettings}
        isOpen={isSidebarOpen}
      />

      {/* MAIN PROFILE AREA */}
      <main className="flex-1 bg-[#050816] px-6 py-4 flex flex-col">
        {/* TOP BAR: menu card on the left, page title in center-ish, no logo */}
        <header className="flex items-center justify-between h-16 mb-4">
          {/* MENU CARD (same as dashboard/chat) */}
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

          {/* Center title */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-lg font-semibold">Profile</h1>
              <p className="text-[11px] text-gray-400">
                Manage how you appear in history.ai
              </p>
            </div>
          </div>

          {/* right spacer to balance layout */}
          <div className="h-16 w-10" />
        </header>

        {/* CONTENT */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
          {/* LEFT: avatar + basic info summary */}
          <div className="lg:col-span-1 rounded-2xl bg-[#020617] border border-gray-700 p-4 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gray-700 mb-3 flex items-center justify-center text-sm text-gray-300">
              Avatar
            </div>
            <p className="text-sm font-semibold mb-1">Your display</p>
            <p className="text-[11px] text-gray-400 text-center">
              This is how your name and avatar will appear when chatting with
              historical legends.
            </p>
          </div>

          {/* RIGHT: form fields */}
          <div className="lg:col-span-2 rounded-2xl bg-[#020617] border border-gray-700 p-5 flex flex-col gap-5">
            {/* Basic details */}
            <div>
              <h2 className="text-sm font-semibold mb-3">Basic information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] text-gray-300">
                    Display name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Alex"
                    className="bg-[#050816] border border-gray-700 rounded-lg px-3 py-2 text-xs outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/60"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] text-gray-300">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="bg-[#050816] border border-gray-700 rounded-lg px-3 py-2 text-xs outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/60"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] text-gray-300">
                    Preferred era
                  </label>
                  <select className="bg-[#050816] border border-gray-700 rounded-lg px-3 py-2 text-xs outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/60">
                    <option>Any</option>
                    <option>Classical</option>
                    <option>Medieval</option>
                    <option>Renaissance</option>
                    <option>Modern</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] text-gray-300">
                    Favourite legend
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Alan Turing"
                    className="bg-[#050816] border border-gray-700 rounded-lg px-3 py-2 text-xs outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/60"
                  />
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div>
              <h2 className="text-sm font-semibold mb-3">Chat preferences</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-center gap-2 text-[11px] text-gray-300">
                  <input
                    type="checkbox"
                    className="w-3.5 h-3.5 rounded border-gray-600 bg-[#050816]"
                  />
                  Show typing indicator
                </label>
                <label className="flex items-center gap-2 text-[11px] text-gray-300">
                  <input
                    type="checkbox"
                    className="w-3.5 h-3.5 rounded border-gray-600 bg-[#050816]"
                  />
                  Play message sounds
                </label>
                <label className="flex items-center gap-2 text-[11px] text-gray-300">
                  <input
                    type="checkbox"
                    className="w-3.5 h-3.5 rounded border-gray-600 bg-[#050816]"
                  />
                  Use compact message layout
                </label>
                <label className="flex items-center gap-2 text-[11px] text-gray-300">
                  <input
                    type="checkbox"
                    className="w-3.5 h-3.5 rounded border-gray-600 bg-[#050816]"
                  />
                  Highlight quotes from sources
                </label>
              </div>
            </div>

            {/* Save area – purely visual */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-800 mt-2">
              <p className="text-[10px] text-gray-500">
                Changes here are visual only for this prototype.
              </p>
              <button
                type="button"
                disabled
                className="rounded-full bg-gray-600 px-5 py-1.5 text-[11px] font-semibold cursor-not-allowed opacity-70"
              >
                Save changes
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Profile;
