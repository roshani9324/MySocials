import {
  LayoutDashboard,
  Plus,
  CalendarDays,
  FileText,
  BarChart3,
  Users,
  Settings,
  Sparkles,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menuItems = [
  {
    label: "Overview",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    label: "Create Post",
    icon: Plus,
    path: "/create-post",
  },
  {
    label: "Calendar",
    icon: CalendarDays,
    path: "/calendar",
  },
  {
    label: "Content",
    icon: FileText,
    path: "/content",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    path: "/analytics",
  },
  {
    label: "Accounts",
    icon: Users,
    path: "/accounts",
  },
];

export default function Sidebar() {
  return (
    <aside
      className="
        fixed
        left-0
        top-0
        bottom-0
        z-50
        hidden
        lg:flex
        w-[230px]
        flex-col
        border-r
        border-white/[0.07]
        bg-[#050908]
      "
    >
      {/* Logo */}
      <div className="h-[76px] flex items-center px-6 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div
            className="
              w-8
              h-8
              rounded-lg
              bg-emerald-400
              text-black
              flex
              items-center
              justify-center
              font-bold
              text-sm
            "
          >
            S
          </div>

          <span className="font-semibold tracking-tight">
            MY<span className="text-white/60">SOCIALS</span>
          </span>
        </div>
      </div>

      {/* Workspace */}
      <div className="px-4 pt-5">
        <button
          className="
            w-full
            rounded-xl
            border
            border-white/[0.07]
            bg-white/[0.025]
            p-3
            text-left
            hover:bg-white/[0.04]
            transition
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-wider text-white/30">
                Your Workspace
              </p>

              <p className="text-xs text-white/70 mt-1">Personal account</p>
            </div>

            <ChevronDown size={14} className="text-white/30" />
          </div>
        </button>
      </div>

      {/* Navigation */}
      <nav className="px-3 mt-7 flex-1">
        <p className="px-3 mb-3 text-[9px] uppercase tracking-[0.2em] text-white/20">
          Workspace
        </p>

        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `
                  group
                  flex
                  items-center
                  gap-3
                  px-3
                  py-2.5
                  rounded-lg
                  text-xs
                  transition
                  ${
                    isActive
                      ? "bg-emerald-400/[0.08] text-emerald-400"
                      : "text-white/40 hover:text-white/70 hover:bg-white/[0.03]"
                  }
                  `
                }
              >
                <Icon size={16} />

                <span className="flex-1">{item.label}</span>

                {item.label === "Create Post" && (
                  <span className="text-emerald-400">+</span>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Account */}
        <p className="px-3 mt-8 mb-3 text-[9px] uppercase tracking-[0.2em] text-white/20">
          Account
        </p>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `
            flex
            items-center
            gap-3
            px-3
            py-2.5
            rounded-lg
            text-xs
            transition
            ${
              isActive
                ? "bg-emerald-400/[0.08] text-emerald-400"
                : "text-white/40 hover:text-white/70 hover:bg-white/[0.03]"
            }
            `
          }
        >
          <Settings size={16} />
          Settings
        </NavLink>
      </nav>

      {/* Upgrade Card */}
      <div className="px-4 pb-4">
        <div
          className="
            relative
            overflow-hidden
            rounded-xl
            border
            border-emerald-400/10
            bg-emerald-400/[0.04]
            p-4
          "
        >
          <div className="absolute -right-5 -top-5 w-20 h-20 bg-emerald-400/10 blur-2xl" />

          <div className="relative">
            <div
              className="
                w-8
                h-8
                rounded-lg
                bg-emerald-400/10
                flex
                items-center
                justify-center
                text-emerald-400
                mb-3
              "
            >
              <Sparkles size={15} />
            </div>

            <p className="text-xs font-medium text-white/80">Unlock more</p>

            <p className="text-[9px] text-white/30 mt-1 leading-relaxed">
              Get more analytics and advanced social tools.
            </p>

            <button
              className="
                mt-3
                flex
                items-center
                gap-1
                text-[10px]
                text-emerald-400
                hover:text-emerald-300
              "
            >
              Upgrade
              <ArrowUpRight size={11} />
            </button>
          </div>
        </div>
      </div>

      {/* User */}
      <div
        className="
          border-t
          border-white/[0.06]
          px-4
          py-4
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              w-8
              h-8
              rounded-full
              bg-emerald-400
              text-black
              flex
              items-center
              justify-center
              text-xs
              font-semibold
            "
          >
            R
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-xs text-white/70 truncate">Roshani</p>

            <p className="text-[9px] text-white/25">Free Plan</p>
          </div>

          <ChevronDown size={13} className="text-white/30" />
        </div>
      </div>
    </aside>
  );
}
