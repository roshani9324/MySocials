import { CheckCircle2, Link2, MoreHorizontal, Users } from "lucide-react";

export default function AccountCard({
  platform,
  username,
  followers,
  status,
  description,
  icon,
  iconStyle,
}) {
  const connected = status === "Connected";

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Top */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold ${iconStyle}`}
          >
            {icon}
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">{platform}</h3>

            <p className="mt-0.5 text-sm text-slate-500">{username}</p>
          </div>
        </div>

        <button className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700">
          <MoreHorizontal size={19} />
        </button>
      </div>

      {/* Status */}
      <div className="mt-5 flex items-center justify-between">
        <div
          className={`flex items-center gap-2 text-sm font-medium ${
            connected ? "text-emerald-600" : "text-slate-500"
          }`}
        >
          {connected ? (
            <>
              <CheckCircle2 size={16} />
              Connected
            </>
          ) : (
            <>
              <Link2 size={16} />
              Not connected
            </>
          )}
        </div>

        {connected && (
          <div className="flex items-center gap-1.5 text-sm text-slate-500">
            <Users size={15} />
            {followers}
          </div>
        )}
      </div>

      {/* Description */}
      <p className="mt-4 min-h-[40px] text-sm leading-6 text-slate-500">
        {description}
      </p>

      {/* Action */}
      <div className="mt-5">
        {connected ? (
          <button className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
            Manage Account
          </button>
        ) : (
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700">
            <Link2 size={16} />
            Connect Account
          </button>
        )}
      </div>
    </div>
  );
}
