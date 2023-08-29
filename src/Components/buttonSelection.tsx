
import { characterData } from "src/Data/characterData";
import { kartData } from "src/Data/kartData";
import { tireData } from "src/Data/tireData";
import { gliderData } from "src/Data/gliderData";
import { useEffect } from 'react';
import Buttons from "src/Functions/generateButtons";


export const ButtonSelection = () => {
    const { createButtons } = Buttons();

    useEffect(() => {
        createButtons(characterData);
        createButtons(kartData);
        createButtons(tireData);
        createButtons(gliderData);
    }, []);

    return (
        <div>
            <div className="character-Container" style={{ display: 'inline-block', }} id="character-container">
                <h1 className="Title">Characters</h1>
            </div>

            <div className="kart-Container" style={{ display: 'inline-block', }} id="kart-container">
                <h1 className="Title">Karts</h1>
            </div>

            <div className="tire-Container" style={{ display: 'inline-block', }} id="tire-container">
                <h1 className="Title">Tires</h1>
            </div>

            <div className="glider-Container" style={{ display: 'inline-block', }} id="glider-container">
                <h1 className="Title">Gliders</h1>
            </div>
        </div>
    );
};

