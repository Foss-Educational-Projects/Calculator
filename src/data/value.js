const getValue = (e) => {
    switch (e.target.getAttribute("data-value")) {
        case 'number':
            dispatch(addNumbers(e.target.textContent))
            break;

        case 'decimal':
            dispatch(addDecimal("."));
            break;

        case 'clear':
            dispatch(clearStuff())
            break;

        case 'multiply': 
            dispatch(addOperator(" * "));
            break;

        case 'divide': 
            dispatch(addOperator(" / "));
            break;

        case 'add': 
            dispatch(addOperator(" + "));
            break;

        case 'subtract': 
            dispatch(addOperator(" - "));
            break;

        case 'equal': 
            dispatch(setReadValue())
            dispatch(getResult())
            break;

        case 'backspace':
            dispatch(removeStuff())
            break;

        case 'enter':
            dispatch(getResult())
            break;
        default:
            console.log("Unknown Operator Or Undefined")
            break;
    }
}