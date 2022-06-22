export const NumberValidator = (event) => {
    // console.log("NumberValidator", event.which, event.keyCode)
    let keyCode = event.keyCode ? event.keyCode : event.which;

    if (!(keyCode >= 48 && keyCode <= 57)) {
        event.preventDefault();
    }
};