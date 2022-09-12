// Напишите функцию, которая принимает:
// 1) некие данные предполагаемо типа Т, но возможно не со всеми полями
// 2) функцию-дополнятор, которая принимает такие штуки как из п.1, 
//    а возвращает полноценный объект типа Т
// ... как вы поняли, саму функцию писать не надо :) 
// нас интересует только ее сигнатура.

function foo1<T, P extends Partial<T>>(partial: P, fulfill: (input: P) => T): void {

}

// Более сложный вариант:
// Напишите функцию, которая принимает:
// 1) некие данные предполагаемо типа Т (у которого поле id: string), 
//    но возможно без поля id
// 2) функцию-дополнятор, которая принимает такие штуки как из п.1, 
//    а возвращает полноценный объект типа Т
// ... как вы поняли, саму функцию писать не надо :) 
// нас интересует только ее сигнатура.
function foo2<T extends {id?: string}, F extends Required<T>>(obj: T, fulfill: (input: T) => F): void {

}

//checking task 2
const obj = {id: "11111"}
function insideFoo(inputObj: {id?: string}): {id: string} {
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
    w!: number;
    h!: number;
}
class Circle {
    radius!: number;
}

// сделайте норм сигнатуру тут.
// НЕТ, Rectangle|Circle это не вариант, надо сделать универсальную функцию 
function наштамповать<T>(SOMECLASS: {new(): T}, count: number): T[] {
    let a: T[] = [];
    for (let i: number = 0; i < count; i++)
       a.push(new SOMECLASS());
   
    return a;
}

let a: ReturnType<typeof наштамповать> = наштамповать(Rectangle, 10);
let b: ReturnType<typeof наштамповать> = наштамповать(Circle, 20);

//checking task 3
class Square {
    s!: number;
}
let c: ReturnType<typeof наштамповать> = наштамповать(Square, 20);