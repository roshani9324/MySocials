import { useMemo, useState } from "react";
import { Plus, FileText, Layers3 } from "lucide-react";

import ContentTabs from "./components/ContentTabs";
import ContentFilters from "./components/ContentFilters";
import ContentCard from "./components/ContentCard";

import "./Content.css";

const posts = [
  {
    id: 1,
    title: "How we built our latest product 🚀",
    description:
      "A quick look behind the scenes at how our latest product came together.",
    platform: "Instagram",
    type: "Post",
    status: "Published",
    date: "Aug 16, 2026",
    reach: "24.8K",
    likes: "3.2K",
    comments: "428",
  },

  {
    id: 2,
    title: "5 tips to grow your business online",
    description:
      "Here are five simple strategies that can help you build a stronger online presence.",
    platform: "LinkedIn",
    type: "Post",
    status: "Published",
    date: "Aug 15, 2026",
    reach: "18.4K",
    likes: "2.1K",
    comments: "284",
  },

  {
    id: 3,
    title: "Behind the scenes at MySocials",
    description:
      "Take a look behind the scenes and discover what happens before we publish.",
    platform: "Facebook",
    type: "Post",
    status: "Published",
    date: "Aug 13, 2026",
    reach: "14.2K",
    likes: "1.6K",
    comments: "196",
  },

  {
    id: 4,
    title: "New feature announcement ✨",
    description:
      "Something exciting is coming soon. Stay tuned for our next big update.",
    platform: "Instagram",
    type: "Reel",
    status: "Scheduled",
    date: "Aug 20, 2026 • 10:30 AM",
  },

  {
    id: 5,
    title: "Weekly industry insights",
    description:
      "Important trends and insights you should know about this week.",
    platform: "LinkedIn",
    type: "Post",
    status: "Scheduled",
    date: "Aug 22, 2026 • 2:00 PM",
  },

  {
    id: 6,
    title: "Weekend campaign ideas",
    description:
      "A collection of campaign ideas to help you create better weekend content.",
    platform: "Facebook",
    type: "Post",
    status: "Draft",
    date: "Last edited Aug 17, 2026",
  },
];

export default function Content() {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");
  const [platform, setPlatform] = useState("All");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesTab =
        activeTab === "all" ||
        (activeTab === "published" && post.status === "Published") ||
        (activeTab === "scheduled" && post.status === "Scheduled") ||
        (activeTab === "drafts" && post.status === "Draft");

      const searchValue = search.toLowerCase();

      const matchesSearch =
        post.title.toLowerCase().includes(searchValue) ||
        post.description.toLowerCase().includes(searchValue);

      const matchesPlatform = platform === "All" || post.platform === platform;

      return matchesTab && matchesSearch && matchesPlatform;
    });
  }, [activeTab, search, platform]);

  return (
    <div className="content-page">
      <div className="content-background-glow content-glow-one" />
      <div className="content-background-glow content-glow-two" />

      <div className="content-container">
        {/* HEADER */}
        <header className="content-page-header">
          <div className="content-heading">
            <div className="content-heading-icon">
              <Layers3 size={21} strokeWidth={1.8} />
            </div>

            <div>
              <h1>Content</h1>

              <p>Manage, organize and track all your social media content.</p>
            </div>
          </div>

          <button className="content-create-btn">
            <Plus size={17} strokeWidth={2.4} />
            <span>Create Post</span>
          </button>
        </header>

        {/* MAIN CARD */}
        <section className="content-main-card">
          {/* TABS */}
          <div className="content-tabs-section">
            <ContentTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          {/* FILTERS */}
          <div className="content-filters-section">
            <ContentFilters
              search={search}
              setSearch={setSearch}
              platform={platform}
              setPlatform={setPlatform}
            />
          </div>

          {/* POSTS */}
          <div className="content-posts-section">
            {filteredPosts.length > 0 ? (
              <div className="content-post-grid">
                {filteredPosts.map((post) => (
                  <ContentCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="content-empty-state">
                <div className="content-empty-icon">
                  <FileText size={25} strokeWidth={1.7} />
                </div>

                <h3>No content found</h3>

                <p>Try changing your search, platform or content filter.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
