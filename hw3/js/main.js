function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}

function createRandomArray(len, min, max) {
	return Array.from({length: len}, () => randomInt(min, max));
}

/*
1. Заполнить массив А случайными числами (диазпазон на ваше усмотрение). 
Заменить каждый элемент массива с нечетным индексом на ноль.
*/

var changeElements = function () {
	const n = 20;
	const min = 1, max = 100;

	var randomArray = [];

	for (var i = 0; i < n; i++) {
		randomArray[i] = (i % 2 === 0) ? randomInt(min, max) : 0;
	}
	console.log(randomArray, 'Result array');
};

/*
2. Заполнить массив размерностью n значениями с клавиатуры. Если введенное значение пользователя не число, 
или отрицательное значение, то запросить повторный ввод данных.
*/

var fillArrayFromKeyboard = function () {
	const n = 5;
	var arr = [];
	for (var i = 0; i < n; i++) {
		do {
			var num = prompt(`Please enter ${i+1} number`);
			num = num && +num.replace(',', '.');
		} while (!num || isNaN(num) || num < 0);
		arr.push(num);
	}

	console.log(arr, 'Result');
};

/*
3. Создать массив А размерностью n. Заполнить случайными числами любом диапазоне.
- Найти максимальное число и минимальное число.
- Элементы массива между min -- max записать в массив B.
*/

var minMaxInArray = function () {
	const n = 20;
	const min = 1, max = 100;

	var randomArray = [];

	/* 
    Требование в задаче написано неоднозначно, поэтому я исходил из предположения, что мы 
    должны взять значения между первыми встреченными минимальным и максимальным значениями 
    (так как они могут повторяться)
    */
	var minIndex = 0;
	var maxIndex = 0;
	for (var i = 0; i < n; i++) {
		randomArray[i] = randomInt(min, max);
		if (randomArray[i] < randomArray[minIndex]) minIndex = i;
		if (randomArray[i] > randomArray[maxIndex]) maxIndex = i;
	}

	console.log(randomArray, 'Original array');
	console.log(randomArray[minIndex], 'min', randomArray[maxIndex], 'max');

	var resultArray = (minIndex < maxIndex) ? randomArray.slice(minIndex + 1, maxIndex) : randomArray.slice(maxIndex + 1, minIndex);
	console.log(resultArray, 'Result Array');
};

/*
(** Доп) Перевернуть массив, т.е. если был массив 1, 5, 6, 2, 4 -- то мы должны получить 4, 2, 6, 5, 1. 
Нельзя использовать стандартный метод reverse(). Постарайтесь не использовать дополнительный массив.
*/

function reverseArray(arr) {
	var leftIndex, rightIndex = null;
	var len = arr.length;

	for (leftIndex = 0; leftIndex < len / 2; leftIndex++)
	{
		rightIndex = len - 1 - leftIndex;
		var temp = arr[leftIndex];
		arr[leftIndex] = arr[rightIndex];
		arr[rightIndex] = temp;
	}
	return arr;
}

var reversedArray = function () {
	const n = 11;
	const min = 1, max = 100;

	var randomArray = createRandomArray(n, min, max);
	console.log(randomArray, 'Original Array');
    
	var reversed = reverseArray(randomArray);
	console.log(reversed, 'Reversed Array');
};