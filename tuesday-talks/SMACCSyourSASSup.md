## "CSS is easy"
* easy to write
* hard to write well

## Modular css
* focus on modules instead of pages
    - small pieces
    - independent
    - portable

* navigation, tabs, tables, lists, breadcrumbs...
* tiny bootstraps
* MVCSS, BEM, OOCS, Suit...

## SMACCS
* scalable and modular architecture for css
* increase semantic value of html
* decrease assumptions of what that html has to look like
* not a framework
* best practices
### categorization
* base
    - resets
    - default styles (html, body a, h1)
* layout
    - grid system
    - header
    - sidebar
    - no presentation!!
* modules
    - bulk of css
    - content patterns
* states
    - modules in various states
    - hover, disabled, collapsed vs expanded
* themes
    - modules in various contexts
### naming conventions
* base
    - straight tags
* layout
    - layout-*
    - l-*
* modules
    - <name>
    - should be abstract enough to be moveable
    - specific enough to know what it is
    - sub-modules
        * button-seccondary, for example
* state
    - is-<state>
* theme
    - theme-<theme name>
    - OR use SASS (TB)
### depth of applicability
* the more you nest, the more dependent your css is on the html markup
* focus on naming conventions
* use class selectors instead of html elements or ids
* use child selectors sparingly and only inside modules

## SMACCS with SASS
* the almighty &
```css
.btn {
    &:hover {
        // ...
    }
}
```
    - use &- or &_
    ```css
    .btn {
        &-secondary {
            // ...
        }
    }
    ```
* follow inception rule- never go more than 3 levels deep
    - but not as important with &-, &_. will output less classes
* use extends so you dont have to have multiple classes
    - dont extend between modules
    - use helpers if you have to
    - use %
* file structure
* http://csswizardry.com/2013/04/shame-css/

@minamarkham
