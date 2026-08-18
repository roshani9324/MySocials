import { ShieldCheck, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8fafc] px-4 py-8 md:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-indigo-600"
        >
          <ArrowLeft size={17} />
          Back
        </button>

        {/* Header */}
        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <ShieldCheck size={24} />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                Privacy Policy
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                Last updated: August 2026
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              1. Information We Collect
            </h2>
            <p className="mt-2 leading-7 text-slate-600">
              We may collect information that you provide when creating an
              account, managing your profile, connecting social accounts, or
              using features of the platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              2. How We Use Your Information
            </h2>
            <p className="mt-2 leading-7 text-slate-600">
              Information may be used to provide and improve our services,
              manage your account, personalize your experience, communicate
              important updates, and maintain platform security.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              3. Social Media Accounts
            </h2>
            <p className="mt-2 leading-7 text-slate-600">
              When you connect a social media account, the platform may access
              information and permissions required to provide publishing,
              scheduling, analytics, or related functionality.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              4. Data Security
            </h2>
            <p className="mt-2 leading-7 text-slate-600">
              We take reasonable measures to protect your information against
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              5. Data Sharing
            </h2>
            <p className="mt-2 leading-7 text-slate-600">
              We do not share personal information unnecessarily. Information
              may be processed by service providers when required to operate and
              maintain the platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              6. Your Choices
            </h2>
            <p className="mt-2 leading-7 text-slate-600">
              You may review or update certain account information through your
              account settings. You may also disconnect supported social
              accounts when the platform provides that option.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              7. Policy Updates
            </h2>
            <p className="mt-2 leading-7 text-slate-600">
              This Privacy Policy may be updated periodically. Any changes will
              be reflected on this page with an updated revision date.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
