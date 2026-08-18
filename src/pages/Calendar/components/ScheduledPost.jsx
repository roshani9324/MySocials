import { Clock3 } from "lucide-react";

export default function ScheduledPost({ post }) {
  return (
    <div
      className={`rounded-lg border p-2.5 ${
        post.platform === "Instagram"
          ? "border-pink-100 bg-pink-50"
          : post.platform === "LinkedIn"
            ? "border-blue-100 bg-blue-50"
            : "border-indigo-100 bg-indigo-50"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="truncate text-xs font-semibold text-slate-700">
          {post.platform}
        </span>

        <Clock3 size={12} className="shrink-0 text-slate-400" />
      </div>

      <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-600">
        {post.title}
      </p>

      <p className="mt-1 text-[11px] text-slate-400">{post.time}</p>
    </div>
  );
}
