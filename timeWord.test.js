const convertToWords = require( './timeWord' );

describe('#timeword', ()=> {
  test('it is a function', ()=> {
    expect(typeof convertToWords).toBe('function');
  });
});


describe( 'Tests for timeWord application', ()=> {
  
  // Test 1 
  test( `Test 1:`, ()=> {
    expect( convertToWords( '17:45' )).toEqual( 'five forty five pm' );
    expect( convertToWords( '16:42' )).toEqual( 'four forty two pm' );
    expect( convertToWords( '09:16' )).toEqual( 'nine sixteen am' );
  });

  // Test 2 
  test( `Test 2: Error Handling`, ()=> {
    expect( ()=> convertToWords( '28:00' )).toThrow( 'Invalid Time Format' );
    expect( ()=> convertToWords( '56:00' )).toThrow( 'Invalid Time Format' );
    expect( ()=> convertToWords( '20:72' )).toThrow( 'Invalid Time Format' );
  });

  // Test 3 
  test( `Test 3: Edge Cases`, ()=> {
    expect( convertToWords( '00:00' )).toEqual( 'midnight' );
    expect( convertToWords( '12:00' )).toEqual( 'noon' );
    expect( convertToWords( '11:11' )).toEqual( 'eleven eleven am' );
  });
});


