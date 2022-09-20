const removeFromArray = function(array, ...remove) {
    
    for (let i = 0; i <= remove.length - 1; i++) {
        let arrayInd = array.indexOf(remove[i]);

        if (arrayInd !== -1) {
            array.splice(arrayInd, 1);
        }
    }
    console.log(array);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
