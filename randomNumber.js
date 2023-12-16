//Q#-5
//a, b
function random(number) {
    return Math.floor(Math.random() * number);
}

//c
const randomNumber = random(100);
console.log(randomNumber);
//d
module.exports.random = random;



