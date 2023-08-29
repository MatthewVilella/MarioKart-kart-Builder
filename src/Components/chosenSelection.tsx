import { useGlobalState } from 'src/Functions/States';
import ResetChoice from 'src/Functions/Reset'

export const ChosenSelection = () => {
    const { selection } = useGlobalState();
    const { characterReset, kartReset, tireReset, gliderReset, fullReset } = ResetChoice();

    return (
        <div>
            <div className="Choices-container" style={{ display: 'inline-block' }}>
                <button className="Choices">
                    <img src={`characterImages/${selection.character.name}.png`} alt="Character" onClick={() => characterReset()} />
                </button>

                <button className="Choices">
                    <img src={`kartImages/${selection.kart.name}.png`} alt="Kart" onClick={() => kartReset()} />
                </button>

                <button className="Choices">
                    <img src={`tireImages/${selection.tire.name}.png`} alt="Tires" onClick={() => tireReset()} />
                </button>

                <button className="Choices">
                    <img src={`gliderImages/${selection.glider.name}.png`} alt="Glider" onClick={() => gliderReset()} />
                </button>
            </div>
            <button className="Choices">
                <img src={`backgroundImages/reset.png`} alt="Reset" onClick={() => fullReset()} />
            </button>
        </div>
    );
};








