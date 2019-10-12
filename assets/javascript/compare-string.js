//Define all the letters
const letters = (() => {
    const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    return caps.concat(caps.map(letter => letter.toLowerCase()));
})();
console.log(letters);

//log the string
let string;

for (i = 0; i < string.length; i++) {
    if (letters.indexOf(string. [i]) >= 0
    }