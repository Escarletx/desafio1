const heros = [
    { name: "Pedro", xp: 10000 },
    { name: "Pott", xp: 5000},
    { name: "Job", xp: 2000},
    { name: "Aliunalarionova", xp: 7000}
]

function setLevel (xp) {
    let level;

    switch (true) {
        case (xp < 1000):
            level = "Ferro";
            break;
        case (xp <= 2000):
            level = "Bronze";
            break;
        case (xp <= 5000):
            level = "Prata";
            break;
        case (xp <= 7000):
            level = "Ouro";
            break;
        case (xp <= 8000):
            level = "Platina";
            break;
        case (xp <= 9000):
            level = "Ascendente";
            break;
        case (xp <= 10000):
            level = "Imortal";
            break;
        case (xp >= 10001):
            level = "Radiante";
            break;
        default:
            level = "Madeirinha";       
    }
    return level;
}

for (let i= 0; i < heros.length; i++) {
    const hero = heros[i];
    const level = setLevel(hero.xp);
    console.log(`The hero ${hero.name} level is ${level}`);
}
