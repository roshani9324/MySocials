import { Check, CreditCard, Crown, Sparkles, Zap } from "lucide-react";
import "./BillingSection.css";

const plans = [
  {
    id: "free",
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "Get started with Socials.",
    icon: Zap,
    features: ["Social publishing", "AI caption assist"],
    current: false,
  },
  {
    id: "essentials",
    name: "Essentials",
    price: "₹2,000",
    period: "/ month",
    description: "For creators and growing teams.",
    icon: Sparkles,
    features: ["Social publishing", "AI caption assist", "Templates"],
    current: false,
  },
  {
    id: "professional",
    name: "Professional",
    price: "₹4,000",
    period: "/ month",
    description: "For advanced social management.",
    icon: Crown,
    features: ["Social publishing", "Priority AI generation"],
    current: true,
  },
];

function BillingSection() {
  const handlePlanAction = (plan) => {
    if (plan.current) {
      return;
    }

    // Connect this later to the actual payment/subscription API.
    console.log(`Selected plan: ${plan.name}`);
  };

  return (
    <div className="billing-section">
      {/* Header */}

      <div className="billing-heading">
        <div>
          <span className="billing-eyebrow">SUBSCRIPTION</span>

          <h2>Billing & Subscription</h2>

          <p>Manage your Socials plan and subscription.</p>
        </div>
      </div>

      {/* Current plan */}

      <section className="current-plan-card">
        <div className="current-plan-main">
          <div className="current-plan-icon">
            <CreditCard size={20} />
          </div>

          <div>
            <span className="current-plan-label">CURRENT PLAN</span>

            <h3>Professional</h3>

            <p>Your current Socials subscription.</p>
          </div>
        </div>

        <div className="current-plan-price">
          <strong>₹4,000</strong>
          <span>/ month</span>
        </div>

        <button type="button" className="manage-subscription-button">
          Manage Subscription
        </button>
      </section>

      {/* Plans */}

      <section className="available-plans">
        <div className="plans-heading">
          <div>
            <span className="billing-eyebrow">PLANS</span>

            <h3>Choose the plan that works for you</h3>
          </div>
        </div>

        <div className="plans-grid">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <article
                key={plan.id}
                className={`billing-plan-card ${
                  plan.current ? "billing-plan-current" : ""
                }`}
              >
                {plan.current && (
                  <span className="current-plan-badge">Current plan</span>
                )}

                <div className="billing-plan-icon">
                  <Icon size={18} />
                </div>

                <h4>{plan.name}</h4>

                <p className="billing-plan-description">{plan.description}</p>

                <div className="billing-plan-price">
                  <strong>{plan.price}</strong>

                  <span>{plan.period}</span>
                </div>

                <div className="billing-plan-divider" />

                <div className="billing-plan-features">
                  {plan.features.map((feature) => (
                    <div className="billing-feature" key={feature}>
                      <span>
                        <Check size={12} />
                      </span>

                      <p>{feature}</p>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className={`billing-plan-button ${
                    plan.current ? "billing-plan-button-current" : ""
                  }`}
                  onClick={() => handlePlanAction(plan)}
                  disabled={plan.current}
                >
                  {plan.current ? "Current Plan" : "Choose Plan"}
                </button>
              </article>
            );
          })}
        </div>
      </section>

      {/* Payment info */}

      <section className="payment-method-card">
        <div className="payment-method-icon">
          <CreditCard size={18} />
        </div>

        <div className="payment-method-content">
          <span className="billing-eyebrow">PAYMENT</span>

          <h3>Payment & invoices</h3>

          <p>Your payment details and billing history will appear here.</p>
        </div>

        <button type="button" className="billing-secondary-button">
          View invoices
        </button>
      </section>
    </div>
  );
}

export default BillingSection;
