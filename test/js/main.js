/*Массив [1, 2, 3, 4, 5] вывести на экран через разделитель ‘_’*/

var arr = [1, 2, 3, 4, 5];

console.log(arr.join('_'));

/*Организовать вывод массива [6,7,2,3,5,7] в виде списка, при помощи тегов ul-li*/

var arr2 = [6,7,2,3,5,7];
var res = '<ul>';
for (var i=0; i<arr2.length; i++) {
    res += `<li>${arr2[i]}</li>`;
}
res += '</ul>';

document.write(res);

/*В массиве [1,2,3,4,5,6] вырезать центральный элемент, если длина массива парная – вырезать два элемента, которые можно считать центральными
*/

var myArr = [1,2,3,4,5,6,7,8];

var len = myArr.length;
if (len % 2 == 0) { 
    myArr.splice(len/2-1,2);
}
else {
    myArr.splice(len/2,1);
}
console.log(myArr);

/*рганизовать циклический ввод с клавиатуры элементов, которые будут добавляться к существующему массиву A = [1,2,3] в конец. 
Предусмотреть символ прекращения ввода «&»*/

var enterElements = function() {
    var cycleArr = [];
    while (true) {
        var res = prompt('To stop enter ampersand');
        if (res === null || res === '&') break;
        cycleArr.push(res);
    }
    console.log(cycleArr);
}