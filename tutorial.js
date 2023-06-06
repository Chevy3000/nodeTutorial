const sum = (num1, num2) => num1 + num2;
const minus = (num1, num2) => num1 - num2;
class mathObject {
    constructor() {
        console.log("object created!")
    }
}
module.exports = { sum: sum, minus: minus, testing: mathObject }
