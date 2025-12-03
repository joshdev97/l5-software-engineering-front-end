// sidebar.jsx – profile + settings both navigate
import icon from "./assets/historyai-icon.png";
import chatbubble from "./assets/chatbubble.png";
import userIcon from "./assets/user.png";
import settingsIcon from "./assets/settings.png";
import alanImg from "./assets/alan-turing.png";
import adaImg from "./assets/ada-lovelace.png";
import johnImg from "./assets/john-von-neumann.png";

const RECENT_CHATS = [
  { name: "Alan Turing", image: alanImg },
  { name: "Ada Lovelace", image: adaImg },
  { name: "John von Neumann", image: johnImg },
];

function Sidebar({
  onSelectCharacter,
  onLogoClick,
  onOpenProfile,
  onOpenSettings,
  isOpen,
}) {
  return (
    <aside
      className={`bg-[#111827] py-4 flex flex-col transition-all duration-200 border-r border-black
      ${isOpen ? "w-72 px-4" : "w-16 px-2 items-center"}`}
    >
      {/* TOP: logo + (optional) search */}
      <div
        className={`flex items-center ${
          isOpen ? "gap-2 mb-3" : "justify-center mb-3"
        }`}
      >
        <button
          type="button"
          onClick={onLogoClick}
          aria-label="Go to dashboard"
          className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-transparent transition-transform duration-150 ease-out hover:scale-110 cursor-pointer"
        >
          <img
            src={icon}
            alt="history.ai icon"
            className="w-full h-full object-contain"
          />
        </button>

        {isOpen && (
          <input
            type="text"
            placeholder="Search chat history"
            className="flex-1 rounded-full bg-[#020617] border border-gray-700 px-3 py-1.5 text-xs text-gray-200 placeholder-gray-500 focus:outline-none focus:border-sky-500"
          />
        )}
      </div>

      <hr className="border-gray-700 mb-4 w-full" />

      {/* NEW CHAT */}
      <button
        type="button"
        onClick={onLogoClick}
        className={`flex items-center text-sm text-gray-200 mb-4 transition-transform duration-150 ease-out hover:scale-105 ${
          isOpen ? "gap-2 w-full justify-start" : "justify-center"
        }`}
      >
        <span className="flex items-center justify-center translate-y-[1px]">
          <img
            src={chatbubble}
            alt="New chat"
            className="w-7 h-7 object-contain"
          />
        </span>
        {isOpen && <span className="-translate-y-[3px]">New chat</span>}
      </button>

      {isOpen && (
        <>
          <hr className="border-gray-700 mb-3 w-full" />
          <h2 className="text-xs font-semibold text-gray-300 mb-2 w-full">
            Recent chats
          </h2>

          <div className="space-y-2 overflow-y-auto pr-1 flex-1 w-full">
            {RECENT_CHATS.map((chat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => onSelectCharacter(chat.name)}
                className="w-full text-left rounded-xl bg-[#020617] border border-gray-700 px-3 py-2 flex items-start gap-2 hover:border-sky-500 hover:bg-[#0b1220] cursor-pointer transition-all duration-150"
              >
                <div className="w-6 h-6 rounded-full bg-gray-400 overflow-hidden">
                  <img
                    src={chat.image}
                    alt={chat.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold">{chat.name}</p>
                    <span className="text-sky-400 text-xs">…</span>
                  </div>
                  <p className="mt-1 text-[10px] text-gray-400 line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      {/* BOTTOM REGION */}
      <div className="mt-auto w-full">
        <hr className="border-gray-700 mb-3 w-full" />

        <div
          className={`pt-1 flex items-center ${
            isOpen ? "justify-between w-full" : "flex-col gap-3"
          }`}
        >
          {isOpen ? (
            <>
              {/* Settings button -> Settings page */}
              <button
                type="button"
                onClick={onOpenSettings}
                className="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-150 ease-out hover:scale-110"
              >
                <img
                  src={settingsIcon}
                  alt="Settings"
                  className="w-full h-full object-contain"
                />
              </button>

              {/* User + profile -> Profile page */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-300 font-bold">User123</span>
                <button
                  type="button"
                  onClick={onOpenProfile}
                  className="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-150 ease-out hover:scale-110"
                >
                  <img
                    src={userIcon}
                    alt="User profile"
                    className="w-full h-full object-contain"
                  />
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <button
                type="button"
                onClick={onOpenProfile}
                className="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-150 ease-out hover:scale-110"
              >
                <img
                  src={userIcon}
                  alt="User profile"
                  className="w-full h-full object-contain"
                />
              </button>
              <button
                type="button"
                onClick={onOpenSettings}
                className="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-150 ease-out hover:scale-110"
              >
                <img
                  src={settingsIcon}
                  alt="Settings"
                  className="w-full h-full object-contain"
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
