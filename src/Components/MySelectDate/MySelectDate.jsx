import React, { useState, useContext, useEffect } from "react";
import { FilterContext } from "../../App";
import styles from "./MySelectDate.module.scss";

function MySelectDate({ theme }) {
  const { setFilterDate } = useContext(FilterContext);

  const [isOpened, setIsOpened] = useState(false);
  const [value, setValue] = useState("Created");

  const [selectedYearsFrom, setSelectedYearsFrom] = useState("");
  const [selectedYearsBefore, setSelectedYearsBefore] = useState("");

  const handleChangeYearsFrom = (e) => {
    setSelectedYearsFrom(e.target.value);
  };
  const handleChangeYearsBefore = (e) => {
    setSelectedYearsBefore(e.target.value);
  };
  const pathFilterYears = () => {
    if (selectedYearsFrom && selectedYearsBefore) {
      setFilterDate(
        `&created_gte=${selectedYearsFrom}&created_lte=${selectedYearsBefore}`
      );
    }
  };

  useEffect(() => {
    pathFilterYears();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedYearsFrom, selectedYearsBefore]);
  const handleClearValue = () => {
    setValue("Created");
    setFilterDate("");
    setSelectedYearsBefore("");
    setSelectedYearsFrom("");
  };
  const handleIsOpened = (e) => {
    setIsOpened(!isOpened);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={
          isOpened ? styles.select : `${styles.closed} ${styles.select}`
        }
      >
        <p>{value}</p>
        <div className={styles.buttons}>
          {selectedYearsFrom || selectedYearsBefore !== "" ? (
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
        <div className={styles.body}>
          <div className={styles.row}>
            <input
              value={selectedYearsFrom}
              onChange={handleChangeYearsFrom}
              type="number"
              placeholder="from"
              className={styles.first}
            />
            <div className={styles.spliter} />
            <input
              value={selectedYearsBefore}
              onChange={handleChangeYearsBefore}
              type="number"
              placeholder="before"
              className={styles.second}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default MySelectDate;
