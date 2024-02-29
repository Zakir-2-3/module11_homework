// Задание 1

// В прошлом модуле в юните «Циклы» вы выполняли следующее задание:
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и знаки, например null и так далее.
// На этот раз оформите решение в виде функции: постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 's', null, true, NaN, undefined];

function quantityElementsType() {
  let evenNum = 0;
  let oddNum = 0;
  let zeroNum = 0;

  arr.forEach(function (item) {
    if (item === 0 || typeof item !== 'number' || isNaN(item)) {
      zeroNum++;
    } else if (typeof item === 'number' && !isNaN(item)) {
      if (item % 2 === 0) {
        evenNum++;
      } else {
        oddNum++;
      }
    }
  })
    console.log('Четных чисел: ' + evenNum);
    console.log('Нечетных чисел: ' + oddNum);
    console.log('Остальных элементов (учитывая цифру 0): ' + zeroNum);
}
quantityElementsType();
