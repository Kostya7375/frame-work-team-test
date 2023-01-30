import React from "react";
import styles from "./Painting.module.scss";

function Painting({ item, authors, locations }) {
  return (
    locations &&
    authors && (
      <div className={styles.body}>
        <img
          src={`https://test-front.framework.team${item.imageUrl}`}
          alt="картинка"
        />
        <div className={styles.desc}>
          <h2 className={styles.title}>{item.name}</h2>
          <div className={styles.subtitle}>
            <div className={styles.author}>
              <b>Author:</b>
              <p>
                {authors &&
                  authors.find((elem) => elem.id === item.authorId).name}
              </p>
            </div>
            <div className={styles.created}>
              <b>Created:</b>
              <p>{item.created}</p>
            </div>
            <div className={styles.location}>
              <b>Location:</b>
              <p>
                {locations &&
                  locations.find((elem) => elem.id === item.locationId)
                    .location}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Painting;
