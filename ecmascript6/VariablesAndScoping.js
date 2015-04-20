// function scope for var
function order(x, y) {
    if (x > y) {
        var tmp = x;
        x = y;
        y = tmp;
    }

    console.log(tmp === x)
    // true

    return [x, y];
}

// block scope for let and const
function orderLet(x, y) {
    if (x > y) {
        let tmp = x;
        x = y;
        y = tmp;
    }

    console.log(tmp === x)
    // ReferenceError:
    // tmp is not defined

    return [x, y];
}