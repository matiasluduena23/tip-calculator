import { useState } from 'react';
import Result from './components/Result';
import styles from './style/app.module.css';
import { TipContext } from './context/TipContext';
import Form from './components/Form';
import { useForm, FormProvider } from 'react-hook-form';

function App() {
    const [percentage, setPercentage] = useState('');
    const [personTip, setPersonTip] = useState('');
    const [totalTip, setTotalTip] = useState('');
    const [isActive, setIsActive] = useState('');

    const methods = useForm();

    const handleReset = () => {
        setPercentage('');
        setTotalTip('');
        setPersonTip('');
        setIsActive('');
        methods.reset();
    };

    return (
        <TipContext.Provider
            value={{
                personTip,
                setPersonTip,
                totalTip,
                setTotalTip,
                percentage,
                setPercentage,
                isActive,
                setIsActive,
            }}
        >
            <main className={styles.main}>
                <h1 className={styles.title}></h1>
                <div className={styles.grid}>
                    <FormProvider {...methods}>
                        <Form />
                        <Result handleReset={handleReset} />
                    </FormProvider>
                </div>
            </main>
        </TipContext.Provider>
    );
}

export default App;
