// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { Asteroid } from "../data/data";

export function getGreatestDiscoveryYear(asteroids: Asteroid[]): number {
  let discoveryYearsMap = new Map<number, number>();
  let max: number = 0;
  let yearWithMostDiscoveredAsteroids: number = 0;
  for (const asteroid of asteroids) {
    let currentCount: number =
      discoveryYearsMap.get(asteroid.discoveryYear) ?? 0;
    discoveryYearsMap.set(asteroid.discoveryYear, (currentCount += 1));
  }
  for (const [year, count] of discoveryYearsMap) {
    if (count > max) {
      max = count;
      yearWithMostDiscoveredAsteroids = year;
    }
  }
  return yearWithMostDiscoveredAsteroids;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
