// random arr bez powtórzeń 
let arr = [];
while (arr.length <= 6) {

    let randomNumber = Math.floor(Math.random() * 49);
    if (arr.indexOf(randomNumber) === -1) {
        arr.push(randomNumber);
    }
}

console.log(arr);