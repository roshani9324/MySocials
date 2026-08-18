import { Check, LockKeyhole } from "lucide-react";
import { useState } from "react";
import { pricingPlans } from "../../../data/pricing";
import ScrollReveal from "../../../components/Animation/ScrollReveal";

function Pricing() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="pricing" id="pricing">
      <div className="pricing-container">
        <div className="pricing-header">
          <span className="section-label">PRICING</span>

          <h2>Three plans. Built to grow with you.</h2>

          <div className="billing-toggle">
            <button
              className={billing === "monthly" ? "active" : ""}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>

            <button
              className={billing === "yearly" ? "active" : ""}
              onClick={() => setBilling("yearly")}
            >
              Yearly
            </button>

            <span>2 months free</span>
          </div>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <ScrollReveal
              key={plan.id}
              className={`pricing-card ${plan.popular ? "popular" : ""}`}
            >
              {plan.popular && (
                <div className="popular-badge">Most popular</div>
              )}

              <h3>{plan.name}</h3>

              <div className="price">
                {plan.price}

                <small>{plan.period}</small>
              </div>

              <p>{plan.description}</p>

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={15} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={plan.popular ? "plan-button filled" : "plan-button"}
              >
                Get started
              </button>
            </ScrollReveal>
          ))}
        </div>

        <div className="money-back">
          <LockKeyhole size={13} />
          14-day money-back guarantee. Cancel anytime.
        </div>
      </div>
    </section>
  );
}

export default Pricing;
