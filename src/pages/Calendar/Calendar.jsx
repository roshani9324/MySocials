import { useState } from "react";

import CalendarHeader from "./components/CalendarHeader";
import CalendarGrid from "./components/CalendarGrid";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const [view, setView] = useState("Month");

  const handlePrevious = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const handleNext = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] p-4 md:p-6 lg:p-8">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <CalendarHeader
          currentDate={currentDate}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onToday={handleToday}
          view={view}
          setView={setView}
        />

        <CalendarGrid currentDate={currentDate} />
      </div>
    </div>
  );
}
