import { FileText, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Terms() {
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
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <FileText size={24} />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                Terms of Service
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
              1. Acceptance of Terms
            </h2>
            <p className="mt-2 leading-7 text-slate-600">
              By accessing or using our platform, you agree to comply with these
              Terms of Service. If you do not agree with these terms, please do
              not use the platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              2. Use of the Platform
            </h2>
            <p className="mt-2 leading-7 text-slate-600">
              You agree to use the platform only for lawful purposes and in a
              manner that does not interfere with the operation of the service
              or the experience of other users.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              3. User Accounts
            </h2>
            <p className="mt-2 leading-7 text-slate-600">
              You are responsible for maintaining the security of your account
              credentials and for all activity that occurs through your account.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">4. Content</h2>
            <p className="mt-2 leading-7 text-slate-600">
              You retain responsibility for the content you publish through the
              platform. You must ensure that your content does not violate
              applicable laws or the rights of others.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              5. Prohibited Activities
            </h2>
            <p className="mt-2 leading-7 text-slate-600">
              Users must not misuse the platform, attempt unauthorized access,
              distribute harmful content, or use the service for fraudulent or
              illegal activities.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              6. Service Availability
            </h2>
            <p className="mt-2 leading-7 text-slate-600">
              We may update, modify, suspend, or discontinue parts of the
              platform when necessary to maintain and improve the service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              7. Changes to These Terms
            </h2>
            <p className="mt-2 leading-7 text-slate-600">
              These terms may be updated from time to time. Continued use of the
              platform after changes are published means that you accept the
              updated terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
