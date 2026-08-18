import { Search, SlidersHorizontal } from "lucide-react";

export default function ContentFilters({
  search,
  setSearch,
  platform,
  setPlatform,
}) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      {/* Search */}
      <div className="relative w-full md:max-w-sm">
        <Search
          size={18}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search posts..."
          className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      {/* Platform */}
      <div className="flex items-center gap-2">
        <SlidersHorizontal size={17} className="text-slate-400" />

        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600 outline-none focus:border-indigo-500"
        >
          <option value="All">All Platforms</option>
          <option value="Instagram">Instagram</option>
          <option value="Facebook">Facebook</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="X">X</option>
        </select>
      </div>
    </div>
  );
}
