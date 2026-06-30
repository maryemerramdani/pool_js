
function dogYears(planet,seconds)
{
    const a=7;
    const b=31557600; 
    const orbitalplanet={
        terre: 1.0,
        mercure: 0.2408467,
        vénus: 0.6151926,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturne: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132,

    };
    const c=seconds/b*orbitalplanet[planet];
    const d=c*a;

    return Number(d.toFixed(2));
}