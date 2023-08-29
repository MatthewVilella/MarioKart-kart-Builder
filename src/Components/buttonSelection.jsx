"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonSelection = void 0;
const characterData_1 = require("src/Data/characterData");
const kartData_1 = require("src/Data/kartData");
const tireData_1 = require("src/Data/tireData");
const gliderData_1 = require("src/Data/gliderData");
const react_1 = require("react");
const generateButtons_1 = __importDefault(require("src/Functions/generateButtons"));
const ButtonSelection = () => {
    const { createButtons } = (0, generateButtons_1.default)();
    (0, react_1.useEffect)(() => {
        createButtons(characterData_1.characterData);
        createButtons(kartData_1.kartData);
        createButtons(tireData_1.tireData);
        createButtons(gliderData_1.gliderData);
    }, []);
    return (<div>
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
        </div>);
};
exports.ButtonSelection = ButtonSelection;
