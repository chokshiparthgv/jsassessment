const number = parseInt(prompt('Enter decimal number: '));

const result = number.toString(2);

function binary(bstr) { 
  return parseInt((bstr + '')
  .replace(/[^01]/gi, ''), 2);
}
document.write('decimal to binary' + ' ' + result);
document.write("\nBinary to decimal:");
document.write(binary(parseInt(prompt('Enter binary number:'))));