"use strict";
// Напишите функцию mapObject, которая
// в чем-то очень похожа на функцию map для массивов.
Object.defineProperty(exports, "__esModule", { value: true });
// Эта функция должна принимать объект джаваскрипта
// и функцию transformer, которую нужно применить к каждому из полей того объекта, 
// ...а из результата применения функции transformer к каждому полю входящего объекта
// собрать новый объект и вернуть его.
// Так например можно будет замэппить объект типа 
// { "roma" : 5, "vasya": 2 } оценок студентов
// на функцию вроде (x) => x > 2
// чтобы получить объект 
// { "roma": true, "vasya": false } зачетов студентов
// Понятное дело для описания сигнатуры mapObject надо будет юзать
// 1) дженерики с несколькими параметрами-типами
// 2) такую штуку как Record (globalThis.Record, если быть точным ;) )
function mapObject(obj, transformer) {
    return Object.keys(obj).reduce((res, key) => {
        const field = key;
        res[field] = transformer(obj[field]);
        return res;
    }, {});
}
exports.default = mapObject;
