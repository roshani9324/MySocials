import { ChevronLeft, ChevronRight, Plus, CalendarDays } from "lucide-react";

export default function CalendarHeader({
  currentDate,
  onPrevious,
  onNext,
  onToday,
  view,
  setView,
}) {
  const monthName = currentDate.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex flex-col gap-4 border-b border-slate-100 p-4 md:p-6">
      {/* Top */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <CalendarDays size={21} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Content Calendar
            </h1>

            <p className="text-sm text-slate-500">
              Plan and manage your scheduled content.
            </p>
          </div>
        </div>

        <button className="flex w-fit items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
          <Plus size={18} />
          Create Post
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <button
            onClick={onPrevious}
            className="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={onToday}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
          >
            Today
          </button>

          <button
            onClick={onNext}
            className="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
          >
            <ChevronRight size={18} />
          </button>

          <h2 className="ml-2 text-lg font-semibold text-slate-900">
            {monthName}
          </h2>
        </div>

        <div className="flex w-fit rounded-xl border border-slate-200 bg-slate-50 p-1">
          {["Month", "Week"].map((item) => (
            <button
              key={item}
              onClick={() => setView(item)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                view === item
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
