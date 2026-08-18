const tabs = [
  { id: "all", label: "All Posts" },
  { id: "published", label: "Published" },
  { id: "scheduled", label: "Scheduled" },
  { id: "drafts", label: "Drafts" },
];

export default function ContentTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex gap-1 overflow-x-auto border-b border-slate-200">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium transition ${
            activeTab === tab.id
              ? "border-indigo-600 text-indigo-600"
              : "border-transparent text-slate-500 hover:text-slate-900"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
