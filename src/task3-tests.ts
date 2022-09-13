import summ from "./task3";
import { A } from "./task3";

export function run (): void {
    const objects: A[] = [
        { hello: {cvalue: 1}, world: { cvalue: { yay: { cvalue: "2" } } } }, //3
        {a: undefined}, // 0
        {b: {cvalue: "some not number string"}, b1: {cvalue: 1}}, //2023
        {c: {cvalue: "100"}}, //100
        {d: {cvalue: 1}, d1: {cvalue: {innerD: undefined, innerD1: {cvalue: 100}, innerD2: {cvalue: {innerInnerD: {cvalue: "01"}}}}}}, //2124
        {e: {cvalue: 0}}, //0
        {f: {cvalue: "0"}} //0
    ];

    const results: number[] = [3, 2022, 2023, 100, 2124, 0, 0];
    let testsAmount: number = objects.length;
    let passedTests: number = 0;

    for (let i = 0; i < objects.length; i++) {
        const object: A = objects[i];
        const exectedResult: number = results[i];
        const sum: number = summ(object);
        if (sum !== exectedResult) {
            console.error("!!!Test failed with next object: under index " + i + ", returned: " + sum);
            continue;
        }
        passedTests++;
    }
    console.log(`Testing finished: ${passedTests / testsAmount * 100}% of passed tests`);
}