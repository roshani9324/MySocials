import { useMemo, useState } from "react";
import { Plus, FileText } from "lucide-react";

import ContentTabs from "./components/ContentTabs";
import ContentFilters from "./components/ContentFilters";
import ContentCard from "./components/ContentCard";

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

      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase());

      const matchesPlatform = platform === "All" || post.platform === platform;

      return matchesTab && matchesSearch && matchesPlatform;
    });
  }, [activeTab, search, platform]);

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Content
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage, organize and track all your social media content.
          </p>
        </div>

        <button className="flex w-fit items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700">
          <Plus size={18} />
          Create Post
        </button>
      </div>

      {/* Main Container */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        {/* Tabs */}
        <div className="px-4 pt-2 md:px-6">
          <ContentTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Filters */}
        <div className="border-b border-slate-100 p-4 md:p-6">
          <ContentFilters
            search={search}
            setSearch={setSearch}
            platform={platform}
            setPlatform={setPlatform}
          />
        </div>

        {/* Posts */}
        <div className="p-4 md:p-6">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredPosts.map((post) => (
                <ContentCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                <FileText size={25} />
              </div>

              <h3 className="mt-4 font-semibold text-slate-900">
                No content found
              </h3>

              <p className="mt-1 max-w-sm text-sm text-slate-500">
                Try changing your search, platform or content filter.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
