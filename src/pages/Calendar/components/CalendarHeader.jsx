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
    <header className="calendar-header">
      {/* TOP SECTION */}
      <div className="calendar-header-top">
        <div className="calendar-title-area">
          <div className="calendar-title-icon">
            <CalendarDays size={21} strokeWidth={1.8} />
          </div>

          <div>
            <h1>Content Calendar</h1>
            <p>Plan and manage your scheduled content.</p>
          </div>
        </div>

        <button className="calendar-create-btn">
          <Plus size={17} strokeWidth={2.2} />
          <span>Create Post</span>
        </button>
      </div>

      {/* CONTROLS */}
      <div className="calendar-controls">
        <div className="calendar-navigation">
          <button
            onClick={onPrevious}
            className="calendar-nav-btn"
            aria-label="Previous month"
          >
            <ChevronLeft size={17} />
          </button>

          <button onClick={onToday} className="calendar-today-btn">
            Today
          </button>

          <button
            onClick={onNext}
            className="calendar-nav-btn"
            aria-label="Next month"
          >
            <ChevronRight size={17} />
          </button>

          <h2>{monthName}</h2>
        </div>

        <div className="calendar-view-switcher">
          {["Month", "Week"].map((item) => (
            <button
              key={item}
              onClick={() => setView(item)}
              className={
                view === item ? "calendar-view-btn active" : "calendar-view-btn"
              }
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
