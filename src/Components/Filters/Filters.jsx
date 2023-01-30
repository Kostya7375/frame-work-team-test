import React from "react";
import MySelect from "../MySelect/MySelect";
import MySelectDate from "../MySelectDate/MySelectDate";
import MySelectName from "../MySelectName/MySelectName";
import styles from "./Filters.module.scss";

function Filters({ theme, authors, locations }) {
  return (
    <section className={styles.body}>
      <MySelectName />
      <MySelect
        theme={theme}
        zIndex={9}
        arr={authors}
        defaultName={"Authors"}
      />
      <MySelect
        theme={theme}
        zIndex={8}
        arr={locations}
        defaultName={"Location"}
      />
      <MySelectDate theme={theme} />
    </section>
  );
}

export default Filters;
