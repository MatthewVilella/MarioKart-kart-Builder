"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsBar = void 0;
const States_1 = require("src/Functions/States");
const StatsBar = () => {
    const { selection } = (0, States_1.useGlobalState)();
    return (<div>
            <div className="stats-bar">
                <h1 className="Stats">Speed</h1>
                <div className="stats-bar-fill" style={{ width: `${selection.character.speed}%` }}></div>
            </div>

            <div className="stats-bar">
                <h1 className="Stats">Acceleration</h1>
                <div className="stats-bar-fill" style={{ width: `${selection.final.acceleration}%` }}></div>
            </div>

            <div className="stats-bar">
                <h1 className="Stats">Weight</h1>
                <div className="stats-bar-fill" style={{ width: `${selection.final.weight}%` }}></div>
            </div>

            <div className="stats-bar">
                <h1 className="Stats">Handling</h1>
                <div className="stats-bar-fill" style={{ width: `${selection.final.handling}%` }}></div>
            </div>

            <div className="stats-bar">
                <h1 className="Stats">Traction</h1>
                <div className="stats-bar-fill" style={{ width: `${selection.final.traction}%` }}></div>
            </div>

            <div className="stats-bar">
                <h1 className="Stats">MiniTurbo</h1>
                <div className="stats-bar-fill" style={{ width: `${selection.final.miniTurbo}%` }}></div>
            </div>

            <div className="stats-bar">
                <h1 className="Stats">Invincibility</h1>
                <div className="stats-bar-fill" style={{ width: `${selection.final.invincibility}%` }}></div>
            </div>

        </div>);
};
exports.StatsBar = StatsBar;
