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
  secondaryIcon?: React.ReactNode;
  variant?: "linkedin" | "github" | "twitter" | "bluesky";
}

const variantColorMap = {
  linkedin: "#0077b5",
  github: "rgb(36, 41, 46)",
  twitter: "#1da1f2",
  bluesky: "#0085ff",
  default: "#15432bff",
};

const LinkButton: React.FC<LinkButtonProps> = ({
  text,
  href,
  imgSrc,
  color,
  icon,
  secondaryIcon,
  variant,
}) => {
  const brand = color || variantColorMap[variant ?? "default"];

  let iconToShow: React.ReactNode;
  if (icon) {
    iconToShow = (
      <span
        aria-hidden="true"
        style={{ display: "flex", alignItems: "center" }}
      >
        {icon}
      </span>
    );
  } else if (imgSrc) {
    iconToShow = (
      <Image
        src={imgSrc}
        alt=""
        width={28}
        height={28}
        style={{ borderRadius: "50%" }}
      />
    );
  } else {
    iconToShow = (
      <span
        aria-hidden="true"
        style={{ display: "flex", alignItems: "center" }}
      >
        <TreeLogoSvg width={28} height={28} />
      </span>
    );
  }

  if (variant === "twitter" && secondaryIcon) {
    return (
      <a
        href={href}
        target="_blank"
        rel="me noopener noreferrer"
        aria-label={text}
        className={`${styles.linkButton} ${styles.twitterSplitButton}`}
      >
        <span className={styles.twitterHalfFill} aria-hidden="true" />
        <span className={styles.xHalfFill} aria-hidden="true" />
        <span className={styles.twitterHalf}>
          {iconToShow}
          <span>Twitter</span>
        </span>
        <span className={styles.splitSlash} aria-hidden="true">
          /
        </span>
        <span className={styles.xHalf}>
          <span>X</span>
          <span
            aria-hidden="true"
            style={{ display: "flex", alignItems: "center" }}
          >
            {secondaryIcon}
          </span>
        </span>
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="me noopener noreferrer"
      className={styles.linkButton}
      style={{ "--brand": brand } as React.CSSProperties}
    >
      {iconToShow}
      <span>{text}</span>
    </a>
  );
};

export default LinkButton;
