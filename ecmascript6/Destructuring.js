// Construct

let jane = {};

jane.first = "jane";
jane.last = "doe";

// Destructuring
let obj = { 
    first: "jane", 
    last: "doe"
};

let { first: f, last: l } = obj;
// f = "jane", l = "doe"
// nice for paramater handeling!

// With Arrays
let [x,y] = ["a", "b"];

let [x,y, ...rest] = ['a', 'b', 'c', 'd'];
// x = 'a', y = 'b', rest=['c', 'd']

