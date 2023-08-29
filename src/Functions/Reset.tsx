import { useGlobalState } from 'src/Functions/States';

const ResetChoice = () => {
    const { setSelection } = useGlobalState();

    // Resets the corresponding attribute in the state.
    const characterReset = () => {
        setSelection(prevSelection => ({
            ...prevSelection,
            character: {
                ...prevSelection.character,
                name: "mbox",
                weight: 0,
                acceleration: 0,
                traction: 0,
                miniTurbo: 0,
                speed: 0,
                handling: 0,
                invincibility: 0,
            },
        }));
    };

    const kartReset = () => {
        setSelection(prevSelection => ({
            ...prevSelection,
            kart: {
                ...prevSelection.kart,
                name: "mbox",
                weight: 0,
                acceleration: 0,
                traction: 0,
                miniTurbo: 0,
                speed: 0,
                handling: 0,
                invincibility: 0,
            },
        }));
    };

    const tireReset = () => {
        setSelection(prevSelection => ({
            ...prevSelection,
            tire: {
                ...prevSelection.tire,
                name: "mbox",
                weight: 0,
                acceleration: 0,
                traction: 0,
                miniTurbo: 0,
                speed: 0,
                handling: 0,
                invincibility: 0,
            },
        }));
    };

    const gliderReset = () => {
        setSelection(prevSelection => ({
            ...prevSelection,
            glider: {
                ...prevSelection.glider,
                name: "mbox",
                weight: 0,
                acceleration: 0,
                traction: 0,
                miniTurbo: 0,
                speed: 0,
                handling: 0,
                invincibility: 0,
            },
        }));
    };

    const fullReset = () => {
        characterReset();
        kartReset();
        tireReset();
        gliderReset();
    };

    return { characterReset, kartReset, tireReset, gliderReset, fullReset };
};

export default ResetChoice;


