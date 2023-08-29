"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChosenSelection = void 0;
const States_1 = require("src/Functions/States");
const Reset_1 = __importDefault(require("src/Functions/Reset"));
const ChosenSelection = () => {
    const { selection } = (0, States_1.useGlobalState)();
    const { characterReset, kartReset, tireReset, gliderReset, fullReset } = (0, Reset_1.default)();
    return (<div>
            <div className="Choices-container" style={{ display: 'inline-block' }}>
                <button className="Choices">
                    <img src={`characterImages/${selection.character.name}.png`} alt="Character" onClick={() => characterReset()}/>
                </button>

                <button className="Choices">
                    <img src={`kartImages/${selection.kart.name}.png`} alt="Kart" onClick={() => kartReset()}/>
                </button>

                <button className="Choices">
                    <img src={`tireImages/${selection.tire.name}.png`} alt="Tires" onClick={() => tireReset()}/>
                </button>

                <button className="Choices">
                    <img src={`gliderImages/${selection.glider.name}.png`} alt="Glider" onClick={() => gliderReset()}/>
                </button>
            </div>
            <button className="Choices">
                <img src={`backgroundImages/reset.png`} alt="Reset" onClick={() => fullReset()}/>
            </button>
        </div>);
};
exports.ChosenSelection = ChosenSelection;
