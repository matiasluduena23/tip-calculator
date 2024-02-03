import Button from './Button';
import styles from '../style/gridButton.module.css';
import { useContext, useState } from 'react';
import { TipContext } from '../context/TipContext';
import { useFormContext } from 'react-hook-form';

export default function GridButton() {
    const { setPercentage, setTotalTip, setPersonTip, setIsActive } =
        useContext(TipContext);
    const { getValues, trigger } = useFormContext();

    const [custom, setCustom] = useState('');

    const handleClick = (e) => {
        setCustom((prev) => (prev = ''));
        if (!getValues('bill') || !getValues('people')) {
            setTotalTip(0);
            setPersonTip(0);
            setIsActive('');
            return;
        }
        setPercentage(e.target.value);
        setIsActive(e.target.value);
    };

    const handleCustom = (e) => {
        setIsActive(null);
        trigger(['bill', 'people']);
        if (
            !getValues('bill') ||
            !getValues('people') ||
            e.target.value === ''
        ) {
            setTotalTip((prev) => (prev = 0));
            setPersonTip((prev) => (prev = 0));
            setCustom((prev) => (prev = ''));
            return;
        }
        setCustom(e.target.value);

        const totalBill = (Number(e.target.value) / 100) * getValues('bill');
        setTotalTip(
            (Number(totalBill) + Number(getValues('bill'))) /
                getValues('people')
        );
        setPersonTip(Number(totalBill) / Number(getValues('people')));
    };

    return (
        <section className={styles.section}>
            <p className="lead-label">Select Tip %</p>
            <div className={styles.grid}>
                <Button value={5} handleClick={handleClick} />
                <Button value={10} handleClick={handleClick} />
                <Button value={15} handleClick={handleClick} />
                <Button value={25} handleClick={handleClick} />
                <Button value={50} handleClick={handleClick} />

                <input
                    type="number"
                    name=""
                    dir="rtl"
                    placeholder="Custom"
                    value={custom}
                    onChange={handleCustom}
                />
            </div>
        </section>
    );
}
