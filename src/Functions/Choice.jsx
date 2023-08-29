"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const States_1 = require("src/Functions/States");
const Choice = () => {
    const { setSelection } = (0, States_1.useGlobalState)();
    const updateState = (type, newName, newWeight, newAcceleration, newOnRoadTraction, newOffRoadTraction, newMiniTurbo, newGroundSpeed, newWaterSpeed, newAntiGravitySpeed, newAirSpeed, newGroundHandling, newWaterHandling, newAntiGravityHandling, newAirHandling, newInvincibility) => {
        // Depending on the 'type', update the corresponding attribute in the state.
        if (type === "character") {
            setSelection(prevSelection => (Object.assign(Object.assign({}, prevSelection), { character: Object.assign(Object.assign({}, prevSelection.character), { name: newName, weight: newWeight, acceleration: newAcceleration, traction: (newOnRoadTraction + newOffRoadTraction) / 2, miniTurbo: newMiniTurbo, speed: (newGroundSpeed + newWaterSpeed + newAntiGravitySpeed + newAirSpeed) / 4, handling: (newGroundHandling + newWaterHandling + newAntiGravityHandling + newAirHandling) / 4, invincibility: newInvincibility }) })));
        }
        if (type === "kart") {
            setSelection(prevSelection => (Object.assign(Object.assign({}, prevSelection), { kart: Object.assign(Object.assign({}, prevSelection.kart), { name: newName, weight: newWeight, acceleration: newAcceleration, traction: (newOnRoadTraction + newOffRoadTraction) / 2, miniTurbo: newMiniTurbo, speed: (newGroundSpeed + newWaterSpeed + newAntiGravitySpeed + newAirSpeed) / 4, handling: (newGroundHandling + newWaterHandling + newAntiGravityHandling + newAirHandling) / 4, invincibility: newInvincibility }) })));
        }
        if (type === "tire") {
            setSelection(prevSelection => (Object.assign(Object.assign({}, prevSelection), { tire: Object.assign(Object.assign({}, prevSelection.tire), { name: newName, weight: newWeight, acceleration: newAcceleration, traction: (newOnRoadTraction + newOffRoadTraction) / 2, miniTurbo: newMiniTurbo, speed: (newGroundSpeed + newWaterSpeed + newAntiGravitySpeed + newAirSpeed) / 4, handling: (newGroundHandling + newWaterHandling + newAntiGravityHandling + newAirHandling) / 4, invincibility: newInvincibility }) })));
        }
        if (type === "glider") {
            setSelection(prevSelection => (Object.assign(Object.assign({}, prevSelection), { glider: Object.assign(Object.assign({}, prevSelection.glider), { name: newName, weight: newWeight, acceleration: newAcceleration, traction: newOnRoadTraction + newOffRoadTraction / 2, miniTurbo: newMiniTurbo, speed: (newGroundSpeed + newWaterSpeed + newAntiGravitySpeed + newAirSpeed) / 4, handling: (newGroundHandling + newWaterHandling + newAntiGravityHandling + newAirHandling) / 4, invincibility: newInvincibility }) })));
        }
    };
    return { updateState };
};
exports.default = Choice;
