"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const buttonSelection_1 = require("src/Components/buttonSelection");
const chosenSelection_1 = require("src/Components/chosenSelection");
const statsBar_1 = require("src/Components/statsBar");
const States_1 = require("src/Functions/States");
function App() {
    return (<States_1.GlobalStateProvider>
      <div className="Center">
        <buttonSelection_1.ButtonSelection />
        <chosenSelection_1.ChosenSelection />
        <statsBar_1.StatsBar />
      </div>
    </States_1.GlobalStateProvider>);
}
exports.default = App;
