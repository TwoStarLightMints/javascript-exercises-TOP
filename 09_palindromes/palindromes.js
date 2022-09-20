const palindromes = function (string) {
    let original = string.toLowerCase();
    let rev = ((original.split('')).reverse()).join('');

    if (string === rev) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
