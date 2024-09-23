document.getElementById('btn-donate-one').addEventListener('click', function () {

    const donateValue = getInputValueById('donate-value-one');
    const previousDonation = getTextBalanceById('current-balance-one');
    const myCurrentBalance = getTextBalanceById('my-balance');

    if (isNaN(donateValue)) {
        alert('please insert valid number');
        
    }
    else if (donateValue < 0) {
        alert('please insert positive number');
    }
    else if(myCurrentBalance <= donateValue){
        alert('your balance is low');
    }
    else {
        const myBalance = myCurrentBalance - donateValue;
        const currentBalance = donateValue + previousDonation;
        document.getElementById('current-balance-one').innerText = currentBalance;
        document.getElementById('my-balance').innerText = myBalance;
    }

})

document.getElementById('btn-donate-two').addEventListener('click', function () {

    const donateValueOne = getInputValueById('donate-value-two');
    const previousDonation = getTextBalanceById('current-balance-two');
    const myCurrentBalance = getTextBalanceById('my-balance');

    if (isNaN(donateValueOne)) {
        alert('please insert valid number');
        
    }
    else if (donateValueOne < 0) {
        alert('please insert positive number');
    }
    else if(myCurrentBalance <= donateValueOne){
        alert('your balance is low');
    }
    else {
        const myBalance = myCurrentBalance - donateValueOne;
        const currentBalance = donateValueOne + previousDonation;
        document.getElementById('current-balance-two').innerText = currentBalance;
        document.getElementById('my-balance').innerText = myBalance;
    }

})


document.getElementById('btn-donate-three').addEventListener('click', function () {

    const donateValueTwo = getInputValueById('donate-value-three');
    const previousDonation = getTextBalanceById('current-balance-three');
    const myCurrentBalance = getTextBalanceById('my-balance');

    if (isNaN(donateValueTwo)) {
        alert('please insert valid number');
        
    }
    else if (donateValueTwo < 0) {
        alert('please insert positive number');
    }
    else if(myCurrentBalance <= donateValueTwo){
        alert('your balance is low');
    }
    else {
        const myBalance = myCurrentBalance - donateValueTwo;
        const currentBalance = donateValueTwo + previousDonation;
        document.getElementById('current-balance-three').innerText = currentBalance;
        document.getElementById('my-balance').innerText = myBalance;
    }

})