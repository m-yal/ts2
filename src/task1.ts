type DialogButtonType = "Yes" | "No";

interface FormButton {
    type: "Add" | "Remove" | "Buy"
}

// Task 1: create AnyButtonType type, which describes all variations of buttons
type AnyButtonType = FormButton["type"] | DialogButtonType;

// Testing of Task 1
let btns: AnyButtonType[] = ["Add", "Buy", "Remove", "Yes", "No"];



// задача 2: создайте тип ConfirmationHandlingFormButton
// т.е. подтип формовых кнопок, которые ещё содержат поле onConfirm, в котором
// может лежать функция, которая вызывается с параметром типа DialogButtonType
// (и ничего не возвращает)
// Т.е. предполагается что у кнопки такого типа, если поле onConfirm пустое, 
// то при нажатии на эту кнопку сразу происходит действие
// а иначе вызывается диалог Подтверждения, и результат нажатия на кнопку Да или Нет
// в итоге попадет в функцию onConfirm, которая уже дальше решит что делать

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