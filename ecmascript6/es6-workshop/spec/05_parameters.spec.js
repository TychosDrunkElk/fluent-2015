jest.autoMockOff();

describe('Default Values', () => {
  it('can be triggered when the incoming argument is undefined', () => {

    function test(name = "Mercury") {
      return name;
    }

    expect(test("Aaron"))   .toBe("Aaron");
    expect(test(undefined)) .toBe("Mercury");
    expect(test(null))      .toBe(null);
    expect(test())          .toBe("Mercury");

  });

  it('aren\'t included in arguments', () => {

    function test(name = "Mercury") {
      return arguments.length;
    }

    expect(test("Aaron"))   .toBe(1);
    expect(test(null))      .toBe(1);
    expect(test())          .toBe(0);

  });

  it('can trigger a function call', () => {
    let triggerCount = 0;

    function test(name = getDefault()) {
      return name;
    }

    function getDefault() {
      triggerCount++;
      return 'Mercury';
    }

    expect(triggerCount)    .toBe(0/*ENTER YOUR GUESS HERE*/);
    expect(test("Aaron"))   .toBe("Aaron"/*ENTER YOUR GUESS HERE*/);
    expect(test())          .toBe("Mercury"/*ENTER YOUR GUESS HERE*/);
    expect(test(null))      .toBe(null/*ENTER YOUR GUESS HERE*/);
    expect(test(undefined)) .toBe("Mercury"/*ENTER YOUR GUESS HERE*/);
    expect(triggerCount)    .toBe(2/*ENTER YOUR GUESS HERE*/);

  });

});

describe('Rest Parameters', () => {

  it('catch non-specified params', () => {

    function resty(first, second, ...others){
      return others;
    }

    expect(resty().length).toBe(0/*ENTER YOUR GUESS HERE */);
    expect(resty(1).length).toBe(0/*ENTER YOUR GUESS HERE */);
    expect(resty(1,2).length).toBe(0/*ENTER YOUR GUESS HERE */);
    expect(resty(1,2,3).length).toBe(1/*ENTER YOUR GUESS HERE */);
    expect(resty(1,2,3, undefined, 5, undefined, 7, undefined, 9, 10).length).toBe(8/*ENTER YOUR GUESS HERE */);

  });

  xit('has a different length than `arguments`', () => {

    function resty(first, second, ...others){
      return others.length == arguments.length;
    }

    expect(resty()).toBe(true/*ENTER YOUR GUESS HERE*/);
    expect(resty(1)).toBe(false/*ENTER YOUR GUESS HERE*/);
    expect(resty(1,2).length).toBe(/*ENTER YOUR GUESS HERE*/);
    expect(resty(1,2,3).length).toBe(/*ENTER YOUR GUESS HERE*/);
    expect(resty(1,2,3, undefined, 5, undefined, 7, undefined, 9, 10).length).toBe(/*ENTER YOUR GUESS HERE*/);
  });

  it('is an actual array, unlike arguments', () => {

    function resty(...args){
      return args;
    }

    function argy(){
      return arguments;
    }

    var args = argy(1,2,3);
    var rests = resty(1,2,3);

    //
    expect(args.__proto__ == rests.__proto__) .toBe(false/*ENTER YOUR GUESS HERE*/);
    expect(args.splice)                       .toBeUndefined(/*ENTER YOUR GUESS HERE*/);

    expect(rests.__proto__)                   .toEqual(Array.prototype/*ENTER YOUR GUESS HERE*/);
    expect(rests.splice)                      .toBeDefined();
    expect(rests.splice)                      .toEqual(Array.prototype.splice);

  });


  describe('EXTRA CREDIT', ()=>{

    /*
      EXTRA CREDIT
      Comment this back in, and see if you can get it to pass
    */

    it('it can default all arguments, optionally', () => {

      //Modify the method signature of `myFunction` to allow for all args to be optional

      function myFunction({name="Freddie", age=49, favoriteBand=true}={}){
        expect(name).toBeDefined();
        expect(age).toBeDefined();
        expect(favoriteBand).toBeDefined();
      }

      myFunction({ name: 'Axel', age: 37, favoriteBand: 'Taylor Swift' });
      myFunction({ name: 'Axel', age: 37 });
      myFunction({ name: 'Axel' });
      myFunction({});
      myFunction();

    });
  })

});