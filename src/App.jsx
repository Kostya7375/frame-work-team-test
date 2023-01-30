import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import styles from "./App.module.scss";
import Header from "./Components/Header/Header";
import Filters from "./Components/Filters/Filters";
import Paintings from "./Components/Paintings/Paintings";

export const FilterContext = createContext({});

function App() {
  const [authors, setAuthors] = useState();
  const [locations, setLocations] = useState();

  const [theme, setTheme] = useState("light");

  const [filterName, setFilterName] = useState("");
  const [filterAuthor, setFilterAuthor] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterDate, setFilterDate] = useState("");

  const getLocations = async () => {
    const { data } = await axios.get(
      `https://test-front.framework.team/locations`
    );
    setLocations(data);
  };
  const getAuthors = async () => {
    const { data } = await axios.get(
      `https://test-front.framework.team/authors`
    );
    setAuthors(data);
  };

  useEffect(() => {
    getLocations();
    getAuthors();
  }, []);
  const getThemeValue = (value) => {
    setTheme(value);
  };

  return (
    locations &&
    authors && (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Header getThemeValue={getThemeValue} />
          <FilterContext.Provider
            value={{
              filterName,
              setFilterName,
              filterAuthor,
              setFilterAuthor,
              filterLocation,
              setFilterLocation,
              filterDate,
              setFilterDate,
            }}
          >
            <Filters theme={theme} authors={authors} locations={locations} />

            <Paintings theme={theme} authors={authors} locations={locations} />
          </FilterContext.Provider>
        </div>
      </div>
    )
  );
}

export default App;
