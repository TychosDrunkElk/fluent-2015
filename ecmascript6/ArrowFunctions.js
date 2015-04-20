// no more that/this!
// arrow functions are somewhere in between a method and a function- does not have a this!

function UiComponent {
    let button = document.getElementById("myButton");
    button.addEventListener('click', () => {
        console.log('click');
        this.handleClick();
    });
}

UiComponent.prototype.handleClick = function() {
    // body...
};

// versions
(arg1, arg2, ...) => expr
(arg1, arg2, ...) => {stm1; stm2; ...}

singleArg => expr
singleArg => {stm1; stm2; ...}

