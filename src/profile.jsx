// profile.jsx – PROFILE PAGE WITH SIDEBAR

import Sidebar from "./sidebar";
import logo from "./assets/historyai-logo.png";
import alanImg from "./assets/alan-turing.png";

function Profile({
  onLogoClick,
  isSidebarOpen,
  onToggleSidebar,
  onOpenProfile,
  onOpenSettings,
}) {
  return (
    <div className="min-h-screen bg-[#050816] text-white flex animate-dashboardIn">
      {/* SIDEBAR */}
      <Sidebar
        onSelectCharacter={null}
        onLogoClick={onLogoClick}
        onOpenProfile={onOpenProfile}
        onOpenSettings={onOpenSettings}
        isOpen={isSidebarOpen}
        onToggleSidebar={onToggleSidebar}
      />

      {/* MAIN PROFILE AREA */}
      <main className="flex-1 bg-[#050816] px-6 py-4 flex flex-col">
        {/* TOP BAR (no expand button) */}
        <header className="flex items-center justify-between h-16 mb-4">
          <div className="h-16 w-10" />
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-lg font-semibold">Profile</h1>
              <p className="text-[11px] text-gray-400">
                Manage your history.ai identity
              </p>
            </div>
          </div>
          <div className="h-16 w-10 flex items-center justify-end">
            <img
              src={logo}
              alt="history.ai logo"
              className="h-8 md:h-9 w-auto object-contain"
            />
          </div>
        </header>

        {/* CONTENT */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
          {/* Left: avatar + basic info */}
          <div className="lg:col-span-1 rounded-2xl bg-020617 border border-gray-700 p-5 flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-500">
              <img
                src={alanImg}
                alt="User avatar"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold">User123</p>
              <p className="text-[11px] text-gray-400">
                Curious explorer of computing history
              </p>
            </div>
            <button className="mt-2 rounded-full bg-sky-500 px-6 py-1.5 text-[11px] font-semibold hover:bg-sky-400 transition">
              Edit profile
            </button>
          </div>

          {/* Right: details */}
          <div className="lg:col-span-2 rounded-2xl bg-020617 border border-gray-700 p-5 flex flex-col gap-4">
            <div>
              <h2 className="text-sm font-semibold mb-2">Account details</h2>
              <div className="space-y-2 text-[11px] text-gray-300">
                <p>
                  <span className="text-gray-500">Email:</span>{" "}
                  you@example.com
                </p>
                <p>
                  <span className="text-gray-500">Member since:</span>{" "}
                  October 2025
                </p>
                <p>
                  <span className="text-gray-500">Plan:</span> Prototype access
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold mb-2">
                Conversation preferences
              </h2>
              <div className="space-y-2 text-[11px] text-gray-300">
                <p>• Favorite figure: Alan Turing</p>
                <p>• Topics: early computing, cryptography, AI foundations</p>
                <p>• Tone: educational, concise</p>
              </div>
            </div>

            <div className="mt-auto pt-3 border-t border-gray-800 text-[10px] text-gray-500">
              Profile settings here are for display only in this prototype.
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Profile;
