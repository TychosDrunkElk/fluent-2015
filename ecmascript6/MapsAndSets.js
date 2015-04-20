let map = new Map();

let obj = {};

map.set(obj, 123);
console.log(map.get(obj)); // 123
console.log(map.has(obj)); // true

map.delete(obj)
console.log(map.has(obj)); // false

for (let [key,value] of map) {
    console.log(key, value);
}

// WeakMaps for private data
let _counter = new WeakMap();
let _action = new WeakMap();

// weak maps have there keys garbage collected if its the only thing pointing to that key
// this will never leak memory even though these maps are not bound to the object
class Countdown {
    constructor(counter, action) {
        _counter.set(this, counter);
        _action.set(this, action);
    }

    dec() {
        let counter = _counter.get(this);
        if (counter < 1) return;
        counter--l
        _counter.set(this, counter);

        if (counter === 0) {
            _action.get(this)();
        }
    }
}
