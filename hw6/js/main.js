/*
1. Вывести в консоль последовательность чисел в обратном порядке, используя рекурсивный вызов функиции
row (5) // 5 4 3 2 1
*/

var row = function (x) {
    if (x === 0) return true;
    console.log(x);
    row(x-1);    
}


/*
2. Написать рекурсивную функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:
sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
*/

var sumTo = function(x) {
    if (x === 0) return 0;
    return x + sumTo(x-1);
}

/*
3. Написать функция factorial(n) - которая при помощи рекурсии будет считать значение факториала числа n!
*/

var factorialRecursive = function(x) {
    if (x === 0) return 1;
    return x * factorialRecursive(x-1);
}

/*
Cоздать конвертер-функцию которая получает на вход массив вида: 
mass = [[1,2,3, [3.1]], 4, [5,6, [7, 8]]]; а на выходе получим переобразованый массив: [1,2,3,3.1,4,5,6,7,8]
*/

var convertor = function(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(convertor(val)) : acc.concat(val), []);
}