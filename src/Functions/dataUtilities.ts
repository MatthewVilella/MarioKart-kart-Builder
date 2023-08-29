type generateType = {
  Type: string;
  Weight: number;
  Acceleration: number;
  OnRoadTraction: number;
  OffRoadTraction: number;
  MiniTurbo: number;
  GroundSpeed: number;
  WaterSpeed: number;
  AntiGravitySpeed: number;
  AirSpeed: number;
  GroundHandling: number;
  WaterHandling: number;
  AntiGravityHandling: number;
  AirHandling: number;
  Invincibility: number;
};

// Defining a data type which is a record of string keys mapped to 'generateType'.
export type dataType = Record<string, generateType>;

// Defining a function to generate a data object of 'generateType'.
export function generateData(
  Type: string,
  Weight: number,
  Acceleration: number,
  OnRoadTraction: number,
  OffRoadTraction: number,
  MiniTurbo: number,
  GroundSpeed: number,
  WaterSpeed: number,
  AntiGravitySpeed: number,
  AirSpeed: number,
  GroundHandling: number,
  WaterHandling: number,
  AntiGravityHandling: number,
  AirHandling: number,
  Invincibility: number
): generateType {
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
