import { useState } from "react";
import {
  Plus,
  Search,
  Filter,
  CheckCircle2,
  Users,
  BarChart3,
} from "lucide-react";

import AccountCard from "./components/AccountCard";

const accounts = [
  {
    platform: "Instagram",
    username: "@roshani",
    followers: "12.8K",
    status: "Connected",
    description:
      "Share photos, reels and stories while tracking your Instagram performance.",
    icon: "IG",
    iconStyle: "bg-pink-50 text-pink-600",
  },
  {
    platform: "Facebook",
    username: "Roshani Maurya",
    followers: "4.2K",
    status: "Connected",
    description: "Manage your Facebook content, posts and audience engagement.",
    icon: "f",
    iconStyle: "bg-blue-50 text-blue-600",
  },
  {
    platform: "LinkedIn",
    username: "Roshani Maurya",
    followers: "1.9K",
    status: "Connected",
    description:
      "Publish professional content and monitor your LinkedIn audience.",
    icon: "in",
    iconStyle: "bg-sky-50 text-sky-700",
  },
  {
    platform: "X",
    username: "Not connected",
    followers: "—",
    status: "Not connected",
    description:
      "Connect your X account to publish and manage your social content.",
    icon: "X",
    iconStyle: "bg-slate-100 text-slate-900",
  },
];

export default function Accounts() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredAccounts = accounts.filter((account) => {
    const matchesSearch =
      account.platform.toLowerCase().includes(search.toLowerCase()) ||
      account.username.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" ||
      (filter === "Connected" && account.status === "Connected") ||
      (filter === "Not connected" && account.status === "Not connected");

    return matchesSearch && matchesFilter;
  });

  const connectedCount = accounts.filter(
    (account) => account.status === "Connected",
  ).length;

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Social Accounts
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Connect and manage all your social media accounts in one place.
          </p>
        </div>

        <button className="flex w-fit items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700">
          <Plus size={18} />
          Connect Account
        </button>
      </div>

      {/* Stats */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Total Accounts</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">
                {accounts.length}
              </p>
            </div>

            <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
              <Users size={21} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Connected</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">
                {connectedCount}
              </p>
            </div>

            <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
              <CheckCircle2 size={21} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Total Followers</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">18.9K</p>
            </div>

            <div className="rounded-xl bg-violet-50 p-3 text-violet-600">
              <BarChart3 size={21} />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
        {/* Search */}
        <div className="relative w-full md:max-w-sm">
          <Search
            size={18}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search accounts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        {/* Filter */}
        <div className="flex items-center gap-2">
          <Filter size={17} className="text-slate-400" />

          {["All", "Connected", "Not connected"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                filter === item
                  ? "bg-indigo-600 text-white"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Account Cards */}
      {filteredAccounts.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredAccounts.map((account) => (
            <AccountCard
              key={account.platform}
              platform={account.platform}
              username={account.username}
              followers={account.followers}
              status={account.status}
              description={account.description}
              icon={account.icon}
              iconStyle={account.iconStyle}
            />
          ))}

          {/* Add Account Card */}
          <button className="group flex min-h-[250px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-white p-6 text-center transition hover:border-indigo-300 hover:bg-indigo-50/30">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:scale-110">
              <Plus size={22} />
            </div>

            <h3 className="mt-4 font-semibold text-slate-900">
              Connect another account
            </h3>

            <p className="mt-1 max-w-[220px] text-sm text-slate-500">
              Add another social platform to manage your content.
            </p>
          </button>
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
          <Search size={32} className="mx-auto text-slate-300" />

          <h3 className="mt-4 font-semibold text-slate-900">
            No accounts found
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Try changing your search or filter.
          </p>
        </div>
      )}
    </div>
  );
}
