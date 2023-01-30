import React, { useContext, useState } from "react";

import { FilterContext } from "../../App";
import styles from "./MySelectName.module.scss";

function MySelectName() {
  const [value, setValue] = useState("");
  const { setFilterName } = useContext(FilterContext);

  const handleFilterName = (e) => {
    setValue(e.target.value);
    if (e.target.value) {
      setFilterName(`&q=${e.target.value}`);
    } else {
      setFilterName("");
    }
  };

  return (
    <input
      onChange={handleFilterName}
      value={value}
      placeholder="Name"
      className={styles.name}
    />
  );
}

export default MySelectName;
