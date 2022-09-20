const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof(num1) !== "number" || typeof(num2) !== "number") {
        return "ERROR";
    }

    let sum = start = end = 0;

    if (num1 > num2) {
        start = num2;
        end = num1;
    } else {
        start = num1;
        end = num2;
    }

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
