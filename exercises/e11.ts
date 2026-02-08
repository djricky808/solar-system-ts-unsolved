// SPACE DATA EXERCISE 11
// Return an array of Planets with less than 10 moons

import { Planet } from "../data/data";

// include planets with 0 moons
export function lowMoonsPlanets(planets: Planet[]): Planet[] {
  let planetsWithLessThanTenMoons: Planet[] = [];
  planets.forEach((planet: Planet) => {
    if (!planet.moonsCount || planet.moonsCount < 10) {
      planetsWithLessThanTenMoons.push(planet);
    }
  });
  return planetsWithLessThanTenMoons;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
