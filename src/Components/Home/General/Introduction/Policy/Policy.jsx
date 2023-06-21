import React from "react";
import styles from "./Policy.module.css";
import { Book } from "@mui/icons-material";

const Policy = () => {
  return (
    <div className={styles.FullPolicy}>
      <div className={styles.Policy}>
        <h1>
          <Book className={styles.Icon} />
          Policy
        </h1>
        <p>Try to pay for what you're buying</p>
        <p>Try to look for what you want</p>
      </div>
    </div>
  );
};

export default Policy;
