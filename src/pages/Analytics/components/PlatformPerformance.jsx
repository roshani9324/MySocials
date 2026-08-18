import { ArrowUpRight} from "lucide-react";
import {
  FaInstagram,

  FaLinkedin,
  FaFacebookF,
} from "react-icons/fa";
const platforms = [
  {
    name: "Instagram",
    icon: FaInstagram,
    followers: "12.8K",
    engagement: "8.4%",
    posts: 86,
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    followers: "4.2K",
    engagement: "6.8%",
    posts: 64,
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    followers: "1.9K",
    engagement: "9.2%",
    posts: 52,
  },
];

export default function PlatformPerformance() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-slate-900">
          Platform Performance
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Compare your performance across social platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {platforms.map((platform) => {
          const Icon = platform.icon;

          return (
            <div
              key={platform.name}
              className="rounded-xl border border-slate-100 bg-slate-50 p-4 transition hover:border-indigo-100 hover:bg-indigo-50/30"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                    <Icon size={20} className="text-slate-700" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {platform.name}
                    </h3>

                    <p className="text-xs text-slate-500">
                      {platform.posts} posts
                    </p>
                  </div>
                </div>

                <ArrowUpRight size={17} className="text-emerald-500" />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-500">Followers</p>

                  <p className="mt-1 font-semibold text-slate-900">
                    {platform.followers}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">Engagement</p>

                  <p className="mt-1 font-semibold text-slate-900">
                    {platform.engagement}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
