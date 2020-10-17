/*
1. Написать функцию заполнения массива. Имя произвольное.
*/

function createRandomArray(len, min, max) {
	return Array.from({length: len}, () => randomInt(min, max));
}

/*
написать функцию, которая примет как аргумент(параметр) два массива и сравнить суммы всех ЧИСЛОВЫХ элементов. 
Тот массив, сумма которого большая - должен вернутся функцией.
*/

var compareArrays = function(arr1, arr2) {

    var sum1 = 0, sum2 = 0;
    var len1 = arr1.length;
    var len2 = arr2.length;
    var maxLen = len1 > len2 ? len1 : len2;

    for (var i = 0; i < maxLen; i++) {
        // тут так и не смог избавится от значения "true". 
        // Как заставить его не приводить boolean к number?
        if (i < len1) sum1 += !isNaN(arr1[i]) && +arr1[i];
        if (i < len2) sum2 += !isNaN(arr2[i]) && +arr2[i];
    }

    // В требованиях ничего не сказано про равенство, поэтому реализовал через возвращение первого
    return sum1 >= sum2 ? arr1 : arr2;
}

/*
3. Написать функцию doMath(x, znak, y), которая получает 3 аргумента: 
числа x и y, строку znak. 
В переменной знак может быть: +, -, *, /, %, ^. 
Вывести результат математического действия, указанного в переменной znak.
*/

var calculator = function(a, znak, b) {

    var regex = /^[%\^*+=\/._-]{1}$/g

    if (!regex.test(znak)) throw 'Incorrect operation';

    switch (znak) {
        case ('+'): return a + b;
        case ('-'): return a - b;
        case ('*'): return a * b;
        case ('/'): {
            if (b !== 0) return a / b;
            else throw 'Division by zero is not possible';
        }
        case ('%'): return a % b;
        case ('^'): return a ** b;
        default: throw 'Incorrect operation';
    }
}

/*
4. Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом.
*/

var removeChars = function (text, arr) {
    var len = arr.length;
    var res = text;
    for (var i = 0; i < len; i++) {
        regexp = new RegExp(arr[i], 'g');
        res = res.replace(regexp, '');
    }
    return res;
}

/*
5. напиши функцию filter, которая принимает функцию-предикат и массив. Возвращает она массив значений, для которых предикат вернет true.
*/

var filter = function(arr, func) {
    var res = [];
    var len = arr.length;

    for (var i=0; i<len; i++) {
        var j = arr[i];
        if (func(j)) res.push(j);
    }

    return res;
}