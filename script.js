const hyperbole = ['toledo', 'movie time', 'blue smurfs', 'frostbite', 'beagles', 'space stations'];
const defeated = ['foiled', 'robbed', 'bamboozled', 'fooled', 'captured', 'blown out of the sky'];
const villains = ['the Joker', 'Penguin', 'Rupert Thorne', 'Bane', 'Catwoman', 'Ra\'s Al Ghul', 'Killer Kroc'];

const randomIntFromArr = (arr) => {
    randInt = Math.floor(Math.random() * arr.length);
    return randInt;
}

const holyMessageBatman = (hyperboleArr) => {
    const hyperbole = hyperboleArr[randomIntFromArr(hyperboleArr)];

    console.log(`Holy ${hyperbole}, Batman!`);
}

holyMessageBatman(hyperbole);