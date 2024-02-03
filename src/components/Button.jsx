import { useContext } from 'react';
import { TipContext } from '../context/TipContext';

export default function Button({ value, handleClick }) {
    const { isActive } = useContext(TipContext);
    const activeClass = Number(isActive) === value ? 'active' : undefined;

    return (
        <div>
            <button
                className={activeClass}
                value={value}
                type="submit"
                onClick={handleClick}
            >
                {value}%
            </button>
        </div>
    );
}
