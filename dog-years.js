function dogYears(planet, seconds) {
  const earthYearInSeconds = 31557600;
  const dogYearsFactor = 7;
  const orbitalPeriod = {
    mercury: 0.2408467,
    venus: 0.6151926,
    earth: 1.0,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };
  const ageInPlanetYears = seconds / (earthYearInSeconds * orbitalPeriod[planet]);
  const ageInDogYears = ageInPlanetYears * dogYearsFactor;
  return Number(ageInDogYears.toFixed(2));
}