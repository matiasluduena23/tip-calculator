import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./components/Input";
import Button from "./components/Button";

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
    reset,
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

  const handleButtonClick = (even) => {
    setPercentage(even.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleClick)}>
        <Input register={register} label="total" errors={errors} />

        <Button value={5} handleClick={handleButtonClick} />
        <Button value={10} handleClick={handleButtonClick} />
        <Button value={15} handleClick={handleButtonClick} />
        <Button value={25} handleClick={handleButtonClick} />
        <Button value={50} handleClick={handleButtonClick} />

        <input
          type="number"
          name=""
          placeholder="custom"
          onChange={handleCuston}
        />

        <Input register={register} label="people" errors={errors} />
      </form>

      <p>total tip: {totalTip ? totalTip : 0} </p>
      <p>person tip: {personTip ? personTip : 0} </p>
    </>
  );
}

export default App;
