import Button from "./Button";
import styles from "../style/gridButton.module.css";
import { useContext, useState } from "react";
import { TipContext } from "../context/TipContext";

export default function GridButton() {
  const [isClicked, setIsClicked] = useState(null);
  const { setPercentage } = useContext(TipContext);

  const handleButtonClick = (even) => {
    setPercentage(even.target.value);
    setIsClicked(Number(even.target.value));
  };

  // const handleCuston = (even) => {
  //   trigger(["total", "people"]);
  //   const percentage = even.target.value;
  //   if (watch("total") || watch("people")) {
  //     setValues(watch("total"), watch("people"), percentage);
  //   }
  //   !percentage && (setpersonTip(), setTotaltip());
  // };

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

        <input type="number" name="" dir="rtl" placeholder="Custom" />
      </div>
    </section>
  );
}
