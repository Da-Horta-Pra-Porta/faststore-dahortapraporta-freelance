import React from "react";
import styles from "./custom-hero-header.module.scss";
import { Button } from "@faststore/ui";
import Link from "next/link";

interface CustomHeroHeaderProps {
  title: string;
  subtitle: string;
  link?: string;
  linkText?: string;
}

export const CustomHeroHeader: React.FC<CustomHeroHeaderProps> = ({ title, subtitle, link, linkText }) => {
  const linkClass = link ? "" : styles.hidden;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!link) {
      e.preventDefault();
    }
  };

  return (
    <div className={styles.customHeroHeaderContainer}>
      <h1 className={styles.customHeroHeaderTitle}>{title}</h1>
      <p className={styles.customHeroHeaderDescription}>{subtitle}</p>
      <Link className={linkClass} href={link ? link : ""}>
        <Button className={linkClass} variant="secondary" onClick={handleClick} disabled={!link}>
          {linkText ? linkText : "linkText"}
        </Button>
      </Link>
    </div>
  );
};
