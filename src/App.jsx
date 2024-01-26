import { useState } from "react";
import Result from "./components/Result";
import styles from "./style/app.module.css";
import { TipContext } from "./context/TipContext";
import Form from "./components/Form";

function App() {
  const [tip, setTip] = useState(0);
  const [personTip, setPersonTip] = useState(0);
  const [percentage, setPercentage] = useState();

  return (
    <TipContext.Provider
      value={{
        tip,
        setTip,
        personTip,
        setPersonTip,
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
