import { useState } from "react";
import Result from "./components/Result";
import styles from "./style/app.module.css";
import { TipContext } from "./context/TipContext";
import Form from "./components/Form";

function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [percentage, setPercentage] = useState(null);
  const [personTip, setPersonTip] = useState(null);
  const [totalTip, setTotalTip] = useState(null);

  return (
    <TipContext.Provider
      value={{
        bill,
        setBill,
        people,
        setPeople,
        personTip,
        setPersonTip,
        totalTip,
        setTotalTip,
        percentage,
        setPercentage,
      }}
    >
      <main className={styles.main}>
        <h1 className={styles.title}></h1>
        <div className={styles.grid}>
          <Form />
          <Result />
        </div>
      </main>
    </TipContext.Provider>
  );
}

export default App;
