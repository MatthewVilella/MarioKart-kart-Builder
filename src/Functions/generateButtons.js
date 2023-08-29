"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Choice_1 = __importDefault(require("src/Functions/Choice"));
const Buttons = () => {
    const { updateState } = (0, Choice_1.default)();
    // An array to keep track of already created buttons.
    let alreadyMade = [];
    // Defining a function to create buttons based on the provided Data.
    const createButtons = (Data) => {
        for (const item in Data) {
            if (Data.hasOwnProperty(item) && !alreadyMade.includes(item)) {
                // Adding the current item to the list of already created buttons.
                alreadyMade.push(item);
                const buttonData = Data[item];
                const container = document.getElementById(`${buttonData.Type}-container`);
                const button = document.createElement("button");
                const image = document.createElement("img");
                button.className = `${buttonData.Type}-Button`;
                image.src = `${buttonData.Type}Images/${item}.png`;
                image.alt = item;
                button.appendChild(image);
                button.addEventListener("click", () => {
                    updateState(buttonData.Type, item, buttonData.Weight, buttonData.Acceleration, buttonData.OnRoadTraction, buttonData.OffRoadTraction, buttonData.MiniTurbo, buttonData.GroundSpeed, buttonData.WaterSpeed, buttonData.AntiGravitySpeed, buttonData.AirSpeed, buttonData.GroundHandling, buttonData.WaterHandling, buttonData.AntiGravityHandling, buttonData.AirHandling, buttonData.Invincibility);
                });
                container === null || container === void 0 ? void 0 : container.appendChild(button);
            }
        }
    };
    return { createButtons };
};
exports.default = Buttons;
