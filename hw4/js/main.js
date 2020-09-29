function createRandomArray(len, min, max) {
	return Array.from({length: len}, () => randomInt(min, max));
}

function createRandomTwoDemensionArray(cols, rows, min, max) {
    var res = []
    for (var i =0; i <= rows; i++) {
        res.push(createRandomArray(cols, min, max));
    }
    return res;
};

Array.prototype.swap = function(a, b) {
    var temp = this[a];
    this[a] = this[b];
    this[b] = temp;
 };

/*
[1, 2, 3, 4, 5, 6, 7] -> [2, 1, 4, 3, 6, 5, 7] В одномерном массиве произвести такую замену:
1 элемент поменять с 2
3 элемент поменять с 4
5 элемент поменять с 6 и тд Если массив непарный - последний элемент не трогать.
*/

var swapInArray = function() {
    const n = 11;
    const min = 0, max = 100;

    var arr = createRandomArray(n, min, max);
    console.log(arr, 'Original array');

    var lastPosition = n % 2 == 0 ? n - 1 : n - 2;
    for (var i = 0; i <= lastPosition; i += 2) {
        arr.swap(i, i+1);
    }
    console.log(arr, 'Result array');
}

/*
Создать двумерный массив, заполненный случайными числами в любом диапазоне.
Найти колонку, где сумма элементов наименьшая.
Найти колонку, где сумма элементов найбольшая.
*/

function columnSum(arr, col) {
    var res = 0;
    for (var i = 0; i < arr.length; i++) {
        res += arr[i][col];
    }
    return res;
}

var minMaxColumns = function () {
    const col = 5, row = 5;
    const min = 0, max = 100;

    var twoDimArray = createRandomTwoDemensionArray(col, row, min, max);
    console.log(twoDimArray, 'Original array');

    var colSums = []
    for (var i = 0; i < col; i++) {
        colSums.push(columnSum(twoDimArray, i));
    }
    console.log(colSums, 'Sum of columns');

    var minIdex = 0, minSum = colSums[0];
    var maxIndex = 0, maxSum = colSums[0];
    
    for (var j = 1; j < col; j++) {
        if (colSums[j] < minSum) {
            minIdex = j;
            minSum = colSums[j];
        }
        else if (colSums[j] > maxSum) {
            maxIndex = j;
            maxSum = colSums[j];
        } 
    }

    console.log(`Min sum is ${minSum} in ${minIdex+1} column`);
    console.log(`Max sum is ${maxSum} in ${maxIndex+1} column`);    
}
