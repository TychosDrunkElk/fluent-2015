let obj = {
    myFunc() {
        // ....
    },
    ['foo' + 'o']: 123,
    [propKey]() {
        return 'hi';
    },
    // key is a symbol
    [symbol, iterator]() {
        // ...
    }
}