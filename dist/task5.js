"use strict";
// Напишите функцию, которая принимает:
// 1) некие данные предполагаемо типа Т, но возможно не со всеми полями
// 2) функцию-дополнятор, которая принимает такие штуки как из п.1, 
//    а возвращает полноценный объект типа Т
// ... как вы поняли, саму функцию писать не надо :) 
// нас интересует только ее сигнатура.
function foo1(partial, fulfill) {
}
// Более сложный вариант:
// Напишите функцию, которая принимает:
// 1) некие данные предполагаемо типа Т (у которого поле id: string), 
//    но возможно без поля id
// 2) функцию-дополнятор, которая принимает такие штуки как из п.1, 
//    а возвращает полноценный объект типа Т
// ... как вы поняли, саму функцию писать не надо :) 
// нас интересует только ее сигнатура.
function foo2(obj, fulfill) {
}
//checking task 2
const obj = { id: "11111" };
function insideFoo(inputObj) {
    obj.id = "some str";
    return obj;
}
foo2(obj, insideFoo);
// Последняя задача:
// Напишите сигнатуру функции, которая принимает
// - некий класс 
// - количество
// ...а возвращает массив экземпляров этого класса
class Rectangle {
}
class Circle {
}
// сделайте норм сигнатуру тут.
// НЕТ, Rectangle|Circle это не вариант, надо сделать универсальную функцию 
function наштамповать(SOMECLASS, count) {
    let a = [];
    for (let i = 0; i < count; i++)
        a.push(new SOMECLASS());
    return a;
}
let a = наштамповать(Rectangle, 10);
let b = наштамповать(Circle, 20);
//checking task 3
class Square {
}
let c = наштамповать(Square, 20);
