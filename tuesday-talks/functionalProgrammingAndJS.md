# With Curry Cooking!

```javascript
var spices = [
    'cinnamon',
    // ...
]

var base = [
    // ...
]


```

use combination of functions to solve problems

```javascript
function printRecipe() {
    pick(1, base);
    pick(5), spices);
    // ...
}
```

*recipe captures input => output
    - no secret side effect
    - input should give same output

## Abstraction
art of organizing complexity
* a variable abstracts from a value
* a function abstracts from a sequence of statements
* higher order function abstracts from a function
    - takes a function as input, returns a function
    - can configure the higher order function with input function
* a module provides a set of function

## Functions
* focus on functions (and higher order functions) over statements
* can this be slow?
    - optimize developer time
### Closures
#### Curry
* function with n arguments -> curry -> n functions with one arguments each
```javascript
var a, b, c;
fCurry = function(a) {
    return function(b) {
        return function(c) {
            return console.log(a,b,c);
        }
    }
}

fCurry(a)(b)(c);
```

* Transform with map
* combine with reduce
* filter
###Composition
```javascript
function compose(g, f) {
    return f(g)
}
```


###monad pattern
* wraps and chains patterns
* extra layer of extraction to hide bookkeeping

