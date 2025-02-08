window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case '1':
            dispatch(addNumbers(e.key));
            break;
        case '2':
            dispatch(addNumbers(e.key));
            break;
        case '3':
            dispatch(addNumbers(e.key));
            break;
        case '4':
            dispatch(addNumbers(e.key));
            break;
        case '5':
            dispatch(addNumbers(e.key));
            break;
        case '6':
            dispatch(addNumbers(e.key));
            break;
        case '7':
            dispatch(addNumbers(e.key));
            break;
        case '8':
            dispatch(addNumbers(e.key));
            break;
        case '9':
            dispatch(addNumbers(e.key));
            break
        case '0':
            dispatch(addNumbers(e.key));
            break;
        case '+':
            console.log(e.key)
            dispatch(addOperator({ key: e.key, type: 'operator' }));
            break;
        case '-':
            console.log(e.key)
            dispatch(addOperator({ key: e.key, type: 'operator' }));
            break;
        case '*':
            console.log(e.key)
            dispatch(addOperator({ key: e.key, type: 'operator' }));
            break;
        case '/':
            console.log(e.key)
            dispatch(addOperator({ key: e.key, type: 'operator' }));
            break;
        case '.':
            console.log(e.key)
            dispatch(addDecimal(e.key));
            break;
        case '=':
            console.log(e.key)
            dispatch(setReadValue())
            dispatch(getResult())
            break;
        case 'c':
            dispatch(clearStuff())
            break;
        case 'Backspace':
            dispatch(removeStuff())
            break;
        default:
            console.log("Key Is Not Assigned To Any Operation")
            break;
    }
})