type DialogButtonType = "Yes" | "No";

interface FormButton {
    type: "Add" | "Remove" | "Buy"
}

// Task 1: create AnyButtonType type, which describes all variations of buttons
type AnyButtonType = FormButton["type"] | DialogButtonType;

// Testing of Task 1
let btns: AnyButtonType[] = ["Add", "Buy", "Remove", "Yes", "No"];


// Task 2
type ConfirmationFunction = (params: DialogButtonType) => void;
type ConfirmationHandlingFormButton = FormButton & {
    onConfirm: undefined | ConfirmationFunction
}

// Testing of Task 2
let confFunc = (dialogBtn: DialogButtonType): void => {
    // do smth...
};
// Without assigned function
let confBtn: ConfirmationHandlingFormButton = {type: "Add", onConfirm: undefined};
// With assigned function
let confBtn1: ConfirmationHandlingFormButton = {type: "Buy", onConfirm: confFunc};