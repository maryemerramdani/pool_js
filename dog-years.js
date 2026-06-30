
function dogYears(planet,seconds)
{
    const earthYearInSeconds = 31557600; 
    const dogYearsFactor = 7;
    const orbitalperiod ={
        terre : 1.0,
        Mercure: 0.2408467,
        venus: 0.6151926,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturne: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132,
    };
    const ageInPlanetYears =
        seconds / (earthYearInSeconds * orbitalperiod[planet]);
    const ageInDogYears = ageInPlanetYears * dogYearsFactor;
    return Number(ageInDogYears.toFixed(2));
};

