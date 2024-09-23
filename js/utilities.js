function getInputValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}

function getTextBalanceById(id){
    const textBalance = document.getElementById(id).innerText;
    const textBalanceNumber = parseFloat(textBalance);
    return textBalanceNumber;
}