import { Eye, Heart, Users, FileText, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Total Reach",
    value: "128.4K",
    change: "+12.8%",
    icon: Eye,
  },
  {
    title: "Engagement",
    value: "24.6K",
    change: "+18.2%",
    icon: Heart,
  },
  {
    title: "Followers",
    value: "18.9K",
    change: "+8.4%",
    icon: Users,
  },
  {
    title: "Total Posts",
    value: "248",
    change: "+14.5%",
    icon: FileText,
  },
];

export default function AnalyticsStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {stat.title}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  {stat.value}
                </h3>
              </div>

              <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                <Icon size={21} />
              </div>
            </div>

            <div className="mt-4 flex items-center gap-1 text-sm font-medium text-emerald-600">
              <TrendingUp size={15} />
              {stat.change}

              <span className="ml-1 font-normal text-slate-400">
                vs last period
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
