import { useDispatch } from 'react-redux';
import RiceCount from './RiceCount';
import { buyRice, eatRice } from '../../stores/actions';

const Rice = () => {
    const dispatch = useDispatch();

    const handleBuy = () => {
        dispatch(buyRice(3));
    };

    const handleEat = () => {
        dispatch(eatRice(5));
    };

    return (
        <div className="Rices">
            <button onClick={handleBuy}>Buy 3 Rices</button>
            <button onClick={handleEat}>Eat 5 Rices</button>
            <RiceCount />
        </div>
    );
};

export default Rice;
