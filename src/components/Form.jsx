import iconDollar from '../assets/icon-dollar.svg';
import iconPerson from '../assets/icon-person.svg';
import { useFormContext } from 'react-hook-form';
import Input from './Input';
import GridButton from './GridButton';
import { TipContext } from '../context/TipContext';
import { useContext } from 'react';

export default function Form() {
    const { percentage, setTotalTip, setPersonTip } = useContext(TipContext);
    const { handleSubmit } = useFormContext();

    const onSubmit = ({ bill, people }) => {
        const totalBill = (Number(percentage) / 100) * bill;
        setTotalTip((Number(totalBill) + Number(bill)) / people);
        setPersonTip(Number(totalBill) / Number(people));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input label="Bill" iconUrl={iconDollar} name="bill" />

            <GridButton />

            <Input
                label="Number of People"
                iconUrl={iconPerson}
                name="people"
            />
        </form>
    );
}
