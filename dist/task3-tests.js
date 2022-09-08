"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const task3_1 = __importDefault(require("./task3"));
function run() {
    const objects = [
        { hello: { cvalue: 1 }, world: { cvalue: { yay: { cvalue: "2" } } } },
        { a: undefined },
        { b: { cvalue: "some not number string" }, b1: { cvalue: 1 } },
        { c: { cvalue: "100" } },
        { d: { cvalue: 1 }, d1: { cvalue: { innerD: undefined, innerD1: { cvalue: 100 }, innerD2: { cvalue: { innerInnerD: { cvalue: "01" } } } } } },
        { e: { cvalue: 0 } },
        { f: { cvalue: "0" } } //0
    ];
    const results = [3, 2022, 2023, 100, 2124, 0, 0];
    let testsAmount = objects.length;
    let passedTests = 0;
    for (let i = 0; i < objects.length; i++) {
        const object = objects[i];
        const exectedResult = results[i];
        const sum = (0, task3_1.default)(object);
        if (sum !== exectedResult) {
            console.log("Test failed with next object: under index " + i + ", returned: " + sum);
            continue;
        }
        passedTests++;
    }
    console.log(`Testing finished: ${passedTests / testsAmount * 100}% of passed tests`);
}
exports.run = run;
