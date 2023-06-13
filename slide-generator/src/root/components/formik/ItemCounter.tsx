import { Dispatch, SetStateAction, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

interface Props {
    setCounter: Dispatch<SetStateAction<number>>;
 }

export const ItemCounter = ({setCounter}:Props) => {
    const [count, setCount] = useState(10);
    const minValue = 10;
    const maxValue = 15;

    const handleIncrement = () => {
        if (count < maxValue) {
            setCount(count + 1);
            setCounter(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > minValue) {
            setCount(count - 1);
            setCounter(count  - 1);
        }
    };

    return (
        <div className="flex p-4">
            <button className="mx-2" onClick={handleDecrement}>
                <FontAwesomeIcon icon={faMinus} />
            </button>

            <div>{count}</div>

            <button className="mx-2" onClick={handleIncrement}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    );
};
