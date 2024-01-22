import { useEffect, useState } from "react"
import { useForm } from 'react-hook-form'
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  const [total, setTotal] = useState();
  const [people, setPeople] = useState();
  const [totalTip, setTotaltip] = useState();
  const [personTip, setpersonTip] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  const handleClick = (targetValue) => {
    const percetage = Number(targetValue.target.value)
    const result = (Number(total) * percetage) / 100;
    const amount = result / Number(people);
    setTotaltip((amount).toFixed(2));
    setpersonTip(((total / people) + amount).toFixed(2))
  }




  return (
    <>
      <Input register={register} label='total' errors={errors} setValue={setTotal} />
      <Button value={5} handleClick={handleClick} />
      <Input register={register} label='people' errors={errors} setValue={setPeople} />
      <p>total tip: {totalTip ? totalTip : 0} </p>
      <p>person tip: {personTip ? personTip : 0} </p>
    </>
  )
}

export default App
