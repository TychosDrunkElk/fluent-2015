@housecor

Overview of webcomponents standard (no syntactic sugar like polymer or xtags)

# Web developers have problems
### No native templates
### Undescriptive markup
### no style and DOM encapsulation
### no bundling
### no component standard
* requires a framework shift if we want to share components
* we have to rewrite code

# Templates
* Inert, reusable markup
* already use these
* how do we do this in html?
## Common template approaches
1. HTML in script tags
    ```html
    <script type="text/custom-name-here">
    ```
    * nothing inside runs or renders
    * but css risk from .innerHTML
2. Hidden DOM elements
    ```html
    <div style="display:none"></div>
    ```
## <template> tag- the standard!
* Inert - Does nothing
* Won't load assets until cloned and inserted
* cannot be traversed
* not truly in the dom until you place it
* can be placed anywhere!
* can inject data into templates
* no native data interpolation logic, but its just DOM! can be used with other things

# Custom Elements
* problem: seas of divs. div soup!
* using class names and ids instead
## descriptive markup
* conveys additional info
* improves seo
* enhances accessibility
* speeds development
* aids maintenance
## Define our own elements!
    - name must have a dash (-)
    - any new tag that comes out in any spec, tags will never have a dash
    - name without dash will be treated as an unknown element
* extend exisiting elements
    - extend button with uber-button
        ```html
        <button is="uber-button"></button>
        ```
## Register an element
```html
var slickTabs = document.registerElement('slick-tabs');
document.body.appendChild(new slickTabs());
```
```html
var superTextArea = document.registerElement('super-textarea', {
    prototype: Object.create(...)
});
```
## ways to instantiate
* markup
* new operator
* create element
* innerhtml
* all this is the same as any html tags

## lifecycle callbacks
* createdCallback
* attachedCallback
* detachedCallback
* attributeChangedCallback(attributeName, oldValue, newValue)
    - this is how elements behave when edited in dev tools

## What level of abstraction?
Any. depends on use case

# shadow DOM
* Encapsulated markup and styling
## Problem: no style and dom encapsulation
Q: style tag scope?
* shadow dom is similar to iframe or canvas


# Imports
* bundle html, js, and css in one line
## <import> tag
* bundles html css and js!

#crossbrowser
* webcomponents.js
    - goes back to ie10
* polymer
    - syntactic sugar on top of webcomponents
    - no shadow dom :(
    - bitnative.com/handouts
    
