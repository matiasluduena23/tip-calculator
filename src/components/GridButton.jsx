import Button from "./Button";
import styles from "../style/gridButton.module.css";
import { useState } from "react";

export default function GridButton({ setPercentage, handleCuston }) {
  const [isClicked, setIsClicked] = useState(null);
  const handleButtonClick = (even) => {
    setPercentage(even.target.value);
    setIsClicked(Number(even.target.value));
  };

  return (
    <section className={styles.section}>
      <p className="lead-label">Select Tip %</p>
      <div className={styles.grid}>
        <Button
          value={5}
          handleClick={handleButtonClick}
          isClicked={isClicked}
        />
        <Button
          value={10}
          handleClick={handleButtonClick}
          isClicked={isClicked}
        />
        <Button
          value={15}
          handleClick={handleButtonClick}
          isClicked={isClicked}
        />
        <Button
          value={25}
          handleClick={handleButtonClick}
          isClicked={isClicked}
        />
        <Button
          value={50}
          handleClick={handleButtonClick}
          isClicked={isClicked}
        />

        <input
          type="number"
          name=""
          dir="rtl"
          placeholder="Custom"
          onChange={handleCuston}
        />
      </div>
    </section>
  );
}
