"use strict";
// Есть функция. Она принимает некий объект А, у которого есть поля со значениями
// - или undefined 
// - или объекта с одним полем cvalue, который 
//      либо undefined 
//      либо по типу равный 
//           либо строке, 
//           либо числу, 
//           либо ссылке на объект по своей структуре/описанию подобный описываемому объекту А.
// ...Функция должна вернуть сумму "значений" поля cvalue всех полей объекта, притом,
// - если у очередного элемента поле сvalue - это число, 
//   то просто добавляем это число.
// - если у очередного элемента поле сvalue - это строка, 
//   то просто конвертим строку в число и добавляем.
// - если у очередного элемента поле cvalue - это объект подобный корневому, 
//   то добавляем сумму его полей (привет рекурсия)
// - если мы натыкаемся на undefined, или же если cvalue был строкой которая по факту не являлась адекватным числом - 
//   то тогда значением будет 2022.
Object.defineProperty(exports, "__esModule", { value: true });
function summ(a) {
    return Object.keys(a)
        .map((k) => {
        let elem = a[k];
        if (!elem)
            return 2022;
        let nonNullableElem = elem;
        if (typeof nonNullableElem.cvalue === 'string') {
            const value = +nonNullableElem.cvalue;
            if (Number.isNaN(value))
                return 2022;
            return value;
        }
        if (typeof nonNullableElem.cvalue === 'number')
            return nonNullableElem.cvalue;
        if (!nonNullableElem.cvalue)
            return 2022;
        return summ(nonNullableElem.cvalue);
    })
        .reduce((partialSum, a) => partialSum + a, 0);
}
exports.default = summ;
//TESTING SITUATED IN index.ts and task3-tests.ts!
// Удачи найти все баги. 
// Тут может быть проще все с нуля написать, но задача не об этом. 
// А про то, как находить ошибки не напрягаясь.
// И про type narrowing:
// - про guards: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards
// - про truthiness narrowing: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#truthiness-narrowing
// - про control flow analysis: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#control-flow-analysis
// Дайте знать @roman про результаты.
