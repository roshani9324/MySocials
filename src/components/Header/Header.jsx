import { Search, Bell, Plus } from "lucide-react";

export default function Header() {
  return (
    <header
      className="
        h-[76px]
        border-b
        border-white/[0.06]
        bg-[#050908]/90
        backdrop-blur-xl
        flex
        items-center
        justify-between
        px-5
        lg:px-7
        sticky
        top-0
        z-40
      "
    >
      {/* Search */}
      <div
        className="
          hidden
          sm:flex
          items-center
          w-[280px]
          h-10
          rounded-xl
          border
          border-white/[0.07]
          bg-white/[0.025]
          px-3
          gap-2
        "
      >
        <Search size={15} className="text-white/25" />

        <input
          type="text"
          placeholder="Search..."
          className="
            flex-1
            bg-transparent
            outline-none
            text-xs
            text-white/70
            placeholder:text-white/20
          "
        />

        <span
          className="
            text-[9px]
            text-white/20
            border
            border-white/10
            rounded
            px-1.5
            py-0.5
          "
        >
          /
        </span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3 ml-auto">
        <button
          className="
            relative
            w-9
            h-9
            rounded-lg
            flex
            items-center
            justify-center
            text-white/40
            hover:text-white
            hover:bg-white/[0.04]
            transition
          "
        >
          <Bell size={17} />

          <span
            className="
              absolute
              top-2
              right-2
              w-1.5
              h-1.5
              rounded-full
              bg-emerald-400
            "
          />
        </button>

        <button
          className="
            hidden
            sm:flex
            items-center
            gap-2
            px-4
            py-2.5
            rounded-xl
            bg-emerald-400
            text-black
            text-xs
            font-semibold
            hover:bg-emerald-300
            transition
          "
        >
          <Plus size={15} />
          Create Post
        </button>

        <div
          className="
            w-9
            h-9
            rounded-full
            bg-emerald-400/10
            border
            border-emerald-400/20
            text-emerald-400
            flex
            items-center
            justify-center
            text-xs
            font-semibold
          "
        >
          R
        </div>
      </div>
    </header>
  );
}
