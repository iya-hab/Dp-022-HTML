
let str = prompt('Enter the alphabetic characters and/or numeric digits.');

function calcDupl(str) {
  let array = str.toLowerCase().split('');

  let arrayDuplucates = array.reduce((accumulator, currentValue) => {
      let result = accumulator;
      let filteredArray = array.filter((sym) => currentValue === sym);
      let isDistinct = filteredArray.length === 1;

        if (isDistinct === false) {
          result = accumulator.filter((item) => item !== currentValue);
          result.push(currentValue);
        }

        return result;
    }, []);

    let duplicatesCount = arrayDuplucates.length;

    return duplicatesCount;
}

alert(calcDupl(str));

// console.log(calcDupl('aabbcde'));
// console.log(calcDupl('aabBcde'));
// console.log(calcDupl('indivisibility'));
// console.log(calcDupl('Indivisibilities'));
// console.log(calcDupl('aA11'));
// console.log(calcDupl('ABBA'));



// let str = prompt('Enter the alphabetic characters and/or numeric digits.');
// let counts = {}; // {} - объявление объекта
// let symbol, i, count;
// let len = str.length; // длина строки


// for (i = 0; i < len; i++) {
//   symbol = str[i];
//   symbol = symbol.toLowerCase();
//   count = counts[symbol];
//   counts[symbol] = count ? count + 1 : 1;
// } 

// for (symbol in counts) {
//   if (counts[symbol] > 1){
//   alert('Символ "' + symbol + '" повторяется "' + counts[symbol] + '" раз/а.');
// }
// }