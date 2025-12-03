// settings.jsx – SETTINGS PAGE WITH DASHBOARD-STYLE MENU CARD
import Sidebar from "./sidebar";
import menuIcon from "./assets/menu.png";

function Settings({
  onLogoClick,
  isSidebarOpen,
  onToggleSidebar,
  onOpenProfile,
  onOpenSettings, // for consistency
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

      {/* MAIN SETTINGS AREA */}
      <main className="flex-1 bg-[#050816] px-6 py-4 flex flex-col">
        {/* TOP BAR: menu card on the left, page title centered, no logo */}
        <header className="flex items-center justify-between h-16 mb-4">
          {/* MENU CARD (same as dashboard/chat/profile) */}
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
              <h1 className="text-lg font-semibold">Settings</h1>
              <p className="text-[11px] text-gray-400">
                Configure your history.ai experience
              </p>
            </div>
          </div>

          {/* right spacer to balance layout */}
          <div className="h-16 w-10" />
        </header>

        {/* CONTENT */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
          {/* LEFT: general app settings */}
          <div className="lg:col-span-1 rounded-2xl bg-[#020617] border border-gray-700 p-5 flex flex-col gap-4">
            <h2 className="text-sm font-semibold mb-1">General</h2>

            <label className="flex items-center justify-between text-[11px] text-gray-300">
              <span>Dark theme</span>
              <input
                type="checkbox"
                defaultChecked
                className="w-3.5 h-3.5 rounded border-gray-600 bg-[#050816]"
              />
            </label>

            <label className="flex items-center justify-between text-[11px] text-gray-300">
              <span>Show onboarding tips</span>
              <input
                type="checkbox"
                className="w-3.5 h-3.5 rounded border-gray-600 bg-[#050816]"
              />
            </label>

            <label className="flex items-center justify-between text-[11px] text-gray-300">
              <span>Enable keyboard shortcuts</span>
              <input
                type="checkbox"
                className="w-3.5 h-3.5 rounded border-gray-600 bg-[#050816]"
              />
            </label>
          </div>

          {/* RIGHT: notification + privacy settings */}
          <div className="lg:col-span-2 rounded-2xl bg-[#020617] border border-gray-700 p-5 flex flex-col gap-6">
            {/* Notifications */}
            <div>
              <h2 className="text-sm font-semibold mb-3">Notifications</h2>
              <div className="flex flex-col gap-2">
                <label className="flex items-center justify-between text-[11px] text-gray-300">
                  <span>New message sounds</span>
                  <input
                    type="checkbox"
                    className="w-3.5 h-3.5 rounded border-gray-600 bg-[#050816]"
                  />
                </label>
                <label className="flex items-center justify-between text-[11px] text-gray-300">
                  <span>Mention highlights</span>
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-3.5 h-3.5 rounded border-gray-600 bg-[#050816]"
                  />
                </label>
                <label className="flex items-center justify-between text-[11px] text-gray-300">
                  <span>Daily recap email</span>
                  <input
                    type="checkbox"
                    className="w-3.5 h-3.5 rounded border-gray-600 bg-[#050816]"
                  />
                </label>
              </div>
            </div>

            {/* Privacy */}
            <div>
              <h2 className="text-sm font-semibold mb-3">Privacy</h2>
              <div className="flex flex-col gap-3">
                <label className="flex items-center justify-between text-[11px] text-gray-300">
                  <span>Store recent chats on this device</span>
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-3.5 h-3.5 rounded border-gray-600 bg-[#050816]"
                  />
                </label>
                <label className="flex items-center justify-between text-[11px] text-gray-300">
                  <span>Use chats to improve this prototype</span>
                  <input
                    type="checkbox"
                    className="w-3.5 h-3.5 rounded border-gray-600 bg-[#050816]"
                  />
                </label>
              </div>
            </div>

            {/* Save area – visual only */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-800 mt-2">
              <p className="text-[10px] text-gray-500">
                Settings here are visual only for this prototype.
              </p>
              <button
                type="button"
                disabled
                className="rounded-full bg-gray-600 px-5 py-1.5 text-[11px] font-semibold cursor-not-allowed opacity-70"
              >
                Save settings
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Settings;
