import { motion } from "framer-motion";
import {
  ArrowLeft,
  CreditCard,
  RefreshCcw,
  WalletCards,
  Mail,
  ShieldCheck,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Refunds.css";

const sections = [
  {
    number: "01",
    title: "Plans and Billing",
    icon: CreditCard,
    content: (
      <p>
        Socials offers a free plan and paid subscription plans (currently
        Essentials and Professional). Paid plans are billed in advance in Indian
        Rupees (INR), monthly or yearly, through our payment partners (PayU,
        Pine Labs, Razorpay). Current pricing is always shown on our{" "}
        <a
          href="https://www.mysocials.in/pricing"
          target="_blank"
          rel="noreferrer"
        >
          Pricing page
        </a>{" "}
        before you pay.
        <br />
        We do not store your card or banking details; payments are processed
        entirely by our payment partners.
      </p>
    ),
  },
  {
    number: "02",
    title: "Cancellation",
    icon: RefreshCcw,
    content: (
      <>
        <p>
          You can cancel a paid subscription at any time from your account
          settings, or by emailing{" "}
          <a href="mailto:support@mysocials.in">support@mysocials.in</a>.
        </p>

        <ul>
          <li>
            Cancellation stops future renewals immediately - you will not be
            charged again.
          </li>
          <li>
            Your paid features remain active until the end of the billing period
            you have already paid for.
          </li>
          <li>
            After that, your account moves to the free plan. Your data is not
            deleted by cancelling a subscription.
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "03",
    title: "Refunds",
    icon: WalletCards,
    content: (
      <>
        <p>
          Fees already paid for the current billing period are generally
          non-refundable, and we do not offer pro-rata refunds for unused time.
          We DO issue a full refund in the following cases:
        </p>

        <ul>
          <li>
            <strong>Duplicate payment:</strong> you were charged more than once
            for the same subscription period.
          </li>
          <li>
            <strong>Payment without activation:</strong> your payment succeeded
            but the plan was not activated on your account and our support could
            not resolve it within 72 hours.
          </li>
          <li>
            <strong>Extended outage:</strong> a verified platform-wide outage on
            our side prevented you from using core features for a substantial
            part of your billing period.
          </li>
          <li>
            <strong>Where required by law:</strong> any refund required under
            applicable law.
          </li>
        </ul>

        <div className="policy-note">
          <AlertCircle size={17} />
          <p>
            Voucher redemptions and promotional credits have no cash value and
            are not refundable.
          </p>
        </div>
      </>
    ),
  },
  {
    number: "04",
    title: "How to Request a Refund",
    icon: Mail,
    content: (
      <>
        <p>
          Email <a href="mailto:support@mysocials.in">support@mysocials.in</a>{" "}
          from your registered email address with the payment reference (order
          or transaction ID from your payment confirmation) and a short
          description of the issue.
        </p>

        <ul>
          <li>
            We acknowledge refund requests within 24 hours and decide them
            within 7 business days.
          </li>
          <li>
            Approved refunds are issued to the original payment method.
            Depending on your bank and payment partner, the amount typically
            reflects within 5-10 business days of approval.
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "05",
    title: "Chargebacks",
    icon: ShieldCheck,
    content: (
      <p>
        If you believe a charge is incorrect, please contact us first - most
        billing issues are resolved within a day. Chargebacks filed for charges
        that match this policy may result in suspension of the associated
        account while the dispute is investigated.
      </p>
    ),
  },
  {
    number: "06",
    title: "Contact",
    icon: Mail,
    content: (
      <p>
        Billing questions:{" "}
        <a href="mailto:support@mysocials.in">support@mysocials.in</a>. See also
        our <Link to="/terms">Terms of Service</Link> (Section 8) and{" "}
        <a
          href="https://www.mysocials.in/contact"
          target="_blank"
          rel="noreferrer"
        >
          Contact page
        </a>
        .
      </p>
    ),
  },
];

export default function Refunds() {
  return (
    <div className="policy-page refunds-page">
      <div className="policy-bg-glow policy-glow-one" />
      <div className="policy-bg-glow policy-glow-two" />

      <main className="policy-container">
        <Link to="/" className="policy-back-link">
          <ArrowLeft size={15} />
          Back to Home
        </Link>

        <motion.header
          className="policy-hero"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="policy-hero-icon">
            <CreditCard size={25} />
          </div>

          <div>
            <p className="policy-label">BILLING POLICY</p>

            <h1>
              Refund and Cancellation
              <span> Policy</span>
            </h1>

            <p className="policy-subtitle">
              How billing, cancellation, and refunds work at Socials
            </p>

            <p className="policy-updated">Last updated: 13 August 2026</p>
          </div>
        </motion.header>

        <div className="policy-layout">
          <aside className="policy-sidebar">
            <p>ON THIS PAGE</p>

            <nav>
              {sections.map((section) => (
                <a key={section.number} href={`#refund-${section.number}`}>
                  <span>{section.number}</span>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="policy-content">
            {sections.map((section, index) => {
              const Icon = section.icon;

              return (
                <motion.section
                  key={section.number}
                  id={`refund-${section.number}`}
                  className="policy-section"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.03,
                  }}
                >
                  <div className="policy-section-number">{section.number}</div>

                  <div className="policy-section-body">
                    <div className="policy-section-heading">
                      <div className="policy-section-icon">
                        <Icon size={17} />
                      </div>

                      <h2>{section.title}</h2>
                    </div>

                    <div className="policy-text">{section.content}</div>
                  </div>
                </motion.section>
              );
            })}

            <footer className="policy-footer">
              <span>© 2026 Socials. All rights reserved.</span>

              <div>
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms</Link>
                <Link to="/security">Security</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}
