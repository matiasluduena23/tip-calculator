import React from "react";
import iconDollar from "../assets/icon-dollar.svg";
import iconPerson from "../assets/icon-person.svg";
import { useForm } from "react-hook-form";
import Input from "./Input";
import GridButton from "./GridButton";
import { TipContext } from "../context/TipContext";
import { useContext } from "react";

export default function Form() {
  const { setTip, setPersonTip, percentage } = useContext(TipContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
    setValue,
  } = useForm();

  const setValues = ({ total, people }) => {
    const result = (Number(total) * Number(percentage)) / 100;
    const amount = result / Number(people);
    setTip(amount.toFixed(2));
    setPersonTip((total / people + amount).toFixed(2));
  };

  return (
    <form onSubmit={handleSubmit((e) => setValues(e))}>
      <Input
        register={register}
        name="total"
        label="Bill"
        errors={errors}
        iconUrl={iconDollar}
      />

      <GridButton />

      <Input
        register={register}
        name="people"
        label="Number of People"
        errors={errors}
        iconUrl={iconPerson}
      />
    </form>
  );
}
