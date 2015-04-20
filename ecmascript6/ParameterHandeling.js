// default values
function func1(x, y = 'default') {
    retrun [x,y];
};

console.log(func1(1,2));
// [1,2]
console.log(func());
// [undefined, 'default']

// rest parameters
function func2(arg0, ...others) {

}

function func(...args) {
    for (let arg of args) {
        // ...
    }
}

// use destucturing and object literals for named parameters

selectEntries({ step: 2 });
selectEntries({ end: 20, start: 3 });
selectEntries();

function selectEntries({start=0, end=-1, step=1}) {
    // ...
}

// spread operator
Math.max(...[7,4,11]);
let x = [1, 2, 3];
let y = [4, 5, 6];
let z = [7, 8. 9];

let xyz = [...x, ...y, ...z];
// [1,2,3,4,5,6,7,8,9]