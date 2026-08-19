const tabs = [
  {
    id: "all",
    label: "All Posts",
  },
  {
    id: "published",
    label: "Published",
  },
  {
    id: "scheduled",
    label: "Scheduled",
  },
  {
    id: "drafts",
    label: "Drafts",
  },
];

export default function ContentTabs({ activeTab, setActiveTab }) {
  return (
    <div className="content-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => setActiveTab(tab.id)}
          className={`content-tab ${activeTab === tab.id ? "active" : ""}`}
        >
          <span>{tab.label}</span>

          {activeTab === tab.id && <span className="content-tab-indicator" />}
        </button>
      ))}
    </div>
  );
}
