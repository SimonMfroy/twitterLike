import { useSelector } from 'react-redux';

const getCurrentRices = (state) => state.rice;

const RiceCount = () => {
    const rices = useSelector(getCurrentRices);

    return (
        <div className="RiceCount">
            Il y a {rices} Kg de riz en ce moment dans le state.
        </div>
    );
};

export default RiceCount;
