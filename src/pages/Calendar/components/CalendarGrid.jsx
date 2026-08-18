import ScheduledPost from "./ScheduledPost";

const posts = {
  3: [
    {
      platform: "Instagram",
      title: "Monday Motivation",
      time: "10:30 AM",
    },
  ],

  5: [
    {
      platform: "LinkedIn",
      title: "Industry Insights",
      time: "2:00 PM",
    },
  ],

  8: [
    {
      platform: "Facebook",
      title: "Weekend Campaign",
      time: "11:00 AM",
    },
  ],

  12: [
    {
      platform: "Instagram",
      title: "Behind the Scenes",
      time: "6:30 PM",
    },
  ],

  15: [
    {
      platform: "LinkedIn",
      title: "Product Update",
      time: "1:00 PM",
    },
  ],

  18: [
    {
      platform: "Instagram",
      title: "New Feature Announcement",
      time: "10:30 AM",
    },
    {
      platform: "Facebook",
      title: "Community Post",
      time: "4:00 PM",
    },
  ],

  21: [
    {
      platform: "LinkedIn",
      title: "Weekly Insights",
      time: "2:00 PM",
    },
  ],

  24: [
    {
      platform: "Instagram",
      title: "Creator Tips",
      time: "11:30 AM",
    },
  ],

  27: [
    {
      platform: "Facebook",
      title: "Weekend Content",
      time: "12:00 PM",
    },
  ],

  30: [
    {
      platform: "Instagram",
      title: "Monthly Recap",
      time: "7:00 PM",
    },
  ],
};

export default function CalendarGrid({ currentDate }) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const previousMonthDays = new Date(year, month, 0).getDate();

  const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;

  const days = [];

  for (let i = 0; i < totalCells; i++) {
    const dayNumber = i - firstDay + 1;

    if (dayNumber < 1) {
      days.push({
        day: previousMonthDays + dayNumber,
        currentMonth: false,
      });
    } else if (dayNumber > daysInMonth) {
      days.push({
        day: dayNumber - daysInMonth,
        currentMonth: false,
      });
    } else {
      days.push({
        day: dayNumber,
        currentMonth: true,
      });
    }
  }

  const today = new Date();

  const isToday = (day) => {
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[760px]">
        {/* Week Days */}
        <div className="grid grid-cols-7 border-b border-slate-200 bg-slate-50">
          {[
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ].map((day) => (
            <div
              key={day}
              className="border-r border-slate-200 px-3 py-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-500 last:border-r-0"
            >
              {day.slice(0, 3)}
            </div>
          ))}
        </div>

        {/* Days */}
        <div className="grid grid-cols-7">
          {days.map((item, index) => {
            const dayPosts = item.currentMonth ? posts[item.day] || [] : [];

            return (
              <div
                key={index}
                className={`min-h-[145px] border-b border-r border-slate-200 p-2 ${
                  !item.currentMonth ? "bg-slate-50/70" : "bg-white"
                }`}
              >
                {/* Date */}
                <div className="mb-2 flex justify-end">
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium ${
                      isToday(item.day) && item.currentMonth
                        ? "bg-indigo-600 text-white"
                        : item.currentMonth
                          ? "text-slate-700"
                          : "text-slate-300"
                    }`}
                  >
                    {item.day}
                  </span>
                </div>

                {/* Posts */}
                <div className="space-y-2">
                  {dayPosts.map((post, postIndex) => (
                    <ScheduledPost key={postIndex} post={post} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
