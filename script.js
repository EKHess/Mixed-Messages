const hyperbole = ['toledo', 'movie time', 'blue smurfs'];

const randomIntFromArr = (arr) => {
    randInt = Math.floor(Math.random() * arr.length);
    return randInt;
}

const holyMessageBatman = (hyperboleArr) => {
    const hyperbole = hyperboleArr[randomIntFromArr(hyperboleArr)];

    console.log(`Holy ${hyperbole}, Batman!`);
}

holyMessageBatman(hyperbole);