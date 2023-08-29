import React, { createContext, useContext, useState, useEffect } from 'react';

interface selectionType {
    name: string;
    weight: number;
    acceleration: number;
    traction: number;
    miniTurbo: number;
    speed: number;
    handling: number;
    invincibility: number;
}

export interface structureSelectionType {
    character: selectionType;
    kart: selectionType;
    tire: selectionType;
    glider: selectionType;
    final: selectionType;
}

// Defining the context properties for the global state.
interface GlobalStateContextProps {
    selection: structureSelectionType;
    setSelection: React.Dispatch<React.SetStateAction<structureSelectionType>>;
}
// Creating the global state context.
const GlobalStateContext = createContext<GlobalStateContextProps | undefined>(undefined);

export const useGlobalState = (): GlobalStateContextProps => {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error('useGlobalState must be used within a GlobalStateProvider');
    }
    return context;
};

export const GlobalStateProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [selection, setSelection] = useState<structureSelectionType>({
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
    const calculateFinalAttributes = (): selectionType => {
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
    useEffect(() => {
        setSelection(prevSelection => ({
            ...prevSelection,
            final: calculateFinalAttributes(),
        }));
    }, [selection.character, selection.kart, selection.tire, selection.glider]);

    const contextValue = {
        selection,
        setSelection,
    };

    // Providing the context value to the components within the provider.
    return (
        <GlobalStateContext.Provider value={contextValue}>
            {children}
        </GlobalStateContext.Provider>
    );
};
