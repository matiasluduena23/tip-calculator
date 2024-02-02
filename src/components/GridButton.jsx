import Button from "./Button";
import styles from "../style/gridButton.module.css";
import { useContext, useState } from "react";
import { TipContext } from "../context/TipContext";

export default function GridButton({ getValues }) {
  const { setPercentage } = useContext(TipContext);
  const [isActive, setIsActive] = useState(null);

  const handleClick = (e) => {
    if (!getValues("bill") || !getValues("people")) {
      setIsActive(null);
      return;
    }

    setPercentage(e.target.value);
    setIsActive(e.target.value);
  };

  const handleCustom = (e) => {
    setIsActive(null);
  };

  return (
    <section className={styles.section}>
      <p className="lead-label">Select Tip %</p>
      <div className={styles.grid}>
        <Button value={5} handleClick={handleClick} isActive={isActive} />
        <Button value={10} handleClick={handleClick} isActive={isActive} />
        <Button value={15} handleClick={handleClick} isActive={isActive} />
        <Button value={25} handleClick={handleClick} isActive={isActive} />
        <Button value={50} handleClick={handleClick} isActive={isActive} />

        <input
          type="number"
          name=""
          dir="rtl"
          placeholder="Custom"
          onChange={handleCustom}
        />
      </div>
    </section>
  );
}
