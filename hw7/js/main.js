/*
1. Создать объект с такой структурой: obj = { a: 10, b: 12, c: { f: 13, g: { m: 20} } } 
Написать функцию convert(obj), он получает аргументом obj. 
Функция должна вернуть новый объект: newObj = { a: 10, b: 12, f: 13, m: 20 }
*/

var obj = { a: 10, b: 12, c: { f: 13, g: { m: 20} } }

/* Функцию делал из предположения, что у нас в качества значений будут только примитивы и другие объекты.
С массивами будет работать не как ожидается. Null и undefined игнорируются
Надеюсь правильно понял условие, если нет - переделаю
*/

var flatObject = function(obj) {
    var res = {};

    var flat = function(obj) {
        for (key in obj) {
            if (obj[key] && typeof(obj[key])!=='object')
             res[key] = obj[key];
            else {
                flat(obj[key]);
            }
        }        
    }
    flat(obj);
    
    return res;
}

/*
2. 
Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 обьекта и возвращает новый,
который состоит из свойство обоих обьектов (склеить). Если свойство повторяется, то взять значение второго обьекта
assignObjects({ x: 10, y: 20 }, { z: 30 }) -> { x:10, y:20, z: 30 }
assignObjects({ x: 10 }, { x: 20, y: 30 }) - > { x:20, y: 30 }
*/
objct1 = { x: 10, y: 20, a: 15 };
objct2 = { x: 20, y: 30, z: 50 };
objct3 = { c: 20, d: 30, z: 80 };

var assignObjects = function(obj1, obj2) {
    for (key in obj2) {
        obj1[key] = obj2[key];
    }
    
    return obj1
}

/*
3. Адаптировать функцию assignObjects() под неопределенное количество объектов. assignObjects(obj1, obj2, ....., objn);
*/

var assignAllObjects = function() {
    var res = arguments[0];
    for (var i = 1; i < arguments.length; i++)
    {
        var obj = arguments[i];
        for (key in obj) {
            res[key] = obj[key];
        }
    }

    return res;
}
