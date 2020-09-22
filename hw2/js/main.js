/*
1. Реализовать скрипт согласно схеме: 
https://github.com/hillel-front-end/front-end-pro-2020-september/raw/master/lections/lection_2_if_else_loops/homework/schema.png
*/
var login = function() {
	const username = 'admin';
	const password = 'DarkLord';

	var user = prompt('Enter an username');
	if (user && user === username) {
		var pass = prompt('Enter a password');
		if (pass === password) {
			alert(`Welcome, ${user}`);
		}
		else if (pass) {
			alert('The user name or password is incorrect');
		}
		else {
			alert('Login is canceled');    
		}
	}
	else if (user) {
		alert('You have no permission to login');
	}
	else {
		alert('Login is canceled');
	}
};

/*
2.1 Ораганизовать перебор чисел от 1 до 150.
2.2 Посчитать сумму всех чисел
2.3 Посчитать сумму чётных чисел.
*/

var sumNumbers = function (maxNum, divider = 1) {
	var sum = 0;
	for (var i = 1; i <= maxNum; i++) {
		if (i % divider == 0) 
			sum += i;
	}
	return sum;
};

var sumNum = function () {
	var maxNum = 150;
	alert(`Sum of all numbers up to ${maxNum} is ${sumNumbers(maxNum)}`);
	alert(`Sum of all even numbers up to ${maxNum} is ${sumNumbers(maxNum, 2)}`);
};

/*
3. "Заставить" пользователя ввести с клавиатуры число. Просить пользователя ввести число до тех пор, пока мы не получим число.
*/

var numericPrompt = function() {
	var res = null;
	while (!res || isNaN(res)) {
		res = prompt('Please enter a number');
		res ? res = res.trim() : null;
		if (res === null) return null;
		else if (res && !isNaN(res.replace(',', '.'))) {
			return +res;
		}
		else {
			alert('This is not a number. Please try again');
		}
	}
};


/*
4. Посчитать факториал n!, где n - ввести с клавиатуры.
`Например: факториал числа 5! == 120, вычисляется так: 1 * 2 * 3 * 4 * 5 = 120/
*/

var fact = function (num) {
	var res = 1;
	if (num) {
		for (var i = 1; i <= num; i++) {
			res *= i;
		}
		return res;
	}
	else if (num === 0) return 1;
};

var factorial = function () {
	var num = numericPrompt();
	if (num === null) return;
	else if(Number.isInteger(+num)) {
		alert(`Factorial of '${num}' is ${fact(num)}`);
	}
	else {
		alert('Factorial can be calculated only for integers');
	}
};

/*
5. (**Доп. задание делать не обязательно) Проверить число на простоту. Число вводить с клавиатуры.
(Простым числом называются числа имеющие два делителя: единицу и само число)
*/

var isPrime = function () {
	var num = numericPrompt();
	if (num === null) return;
	else if (!Number.isInteger(+num)) {
		alert('Number is not an integer');
		return;
	}
	else if (num == 2) {
		alert(`Number ${num} is prime`);
	}
	else if (num > 2) {
		var i = 2;
		var limit = Math.sqrt(num);
		while (i <= limit) {
			if (i > 3 && (i % 2 == 0 || i % 3 == 0)) {
				i += 1;
				continue;
			}
			if (num % i == 0) {
				alert(`Number ${num} is composite. Found divider is ${i}`);
				return;
			}
			i += 1;
		}
		alert(`Number ${num} is prime`);
	}
	else {
		alert('Number should be greater than 1');
	}
};

/*
(Доп) Ввести с клавиатуры 2 числа a и b (где a < b). Запустить цикл перебора от a до b. Вывести в консоль квадраты чётных чисел.
*/

var squareEven = function () {
	var a = numericPrompt('Enter first number');
	var b = numericPrompt('Enter second number');
	if (a >= b) {
		console.log('First number must be lower then second one');
	}
	else {
		var arr = [];
		for (var i = parseInt(a); i <= b; i++) {
			if (i % 2 == 0) {
				arr.push( i ** 2 );
			}
		}
		console.log(arr);
	}
};

/*
7. (Доп) Нарисовать квадрат http://prntscr.com/ull1y4
*/

var drawSquare = function () {
	var len = parseInt(numericPrompt('Enter side lenth'));
	var square = '';
	for (var i = 0; i < len; i++) { 
		let row = '';
		for (var j = 0; j < len; j++) { 
			if (j == 0 || j == len-1) row += '*';
			else if (i == 0 || i == len-1) row += '*';
			else row += ' ';
		}
		square += row + '\n';
	}
	console.log(square);
};	

/*
8. (Доп) Вывести n чисел из ряда Фибоначчи, где n - вводится с клавиатуры
*/

var fibonacci = function () {
	var len = parseInt(numericPrompt('Enter side lenth'));
	var arr = [];
	for (var i=0; i <= len; i++) {
		if (i == 0 || i == 1) arr.push(i);
		else {
			arr.push(arr[i-1] + arr[i-2]);
		}
	}
	console.log(arr);
};