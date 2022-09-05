type DialogButtonType = "Yes" | "No";

interface FormButton {
    type: "Add" | "Remove" | "Buy"
}

// Task 1: create AnyButtonType type, which describes all variations of buttons
type AnyButtonType = FormButton["type"] | DialogButtonType;

//testing
let addBtn: AnyButtonType = "Add";
let removeBtn: AnyButtonType = "Remove";
let buyBtn: AnyButtonType = "Buy";
let yesBtn: AnyButtonType = "Yes";
let noBtn: AnyButtonType = "No";



// задача 2: создайте тип ConfirmationHandlingFormButton
// т.е. подтип формовых кнопок, которые ещё содержат поле onConfirm, в котором
// может лежать функция, которая вызывается с параметром типа DialogButtonType
// (и ничего не возвращает)
// Т.е. предполагается что у кнопки такого типа, если поле onConfirm пустое, 
// то при нажатии на эту кнопку сразу происходит действие
// а иначе вызывается диалог Подтверждения, и результат нажатия на кнопку Да или Нет
// в итоге попадет в функцию onConfirm, которая уже дальше решит что делать
// type ConfirmationHandlingFormButton = ...;

// .... НЕТ, не надо писать все эти диалоги формы кнопки, 
// мы описываем чисто типы сейчас.