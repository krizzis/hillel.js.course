/*
1. Пусть есть объект obj = {anonim: {say: 'Hello anonim'}, user: {say: 'Hello user'}, admin: {say: 'Hello admin'}}, и ф-я: function greeting(who) {}
при помощи метода call вызвать ф-ю greeting как метод объекта obj без записи в него, 
с одним из 3ьох значений "anonim, admin, user". Получить в ответ сообщение приветствия.
*/

var obj = {
        anonim: {say: 'Hello anonim'}, 
        user: {say: 'Hello user'}, 
        admin: {say: 'Hello admin'}
    };

function greeting(who) {
    console.log(this[who].say);
}

greeting.call(obj, 'user');

/*
2. Пусть дан следующий код:
var user = {name: 'Алексей'}
function func(surname, patronymic) { alert('привет' + ' ' + this.name + ', ' + patronymic + ' ' + surname); }
func(); //тут должно вывести 'привет, Алексей Алексеевич Петров'

при помощи apply вывести сообщение 'привет, Алексей Алексеевич Петров' 'Алексеевич', 'Петров' должно быть параметрами ф-ии.
*/

var user = {
    name: 'Алексей'
};

function func(surname, patronymic) {
    console.log(`привет, ${this.name} ${patronymic} ${surname}`); 
};

func.apply(user, ['Петров', 'Алексеевич']);

/*
(**)
3. var user = {name: 'Алексей'}

function func(surname, patronymic) { alert('привет' + ' ' + this.name + ', ' + patronymic + ' ' + surname); }

//Тут напишите конструкцию с bind()

func('Николаев', 'Иванович'); //тут должно вывести 'привет, Алексей Иванович Николаев '

Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на объект user.
*/

var user = {name: 'Алексей'}

function func(surname, patronymic) { 
    console.log(`привет, ${this.name} ${patronymic} ${surname}`);
}

func.bind(user)('Николаев', 'Иванович');

/*
var greeting = func.bind(user);
greeting('Николаев', 'Иванович');
*/