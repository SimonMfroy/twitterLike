import { useSelector } from 'react-redux';

const getCurrentPastas = (state) => state.pastas;

const PastaCount = () => {
    const pastas = useSelector(getCurrentPastas);

    return (
        <div className="PastaCount">
            Il y a {pastas} Kg de pâtes en ce moment dans le state.
        </div>
    );
};

export default PastaCount;
