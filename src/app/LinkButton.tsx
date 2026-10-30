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

const variantColorMap = {
  linkedin: "rgb(0, 119, 181)",
  github: "rgb(36, 41, 46)",
  // Twitter's rgb(40, 144, 241) is only 3.3:1 on white; this keeps the hue at 5.3:1
  twitter: "#1a6dc0",
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

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.linkButton}
      style={{ "--brand": brand } as React.CSSProperties}
    >
      {iconToShow}
      <span>{text}</span>
    </a>
  );
};

export default LinkButton;
