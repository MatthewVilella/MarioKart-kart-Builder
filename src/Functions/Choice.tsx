import { useGlobalState } from 'src/Functions/States';

const Choice = () => {
    const { setSelection } = useGlobalState();

    const updateState = (
        type: string,
        newName: string,
        newWeight: number,
        newAcceleration: number,
        newOnRoadTraction: number,
        newOffRoadTraction: number,
        newMiniTurbo: number,
        newGroundSpeed: number,
        newWaterSpeed: number,
        newAntiGravitySpeed: number,
        newAirSpeed: number,
        newGroundHandling: number,
        newWaterHandling: number,
        newAntiGravityHandling: number,
        newAirHandling: number,
        newInvincibility: number,
    ) => {
        // Depending on the 'type', update the corresponding attribute in the state.
        if (type === "character") {
            setSelection(prevSelection => ({
                ...prevSelection,
                character: {
                    ...prevSelection.character,
                    name: newName,
                    weight: newWeight,
                    acceleration: newAcceleration,
                    traction: (newOnRoadTraction + newOffRoadTraction) / 2,
                    miniTurbo: newMiniTurbo,
                    speed: (newGroundSpeed + newWaterSpeed + newAntiGravitySpeed + newAirSpeed) / 4,
                    handling: (newGroundHandling + newWaterHandling + newAntiGravityHandling + newAirHandling) / 4,
                    invincibility: newInvincibility,
                },
            }));
        }

        if (type === "kart") {
            setSelection(prevSelection => ({
                ...prevSelection,
                kart: {
                    ...prevSelection.kart,
                    name: newName,
                    weight: newWeight,
                    acceleration: newAcceleration,
                    traction: (newOnRoadTraction + newOffRoadTraction) / 2,
                    miniTurbo: newMiniTurbo,
                    speed: (newGroundSpeed + newWaterSpeed + newAntiGravitySpeed + newAirSpeed) / 4,
                    handling: (newGroundHandling + newWaterHandling + newAntiGravityHandling + newAirHandling) / 4,
                    invincibility: newInvincibility,
                },
            }));
        }

        if (type === "tire") {
            setSelection(prevSelection => ({
                ...prevSelection,
                tire: {
                    ...prevSelection.tire,
                    name: newName,
                    weight: newWeight,
                    acceleration: newAcceleration,
                    traction: (newOnRoadTraction + newOffRoadTraction) / 2,
                    miniTurbo: newMiniTurbo,
                    speed: (newGroundSpeed + newWaterSpeed + newAntiGravitySpeed + newAirSpeed) / 4,
                    handling: (newGroundHandling + newWaterHandling + newAntiGravityHandling + newAirHandling) / 4,
                    invincibility: newInvincibility,
                },
            }));
        }

        if (type === "glider") {
            setSelection(prevSelection => ({
                ...prevSelection,
                glider: {
                    ...prevSelection.glider,
                    name: newName,
                    weight: newWeight,
                    acceleration: newAcceleration,
                    traction: newOnRoadTraction + newOffRoadTraction / 2,
                    miniTurbo: newMiniTurbo,
                    speed: (newGroundSpeed + newWaterSpeed + newAntiGravitySpeed + newAirSpeed) / 4,
                    handling: (newGroundHandling + newWaterHandling + newAntiGravityHandling + newAirHandling) / 4,
                    invincibility: newInvincibility,
                },
            }));
        }
    };

    return { updateState };
};

export default Choice;

