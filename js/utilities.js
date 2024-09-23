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

function showSectionById (id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden')
}