"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateData = void 0;
// Defining a function to generate a data object of 'generateType'.
function generateData(Type, Weight, Acceleration, OnRoadTraction, OffRoadTraction, MiniTurbo, GroundSpeed, WaterSpeed, AntiGravitySpeed, AirSpeed, GroundHandling, WaterHandling, AntiGravityHandling, AirHandling, Invincibility) {
    // Returning an object with attributes corresponding to the provided parameters.
    return {
        Type,
        Weight,
        Acceleration,
        OnRoadTraction,
        OffRoadTraction,
        MiniTurbo,
        GroundSpeed,
        WaterSpeed,
        AntiGravitySpeed,
        AirSpeed,
        GroundHandling,
        WaterHandling,
        AntiGravityHandling,
        AirHandling,
        Invincibility,
    };
}
exports.generateData = generateData;
