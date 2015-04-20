es harmony: es6 + es7

Goals of ES6
===============
* make js better for complex apps
* for libraries (including the DOM)
* better target for code generators
    - see asmjs
    - benifits of bytecode and js

How to upgrade a web language
===============
* don't break the web
* don't break engines 
    - no js engine fully supports es6. wait, or use transpilers

Overview of features
===============
Better syntax
---------------
* classes
* modules

Better SL
---------------
* new methods
* promisies
* maps and sets

New features
---------------
* generators
* Proxies
* WeakMaps

Using ES6 today
===============
* spec is done!
* features are being added to current engines
* https://kangax.github.io/compat-table/es6/ for all available features

ES6 tools
==============
transpiler
--------------
* typescript
* traceur
* babel

package manager
---------------
* npm
* bower
* jspm

Linter
--------------
* jslint
* jshint
* eslint
* jscs

shims
-------------
* core.js
* es6-shim

mdoule system
-------------
* requirejs
* browserify
* webpack
* systemjs
* .....

Features!
=============

* let is the new var (but replace with care)
    - let: you can only reference a variable after its been declared

* all modules are explicitly strict
* can use arrow functions in object literal for a collection of callbacks (but no this, so not as usefull)

Why use classes?
================
* make code more portable
* tool support
* fondation for immutable objects, value objects, traits (like mixins!)
* subclassing built in
* help the newbies

~BUT~
---------------
* syntax different form semantics
* based on constructors, not prototype chains

Template literals vs Templates
===============
* different:
    - web templages (data): html with blanks to be filled in
    - template literals: fancy way of writting function calls

Iteration and loops
====================
* plain objects are not iteratble data sources

iterating constructs
------------
* destructuring via array apattern
* for-of (replaces for-in, array forEach)
* Array.from()- converts array like object to array
* spread operator
* promises 
* yeilds

Transpilers!
=======
cant use:
* proxies
* sublasses built in contructors
* tail call opt

things that are hard:
* symbols via objects
* generators (like state machines)
* weak maps weak sets (keys stored in values)

Check out Babel (surprisingly complete)

