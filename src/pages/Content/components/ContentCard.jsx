import {
  MoreHorizontal,
  CalendarDays,
  Heart,
  MessageCircle,
  Eye,
  Clock3,
} from "lucide-react";

export default function ContentCard({ post }) {
  const statusStyles = {
    Published: "bg-emerald-50 text-emerald-600",
    Scheduled: "bg-blue-50 text-blue-600",
    Draft: "bg-amber-50 text-amber-600",
  };

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Image / Preview */}
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-50 to-slate-100">
        <div className="flex h-full items-center justify-center px-6 text-center">
          <p className="line-clamp-3 text-lg font-semibold text-slate-700">
            {post.title}
          </p>
        </div>

        {/* Status */}
        <div
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${
            statusStyles[post.status]
          }`}
        >
          {post.status}
        </div>

        {/* Menu */}
        <button className="absolute right-3 top-3 rounded-lg bg-white/90 p-2 text-slate-500 shadow-sm backdrop-blur transition hover:bg-white hover:text-slate-900">
          <MoreHorizontal size={17} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
            {post.platform}
          </span>

          <span className="text-xs text-slate-400">{post.type}</span>
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
          {post.description}
        </p>

        {/* Date */}
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
          {post.status === "Scheduled" ? (
            <Clock3 size={14} />
          ) : (
            <CalendarDays size={14} />
          )}

          {post.date}
        </div>

        {/* Stats */}
        {post.status === "Published" && (
          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4">
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <Eye size={13} />
              {post.reach}
            </div>

            <div className="flex items-center gap-1 text-xs text-slate-500">
              <Heart size={13} />
              {post.likes}
            </div>

            <div className="flex items-center gap-1 text-xs text-slate-500">
              <MessageCircle size={13} />
              {post.comments}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
