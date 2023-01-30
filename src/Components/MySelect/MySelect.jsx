import React, { useContext, useState } from "react";
import { FilterContext } from "../../App";
import styles from "./MySelect.module.scss";

function MySelect({ arr, defaultName, zIndex, theme }) {
  const [isOpened, setIsOpened] = useState(false);
  const [value, setValue] = useState(defaultName);

  const { setFilterAuthor, setFilterLocation } = useContext(FilterContext);

  const handleIsOpened = (e) => {
    setIsOpened(!isOpened);
  };

  const handleClearValue = (e) => {
    e.stopPropagation();
    setValue(defaultName);
    if (defaultName === "Authors") {
      setFilterAuthor("");
    }
    if (defaultName === "Location") {
      setFilterLocation("");
    }
    setIsOpened(false);
  };

  const handleSetValue = (item) => {
    setValue(item.name || item.location);
    if (item.name) {
      setFilterAuthor(`&authorId=${item.id}`);
    }
    if (item.location) {
      setFilterLocation(`&locationId=${item.id}`);
    }
    setIsOpened(false);
  };

  return (
    <div style={{ zIndex: zIndex }} className={styles.wrapper}>
      <div
        className={
          isOpened ? styles.select : `${styles.closed} ${styles.select}`
        }
      >
        <p>{value}</p>
        <div className={styles.buttons}>
          {value !== defaultName ? (
            <img
              onClick={handleClearValue}
              className={styles.clear}
              src="frame-work-team-test/images/icon_select_clear.svg"
              alt="Очистить фильтр"
            />
          ) : (
            <></>
          )}
          {theme === "light" ? (
            <img
              className={styles.appear}
              src="frame-work-team-test/images/icon_select.svg"
              alt="Открыть фильтр"
              onClick={handleIsOpened}
            />
          ) : (
            <img
              className={styles.appear}
              src="frame-work-team-test/images/icon_select_light.svg"
              alt="Открыть фильтр"
              onClick={handleIsOpened}
            />
          )}
        </div>
      </div>
      {isOpened ? (
        <ul className={styles.author}>
          {arr.map((item) => (
            <li
              className={
                value === (item.name || item.location) && styles.active
              }
              value={item.id}
              key={item.id}
              onClick={() => handleSetValue(item)}
            >
              {item.name || item.location}
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

export default MySelect;
