import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";

export default function ContentFilters({
  search,
  setSearch,
  platform,
  setPlatform,
}) {
  return (
    <div className="content-filters">
      {/* SEARCH */}
      <div className="content-search-wrapper">
        <Search size={17} strokeWidth={1.8} className="content-search-icon" />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search posts..."
          className="content-search-input"
        />
      </div>

      {/* PLATFORM */}
      <div className="content-platform-filter">
        <SlidersHorizontal
          size={16}
          strokeWidth={1.8}
          className="content-filter-icon"
        />

        <div className="content-select-wrapper">
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="content-platform-select"
          >
            <option value="All">All Platforms</option>

            <option value="Instagram">Instagram</option>

            <option value="Facebook">Facebook</option>

            <option value="LinkedIn">LinkedIn</option>

            <option value="X">X</option>
          </select>

          <ChevronDown size={14} className="content-select-chevron" />
        </div>
      </div>
    </div>
  );
}
