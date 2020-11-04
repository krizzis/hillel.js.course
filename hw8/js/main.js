/*
1)Задан обьект с любым количеством свойств. Одно из свойств является функция renderObject(), которая описана в window. 
При вызове метода obj.renderObject() -> выводит в document всё содержимое объекта, кроме самого метода renderObject

    obj => { x:10, y: 20 }
    obj.renderObject() -> x:10, y: 20
*/

var renderObject = function(){
    var res = Object.assign(this, {});
    delete res.renderObject;
    document.write(JSON.stringify(res));
}

var rObj = {
    renderObject: renderObject,
    x: 10,
    y: 20
}

/*
Реализовать объект с методами m1(), m2(), m3(). Должна быть возможность выполнять подобный код:

 obj.m1().m2().m3();
 obj.m2().m1().m3();
 obj.m2().m1().m3().m1().m1();
 ...
*/

var obj = {
    m1: function() {
        console.log('m1');
        return this
    },
    m2: function() {
        console.log('m2');
        return this
    },
    m3: function() {
        console.log('m3');
        return this
    }
}

/*
в обьекте data существует метод addRecord, который аргументами получает любой набор объектов. 
Метод addRecord добавляет все свойства переданных объектов в data.
*/

var data = {
    addRecord: function() {
        var len = arguments.length;
        for (var i = 0; i < len; i++) {
            Object.assign(this, arguments[i]);
        }
    }
}

/*
В метод addRecord добавляется последний необязательный аргумент flag, который указывает приоритет присвоения свойств с одинаковым названием. 
Если true - берется свойство из первоначального объекта this, если false - берется свойство из arguments. По умолчанию flag = false;
*/

var data2 = {
    addRecord: function() {
        
        var flag = false; 
        var len = arguments.length;
        if (typeof(arguments[len-1]) === 'boolean') {
            len--;
            flag = arguments[len];
        }
        
        var res = this;
  
        for (var i = 0; i < len; i++) {
            res = flag ? Object.assign(arguments[i], res) : Object.assign(res, arguments[i]);
        }
        Object.assign(this, res);
    }
}