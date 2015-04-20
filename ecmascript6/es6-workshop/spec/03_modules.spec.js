//WRITE YOUR IMPORT STATEMENTS HERE
import myMathy from '../common/Mathy';
import Mathy from '../common/Mathy';

// similar to destructuring, but not really destructuring
import {sqrt as mySqrt, square as mySquare} from '../common/Mathy';
import _ from 'lodash';



jest.autoMockOff();

describe('ES6 Modules', () => {
  it('can import Mathy', () => {

    //I DID THIS ONE FOR YOU!
    expect(Mathy.sqrt).toBeDefined();
    expect(Mathy.square).toBeDefined();
    expect(Mathy.diag).toBeDefined();
  });


  it('Can alias the import name', () => {

    //Import `Mathy as myMathy` to ge these tests to pass.
    //NOTE: All import statements have to be done at the top of the file

    expect(myMathy).toBeDefined();
    expect(myMathy.sqrt).toEqual(Mathy.sqrt);
    expect(myMathy.square).toEqual(Mathy.square);
    expect(myMathy.diag).toEqual(Mathy.diag);
  });

  it('can destructure the import, to only retain pieces of the import', () => {

    //Import `Mathy` again, but pull out only the `sqrt` as mySqrt, and `square` as mySquare
    //NOTE: All import statements have to be done at the top of the file

    expect(mySqrt).toBeDefined();
    expect(mySquare).toBeDefined();
    expect(mySqrt).toEqual(Mathy.sqrt);
    expect(mySquare).toEqual(Mathy.square);
  });

  it('can import from my node_modules', () => {

    //import `lodash`
    //NOTE: All import statements have to be done at the top of the file

    expect(_).toBeDefined();

  });
});