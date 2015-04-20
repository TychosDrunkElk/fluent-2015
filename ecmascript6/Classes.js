class Person {
    constructor(name) {
        this.name = name;
    }

    describe() {
        return 'Person called' + this.name;
    }
}

class Employee extends Person {
    constructor(name, title) {
        super(name);
        this.title = title;
    }

    describe() {
        return super.describe + " " + this.title;
    }
}