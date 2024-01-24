import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./components/Input";
import Result from "./components/Result";
import GridButton from "./components/GridButton";
import styles from "./style/app.module.css";
import iconDollar from "./assets/icon-dollar.svg";
import iconPerson from "./assets/icon-person.svg";

function App() {
  const [totalTip, setTotaltip] = useState();
  const [personTip, setpersonTip] = useState();
  const [percentage, setPercentage] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
  } = useForm();

  const handleClick = (data) => {
    const { total, people } = data;
    setValues(total, people);
  };

  const setValues = (total, people, perc = percentage) => {
    const result = (Number(total) * perc) / 100;
    const amount = result / Number(people);
    setTotaltip(amount.toFixed(2));
    setpersonTip((total / people + amount).toFixed(2));
  };

  const handleCuston = (even) => {
    trigger(["total", "people"]);
    const percentage = even.target.value;
    if (watch("total") || watch("people")) {
      setValues(watch("total"), watch("people"), percentage);
    }
    !percentage && (setpersonTip(), setTotaltip());
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}></h1>
      <div className={styles.grid}>
        <form onSubmit={handleSubmit(handleClick)}>
          <Input
            register={register}
            name="total"
            label="Bill"
            errors={errors}
            iconUrl={iconDollar}
          />

          <GridButton
            setPercentage={setPercentage}
            handleCuston={handleCuston}
          />

          <Input
            register={register}
            name="people"
            label="Number of People"
            errors={errors}
            iconUrl={iconPerson}
          />
        </form>

        <Result totalTip={totalTip} personTip={personTip} />
      </div>
    </main>
  );
}

export default App;
