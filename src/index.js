module.exports = function toReadable(number) {
  let str = '';
  const num = number;
  const firstDegree = num % 10;
  const secondDegree = ((num % 100) - firstDegree) / 10;
  const thirdDegree = (num - secondDegree * 10 - firstDegree) / 100;

  const arr0First = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const arr1First = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const arrSecond = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  const arrStr = [];

  if (thirdDegree !== 0) {
    arrStr.push(`${arr0First[thirdDegree]} hundred`);
  }
  if (secondDegree !== 0) {
    if (secondDegree !== 1) {
      arrStr.push(arrSecond[secondDegree]);
      if (firstDegree !== 0) {
        arrStr.push(arr0First[firstDegree]);
      }
    }
    if (secondDegree === 1) {
      arrStr.push(arr1First[firstDegree]);
    }
  } else if (firstDegree !== 0) {
    arrStr.push(arr0First[firstDegree]);
  }
  if (thirdDegree === 0 && secondDegree === 0 && firstDegree === 0) {
    arrStr.push(arr0First[0]);
  }

  str = arrStr.join(' ');
  return str;
};
