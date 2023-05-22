
function stringChanger(word, operation) {
    // Your code here
    if(operation==="capitalize") return word[0].toUpperCase() + word.slice(1)
    else if(operation==="uppercase") return word.toUpperCase()
    else if(operation==="double") return word + word
    else if(operation === "reverse") return word.split('').reverse().join('')
    else return word


    
}

// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

let score = 0;

if (stringChanger("foo", "capitalize") === "Foo") score++;
if (stringChanger("foo", "uppercase") === "FOO") score++;
if (stringChanger("foo", "double") === "foofoo") score++;
if (stringChanger("foo", "reverse") === "oof") score++;

if (stringChanger("foo", "unknown") === "foo") score++;

console.log("You have scored " + score + "/5 points.");