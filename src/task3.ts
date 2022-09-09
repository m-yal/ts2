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
  
// например, для { hello: {cvalue: 1}, world: { cvalue: { yay: { cvalue: "2" } } } } 
// должно вернуться 3

// Скоро дадим вам функцию, но она немного багонутая. 
// Попробуйте найти в ней все баги самостоятельно без запуска этого кода. 
// Когда вы увидели все баги и готовы их исправлять, то сделайте это (НО НЕ НАДО ПЕРЕПИСЫВАТЬ С НУЛЯ :)) ), 
// и когда будете уверены что функция работает ок - можете попробовать запустить ее и потестить. 
// Перед запуском изучите, что ваш любимый редактор подсвечивает в коде. 
// Нашел ли он какие-то ошибки?
// Если допустить, что все-таки вы пропустили ряд ошибок, то время протестировать тайпскрипт.

// 1) сложный этап. напишите нормальную тайпскриптовую сигнатуру функции 
// (отдельно опишите тип первого аргумента в виде interface)

// 2) если не получилось, смотрите спойлер: https://pastebin.com/2nEJvk04

// 3) пользуясь силой тайпскрипта и описанной сигнатуры, 
// найдите как можно больше ошибок, которых не нашли раньше. 
// По мере фикса кода, обнаруживайте еще ошибки на шару в процессе кодинга, 
// без запуска программы.
// результат скиньте @roman

// ... а вот и код багонутой функции:

export interface A {
    [field: string]: undefined | CValueObj
}
type FieldA = undefined | CValueObj;
type CValueObj = {cvalue: undefined | string | number | A};

export default function summ(a: A): number {
    const x: number[] = Object.keys(a).map((k: string): number => {
        const elem: FieldA = a[k];
        if (!elem) return 2022;
        if (typeof elem.cvalue === 'string') {
            const value: number | string = +elem.cvalue;
            if (Number.isNaN(value)) return 2022;
            return value;
        } 
        if (typeof elem.cvalue === 'number') return elem.cvalue;
        return summ(elem.cvalue as A);
    });
    let sum: number = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}

//TESTING SITUATED IN index.ts and task3-tests.ts!

// Удачи найти все баги. 
// Тут может быть проще все с нуля написать, но задача не об этом. 
// А про то, как находить ошибки не напрягаясь.
// И про type narrowing:
// - про guards: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards
// - про truthiness narrowing: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#truthiness-narrowing
// - про control flow analysis: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#control-flow-analysis

// Дайте знать @roman про результаты.