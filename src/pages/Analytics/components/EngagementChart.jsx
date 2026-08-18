const engagementData = [42, 55, 48, 72, 64, 82, 68, 91, 76, 88, 95, 84];

const followerData = [35, 42, 38, 48, 44, 56, 52, 62, 58, 72, 68, 82];

export default function EngagementChart() {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
      {/* Engagement */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm xl:col-span-2">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Engagement Overview
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Track how your audience interacts with your content.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
            Engagement
          </div>
        </div>

        <div className="mt-8 flex h-[280px]">
          {/* Y Axis */}
          <div className="flex w-12 flex-col justify-between pb-7 text-xs text-slate-400">
            <span>100K</span>
            <span>75K</span>
            <span>50K</span>
            <span>25K</span>
            <span>0</span>
          </div>

          {/* Chart */}
          <div className="relative flex-1">
            {/* Grid */}
            <div className="absolute inset-0 flex flex-col justify-between pb-7">
              {[1, 2, 3, 4, 5].map((line) => (
                <div
                  key={line}
                  className="border-t border-dashed border-slate-100"
                />
              ))}
            </div>

            {/* Bars */}
            <div className="absolute inset-0 flex items-end justify-between gap-2 px-2 pb-7">
              {engagementData.map((height, index) => (
                <div
                  key={index}
                  className="group relative flex h-full flex-1 items-end"
                >
                  <div
                    style={{ height: `${height}%` }}
                    className="w-full rounded-t-lg bg-indigo-500/80 transition-all duration-300 group-hover:bg-indigo-600"
                  />

                  <span className="absolute -top-6 left-1/2 hidden -translate-x-1/2 rounded-md bg-slate-900 px-2 py-1 text-xs text-white group-hover:block">
                    {height}K
                  </span>
                </div>
              ))}
            </div>

            {/* X Axis */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-slate-400">
              <span>1 Aug</span>
              <span>5 Aug</span>
              <span>10 Aug</span>
              <span>15 Aug</span>
              <span>20 Aug</span>
              <span>25 Aug</span>
              <span>30 Aug</span>
            </div>
          </div>
        </div>
      </div>

      {/* Follower Growth */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">
          Follower Growth
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Growth across all platforms.
        </p>

        <div className="mt-7">
          <p className="text-3xl font-bold text-slate-900">18,942</p>

          <p className="mt-1 text-sm font-medium text-emerald-600">
            +8.4% this month
          </p>
        </div>

        <div className="mt-8 flex h-40 items-end gap-2">
          {followerData.map((height, index) => (
            <div
              key={index}
              style={{ height: `${height}%` }}
              className="flex-1 rounded-t-md bg-emerald-500/70 transition hover:bg-emerald-600"
            />
          ))}
        </div>

        <div className="mt-3 flex justify-between text-xs text-slate-400">
          <span>Week 1</span>
          <span>Week 2</span>
          <span>Week 3</span>
          <span>Week 4</span>
        </div>
      </div>
    </div>
  );
}
