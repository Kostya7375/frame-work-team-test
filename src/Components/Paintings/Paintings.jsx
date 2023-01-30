import React, { useState, useEffect, useContext } from "react";

import axios from "axios";
import { FilterContext } from "../../App";
import Painting from "../Painting/Painting";
import styles from "./Paintings.module.scss";
import Pagination from "../Pagination/Pagination";

function Paintings({ authors, locations, theme }) {
  const pageSize = 12;

  const [sorted, setSorted] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paintings, setPaintings] = useState();

  const { filterName, filterAuthor, filterLocation, filterDate } =
    useContext(FilterContext);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const getCurrentPage = (value) => {
    setCurrentPage(value);
  };

  const getContent = async () => {
    const { data } = await axios.get(
      `https://test-front.framework.team/paintings?${filterName}${filterAuthor}${filterLocation}${filterDate}`
    );
    setPaintings(data);
  };
  const getApiPaginated = async () => {
    const { data } = await axios.get(
      `https://test-front.framework.team/paintings?${filterName}${filterAuthor}${filterLocation}${filterDate}&_page=${currentPage}&_limit=${pageSize}`
    );
    setSorted(data);
  };

  useEffect(() => {
    getApiPaginated();
    countPicture();
    getContent();
    setCurrentPage(1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterName, filterAuthor, filterLocation, filterDate]);

  useEffect(() => {
    getApiPaginated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);
  const countPicture = () => {
    if (paintings) {
      return paintings.length;
    }
  };

  return (
    <>
      <div className={styles.body}>
        {sorted.length ? (
          sorted.map((item) => (
            <Painting
              item={item}
              authors={authors}
              locations={locations}
              key={`Картина #${item.id}}`}
            />
          ))
        ) : (
          <h1>Ничего не найдено</h1>
        )}
      </div>
      <Pagination
        theme={theme}
        getCurrentPage={getCurrentPage}
        currentPage={currentPage}
        paintings={countPicture()}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default Paintings;
