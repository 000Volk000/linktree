import React from "react";
import Image from "next/image";
import TreeLogoSvg from "./TreeLogoSvg";
import styles from "./page.module.css";

interface LinkButtonProps {
  text: string;
  href: string;
  imgSrc?: string;
  color?: string;
  icon?: React.ReactNode;
  variant?: "linkedin" | "github" | "twitter";
}

const variantClassMap = {
  linkedin: styles.linkedinButton,
  github: styles.githubButton,
  twitter: styles.twitterButton,
  default: styles.defaultButton,
};

const variantColorMap = {
  linkedin: "rgb(0, 119, 181)",
  github: "rgb(36, 41, 46)",
  twitter: "rgb(40, 144, 241)",
  default: "#15432bff",
};

const LinkButton: React.FC<LinkButtonProps> = ({
  text,
  href,
  imgSrc,
  color,
  icon,
  variant,
}) => {
  const className = variant
    ? variantClassMap[variant]
    : variantClassMap.default;
  const useColor =
    color || (variant ? variantColorMap[variant] : variantColorMap.default);
  const customStyle = color
    ? { borderColor: useColor, color: useColor }
    : { borderColor: useColor };

  let iconToShow: React.ReactNode;
  if (icon) {
    iconToShow = (
      <span style={{ display: "flex", alignItems: "center", marginRight: 10 }}>
        {icon}
      </span>
    );
  } else if (imgSrc) {
    iconToShow = (
      <Image
        src={imgSrc}
        alt="icon"
        width={28}
        height={28}
        style={{ borderRadius: "50%", marginRight: 10 }}
      />
    );
  } else {
    iconToShow = (
      <span style={{ display: "flex", alignItems: "center", marginRight: 10 }}>
        <TreeLogoSvg width={28} height={28} />
      </span>
    );
  }

  return (
    <div className={styles.buttonGroup}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <button className={className} style={customStyle}>
          {iconToShow}
          <span>{text}</span>
        </button>
      </a>
    </div>
  );
};

export default LinkButton;
