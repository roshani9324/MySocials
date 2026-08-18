function SocialIcon({ platform, size = "normal", floating = false }) {
  const Icon = platform.icon;

  return (
    <div
      className={`social-icon ${platform.className} ${size} ${
        floating ? "floating" : ""
      }`}
    >
      <Icon />
    </div>
  );
}

export default SocialIcon;
