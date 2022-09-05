"use strict";
// Testing of Task 1
let btns = ["Add", "Buy", "Remove", "Yes", "No"];
// Testing of Task 2
let confFunc = (dialogBtn) => {
    // do smth...
};
// Without assigned function
let confBtn = { type: "Add", onConfirm: undefined };
// With assigned function
let confBtn1 = { type: "Buy", onConfirm: confFunc };
