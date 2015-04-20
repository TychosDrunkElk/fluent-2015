if (x > MAX) {
    throw new Error(
        `At most ${MAX} allowed: ${x}!`
    )
}


function tagFunction(stringArray, args) {
    // ...
}

// so this...
tagFunction`Hello ${first} ${last}!`
// is the same as this...
tagFunction(['Hello', ' ', '!'], first, last);

