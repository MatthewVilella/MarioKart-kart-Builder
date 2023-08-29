"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalStateProvider = exports.useGlobalState = void 0;
const react_1 = __importStar(require("react"));
// Creating the global state context.
const GlobalStateContext = (0, react_1.createContext)(undefined);
const useGlobalState = () => {
    const context = (0, react_1.useContext)(GlobalStateContext);
    if (!context) {
        throw new Error('useGlobalState must be used within a GlobalStateProvider');
    }
    return context;
};
exports.useGlobalState = useGlobalState;
const GlobalStateProvider = ({ children }) => {
    const [selection, setSelection] = (0, react_1.useState)({
        character: {
            name: "mbox",
            weight: 0,
            acceleration: 0,
            traction: 0,
            miniTurbo: 0,
            speed: 0,
            handling: 0,
            invincibility: 0,
        },
        kart: {
            name: "mbox",
            weight: 0,
            acceleration: 0,
            traction: 0,
            miniTurbo: 0,
            speed: 0,
            handling: 0,
            invincibility: 0,
        },
        tire: {
            name: "mbox",
            weight: 0,
            acceleration: 0,
            traction: 0,
            miniTurbo: 0,
            speed: 0,
            handling: 0,
            invincibility: 0,
        },
        glider: {
            name: "mbox",
            weight: 0,
            acceleration: 0,
            traction: 0,
            miniTurbo: 0,
            speed: 0,
            handling: 0,
            invincibility: 0,
        },
        final: {
            name: "mbox",
            weight: 0,
            acceleration: 0,
            traction: 0,
            miniTurbo: 0,
            speed: 0,
            handling: 0,
            invincibility: 0,
        },
    });
    // Calculate the sum of attributes for character, kart, tire, and glider.
    const calculateFinalAttributes = () => {
        const finalWeight = selection.character.weight + selection.kart.weight + selection.tire.weight + selection.glider.weight;
        const finalAcceleration = selection.character.acceleration + selection.kart.acceleration + selection.tire.acceleration + selection.glider.acceleration;
        const finalTraction = selection.character.traction + selection.kart.traction + selection.tire.traction + selection.glider.traction;
        const finalMiniTurbo = selection.character.miniTurbo + selection.kart.miniTurbo + selection.tire.miniTurbo + selection.glider.miniTurbo;
        const finalSpeed = selection.character.speed + selection.kart.speed + selection.tire.speed + selection.glider.speed;
        const finalHandling = selection.character.handling + selection.kart.handling + selection.tire.handling + selection.glider.handling;
        const finalInvincibility = selection.character.invincibility + selection.kart.invincibility + selection.tire.invincibility + selection.glider.invincibility;
        return {
            name: "mbox",
            weight: finalWeight,
            acceleration: finalAcceleration,
            traction: finalTraction,
            miniTurbo: finalMiniTurbo,
            speed: finalSpeed,
            handling: finalHandling,
            invincibility: finalInvincibility,
        };
    };
    // Using useEffect to automatically update the 'final' attributes whenever the attributes for character, kart, tire, or glider change.
    (0, react_1.useEffect)(() => {
        setSelection(prevSelection => (Object.assign(Object.assign({}, prevSelection), { final: calculateFinalAttributes() })));
    }, [selection.character, selection.kart, selection.tire, selection.glider]);
    const contextValue = {
        selection,
        setSelection,
    };
    // Providing the context value to the components within the provider.
    return (<GlobalStateContext.Provider value={contextValue}>
            {children}
        </GlobalStateContext.Provider>);
};
exports.GlobalStateProvider = GlobalStateProvider;
