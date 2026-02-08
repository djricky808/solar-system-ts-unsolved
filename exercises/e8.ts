// SPACE DATA EXERCISE 8
// Return a Planet by a given moon name
//  must have destructured parameters
import { Planet } from "../data/data";
export function findPlanetByMoon({
  planets,
  moonName,
}: {
  planets: Planet[];
  moonName: string;
}): Planet | undefined {
  let planetWithMoon: Planet | undefined;
  planets.forEach((planet: Planet) => {
    if (planet.moons) {
      if (
        planet.moons.includes(
          moonName.slice(0, 1).toUpperCase() + moonName.slice(1).toLowerCase(),
        )
      ) {
        planetWithMoon = planet;
      }
    }
  });
  return planetWithMoon;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
