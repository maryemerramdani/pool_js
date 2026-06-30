
function dogYears(planet,seconds)
{
    const earthYearInSeconds = 31557600; 
    const dogYearsFactor = 7;
    const orbitalPlanet =
     {
        terre: 1.0,
        mercure: 0.2408467,
        vénus: 0.6151926,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturne: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132,

    };
    const ageInPlanetYears =
        seconds / (earthYearInSecond * orbitalPlanet[planet]);
    const ageInDogYears = ageInPlanetYears * dogYearsFactor;
    return Number(ageInDogYears.toFixed(2));
}
console.log(dogYears("earth", 1000000000)); // Should output 221.82
console.log(dogYears("mercury", 1000000000)); // Should output 921.3
console.log(dogYears("venus", 1000000000)); // Should output 360.59