import { ArrowRight } from "lucide-react";

function Button({
  children,
  href,
  variant = "primary",
  showArrow = false,
  onClick,
}) {
  const className = `main-button ${variant}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}

        {showArrow && <ArrowRight size={17} />}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}

      {showArrow && <ArrowRight size={17} />}
    </button>
  );
}

export default Button;
