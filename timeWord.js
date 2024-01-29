// Convert string of hours into words 

/* 
    - Will always be given a string of two digits 00 - 23 ( Hours ) || 00 - 59 ( Minutes ) 
    - H ( 0 - 11 ) is am || H ( 12 - 23 ) is pm 

*/
const time = '10:10';
const time2 = '02:27';
const time3 = '17:59';
const time4 = '11:31';
const time5 = '23:59';

function convertToWords( string ){

  const hours = [ 'midnight', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'noon', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven' ];
  const minutes = [
    '', 'oh one', 'oh two', 'oh three', 'oh four', 'oh five', 'oh six', 'oh seven', 'oh eight', 'oh nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
    'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven',
    'twenty eight', 'twenty nine', 'thirty', 'thrity one', 'thirty two', 'thirty three', 'thirty four', 'thirty five',
    'thirty six', 'thirty seven', 'thirty eight', 'thirty nine', 'forty', 'forty one', 'forty two', 'forty three', 
    'forty four', 'forty five', 'forty six', 'forty seven', 'forty eight', 'forty nine', 'fifty', 'fifty one', 'fifty two',
    'fifty three', 'fifty four', 'fifty five', 'fifty six', 'fifty seven', 'fifty eight', 'fifty nine' ];
  
  const [ h, m ] = string.split( ':' ).map( Number );
  const meridiem = h < 12 ? 'am' : 'pm';
  const twelveHour = h % 12 || 12;

  const hWord = hours[ twelveHour ];
  const mWord = minutes[ m ];
  console.log( hWord );
  console.log( mWord );

  if ( m === 0 ){
    return h === 12 ? 'noon' : 'midnight';
  }

  return `${ hWord } ${ mWord } ${ meridiem }`
}

convertToWords( time );
convertToWords( time2 );
convertToWords( time3 );
convertToWords( time4 );
convertToWords( time5 );
