import React from "react";
import styles from "./Pagination.module.scss";
import _ from "lodash";

function Pagination({ currentPage, paintings, pageSize, theme, onPageChange }) {
  if (!paintings) return null;
  const pageCount = Math.ceil(paintings / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <div className={styles.body}>
      <button
        onClick={() => onPageChange(1)}
        type="button"
        disabled={currentPage === 1}
        className={styles.item}
      >
        <img
          className={styles.mirror}
          src={
            theme === "light"
              ? "frame-work-team-test/images/double_next.svg"
              : "frame-work-team-test/images/double_next_light.svg"
          }
          alt="К началу списка"
        />
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        type="button"
        disabled={currentPage === 1}
        className={styles.item}
      >
        <img
          className={styles.mirror}
          src={
            theme === "light"
              ? "frame-work-team-test/images/next.svg"
              : "frame-work-team-test/images/next_light.svg"
          }
          alt="Предыдущая страница"
        />
      </button>
      {pages.map((item) => (
        <button
          type="button"
          onClick={() => onPageChange(item)}
          key={item}
          className={item === currentPage ? styles.itemActive : styles.item}
        >
          {item}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        type="button"
        disabled={currentPage === pages.length}
        className={styles.item}
      >
        <img
          src={
            theme === "light"
              ? "frame-work-team-test/images/next.svg"
              : "frame-work-team-test/images/next_light.svg"
          }
          alt="Следующая страница"
        />
      </button>
      <button
        onClick={() => onPageChange(pages.length)}
        type="button"
        disabled={currentPage === pages.length}
        className={styles.item}
      >
        <img
          src={
            theme === "light"
              ? "frame-work-team-test/images/double_next.svg"
              : "frame-work-team-test/images/double_next_light.svg"
          }
          alt="К концу списка"
        />
      </button>
    </div>
  );
}

export default Pagination;
