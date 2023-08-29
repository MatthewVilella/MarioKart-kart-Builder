"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const States_1 = require("src/Functions/States");
const ResetChoice = () => {
    const { setSelection } = (0, States_1.useGlobalState)();
    // Resets the corresponding attribute in the state.
    const characterReset = () => {
        setSelection(prevSelection => (Object.assign(Object.assign({}, prevSelection), { character: Object.assign(Object.assign({}, prevSelection.character), { name: "mbox", weight: 0, acceleration: 0, traction: 0, miniTurbo: 0, speed: 0, handling: 0, invincibility: 0 }) })));
    };
    const kartReset = () => {
        setSelection(prevSelection => (Object.assign(Object.assign({}, prevSelection), { kart: Object.assign(Object.assign({}, prevSelection.kart), { name: "mbox", weight: 0, acceleration: 0, traction: 0, miniTurbo: 0, speed: 0, handling: 0, invincibility: 0 }) })));
    };
    const tireReset = () => {
        setSelection(prevSelection => (Object.assign(Object.assign({}, prevSelection), { tire: Object.assign(Object.assign({}, prevSelection.tire), { name: "mbox", weight: 0, acceleration: 0, traction: 0, miniTurbo: 0, speed: 0, handling: 0, invincibility: 0 }) })));
    };
    const gliderReset = () => {
        setSelection(prevSelection => (Object.assign(Object.assign({}, prevSelection), { glider: Object.assign(Object.assign({}, prevSelection.glider), { name: "mbox", weight: 0, acceleration: 0, traction: 0, miniTurbo: 0, speed: 0, handling: 0, invincibility: 0 }) })));
    };
    const fullReset = () => {
        characterReset();
        kartReset();
        tireReset();
        gliderReset();
    };
    return { characterReset, kartReset, tireReset, gliderReset, fullReset };
};
exports.default = ResetChoice;
