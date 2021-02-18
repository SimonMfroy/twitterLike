import { useDispatch } from 'react-redux';
import PastaCount from './PastaCount';
import { buyPastas, eatPastas } from '../../stores/actions';

const Pastas = () => {
    const dispatch = useDispatch();

    const handleBuy = () => {
        dispatch(buyPastas(3));
    };

    const handleEat = () => {
        dispatch(eatPastas(5));
    };

    return (
        <div className="Pastas">
            <button onClick={handleBuy}>Buy 3 pastas</button>
            <button onClick={handleEat}>Eat 5 pastas</button>
            <PastaCount />
        </div>
    );
};

export default Pastas;
