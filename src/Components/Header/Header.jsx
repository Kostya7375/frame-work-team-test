import React from "react";
import { useState, useEffect } from "react";
import styles from "./Header.module.scss";

function Header({ getThemeValue }) {
  const [theme, setTheme] = useState("dark");

  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    getThemeValue(theme);
  };

  useEffect(() => {
    const backgroundColor = `var(--background-color-${theme})`;
    const color = `var(--color-${theme})`;
    const inverseColor = `var(--inverse-color-${theme})`;
    const inverseBackground = `var(--inverse-background-color-${theme})`;
    const placeholderColor = `var(--placeholder-color-${theme})`;
    const hoverColor = `var(--hover-color-${theme})`;
    const inputColor = `var(--input-color-${theme})`;

    document.body.style.setProperty("--background-color", backgroundColor);
    document.body.style.setProperty("--color", color);
    document.body.style.setProperty(
      "--inverse-background-color",
      inverseBackground
    );
    document.body.style.setProperty("--inverse-color", inverseColor);
    document.body.style.setProperty("--placeholder-color", placeholderColor);
    document.body.style.setProperty("--hover-color", hoverColor);
    document.body.style.setProperty("--input-color", inputColor);
  }, [theme]);

  return (
    <header>
      <img
        src="frame-work-team-test/images/logo.svg"
        alt="Логотип"
        className={styles.logo}
      />
      <img
        src={
          theme === "light"
            ? "frame-work-team-test/images/icon_theme_light.svg"
            : "frame-work-team-test/images/icon_theme.svg"
        }
        alt="Сменить тему"
        className={styles.theme}
        onClick={handleChangeTheme}
      />
    </header>
  );
}

export default Header;
