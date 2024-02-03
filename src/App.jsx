import { useState } from 'react';
import Result from './components/Result';
import styles from './style/app.module.css';
import { TipContext } from './context/TipContext';
import Form from './components/Form';

function App() {
    const [percentage, setPercentage] = useState('');
    const [personTip, setPersonTip] = useState('');
    const [totalTip, setTotalTip] = useState('');
    const [isActive, setIsActive] = useState('');

    const handleReset = () => {
        setPercentage('');
        setTotalTip('');
        setPersonTip('');
        setIsActive('');
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
                    <Form />
                    <Result handleReset={handleReset} />
                </div>
            </main>
        </TipContext.Provider>
    );
}

export default App;
