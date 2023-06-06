const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
const readline

eventEmitter.on('tutorial', (num1, num2) => {
    console.log(num1 + num2);
});

eventEmitter.emit("tutorial", 3, 4);


class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let bhavin = new Person('Bhavin');
let siobhian = new Person('Siobhian');
siobhian.on("namae", () => {
    console.log("my name is " + siobhian._name);
});
bhavin.on('namre', () => {
    console.log("my name is " + bhavin._name);
});

bhavin.emit('namre');
siobhian.emit('namae');