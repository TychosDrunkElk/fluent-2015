https://developer.mozilla.org/en-US/docs/Web/JavaScript

https://github.com/rwaldron/idiomatic.js/

http://www.ecma-international.org/ecma-262/5.1/ (read this!)

https://github.com/tc39/ecma262

Double equals operator
=======================
The Abstract Equality Comparison Algorithm (11.9.3 in specs)
* if types are the same, then this is the same as ```===```
* ```null``` and ```undefined``` are coerced to the same value

Values & Types
=======================
Primitive Types
-----------------------
* undefined
    - undeclared is different than undefined
* string
* number
* boolean
* object
* *function*
* *null*
    - typeof null; //"object"
    - this is a bug, but cant be fixed because it breaks too much stuff
* variables do not have types, values do

### special values
* NaN ("not a number")
    - 
    ```javascript
    var a = "a"/2;
    a;            // NaN
    typeof a;     // "number"
    isNaN(a);     // true
    isNaN("foo"); // true !!
    a === a       // false

    // With es6
    if (!Number.isNaN) {
        Number.isNaN = function(num) {
            return num !== num
        }
    }
    ```
* Infinity, -Infinity
* null
* undefined (void, to get undefined value)
* +0, -0
    - 
    ```javascript
    var foo = 0 / -3;
    foo === -0;
    foo === 0;
    0 === -0;
    (0/-3) === (0/3)

    foo;
    ```

* es6 Object.is
    - super strict equals
    - does not lie about -0 or NaNs


Natives
-----------------------
* String, Number, Boolean, Function, Object, Array, RegExp, Date, Error
* what to call these?
    - native types? native objects? native functions? native constructors?
    - these are weird! heres why:
    ```javascript
    var foo = new String("foo")
    foo
    // String {0: "f", 1: "o", 2: "o", length: 3, [[PrimitiveValue]]: "foo"}
    var bar = new Number(3)
    bar
    // Number {[[PrimitiveValue]]: 3}
    ```
* so don't use new!
* new array with 1 arg creates an array of that size, new array with multi args creates an array with those args :(
* new can be useful with creating a dynamic regular expression
* need to use new with Date

Coercion
-----------------------
###Abstract operations
*specification, not the functions*

* ToString
    - can use toString method though
    - array conversions are weird
    - objects are worse (always [object Object])
* ToNumber
    - "" => 0
    - "0" => 0
    - "-0" => -0
    - " 009 " => 9
    - "3.14159" => 3.14159
    - "0." => 0
    - ".0" => 0
    - "." => NaN
    - "0xaf" => 175
    - false => 0
    - true => 1
    - null => 0 //!
    - undefined => NaN //!
    Q: array of single number?
    ```js
        +[1,2,3]
        // NaN
        +[1]
        // 1
    ```
* ToBoolean
    * truthy and falsey
    * spec only defines falsey values
* ToPrimitive
    - valueOf() first
    - fallsback to toString()

### Explicit and 
* Explicit: obvious that conversion is happening
* string <---> Numbers
    - Explicit:
        * parseInt()
        * Number
    - Implicit (this is mostly opinion)
        * +, like ```+[1]```
* Boxing
    - creates objects for primitive types so native functions work!
    - this is why implicit conversion/coercion is great!
* \* <---> Boolean
    - ```Boolean(foo);```
    - ```!!foo;```
    - ```foo ? true : false; // doing an implicit conversion for explicit conversion- bad!!```
    - probably never a good idea to use == for boolean comparisons, confusing
        -
        ```javascript
        var foo = "123";
        if (foo == true) { //False! true is coerced into a number
            alert("WAT")
        }

        foo = [];
        if (foo) { // yes
            alert("sure");
        }
        if (foo == false) { // also yes???
            alert("WHAT")
        }
        ```
* Implicit coercions
    - math operators will coerce to number
    - 
    ```javascript
    var baz = 456;
    var foo = baz + "";
    foo;   // "456"
    foo = baz - "";
    foo; // 456 - what?
    ```

Surprises
-----------------------
* root of all coercion evil comes from "" to Number (0)
* [] == ![]
* when to use ===
    - can either value be true or false?
    - can either value ever be [], "", or 0?
* == allows coercion, === disallows coercion
    - == does more work!

http://davidwalsh.name/fixing-coercion

http://getify.github.io/coercions-grid/

http://jsperf.com/triple-equals-vs-double-equals/

TL;DR- Use explicit coercion where its safer, use implicit coercion where its more helpful
