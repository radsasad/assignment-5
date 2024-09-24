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
    else if (myCurrentBalance <= donateValue) {
        alert('your balance is low');
    }
    else {
        const myBalance = myCurrentBalance - donateValue;
        const currentBalance = donateValue + previousDonation;
        document.getElementById('current-balance-one').innerText = currentBalance;
        document.getElementById('my-balance').innerText = myBalance;
        const inputValueClear = document.getElementById('donate-value-one');
        inputValueClear.value = ''
        
        // for transaction 
        const div = document.createElement('div');
        div.classList.add('px-8', 'py-4', 'mt-8', 'rounded-lg', 'bg-red-50')
        div.innerHTML = `
            <h3 class="text-xl font-semibold"><span>${donateValue}</span> Donate for Flood at Noakhali, Bangladesh
                </h3>
            <p class="mt-2">Date : ${new Date()} </p>
        
        `;
        console.log(div)
        document.getElementById('transaction-container').appendChild(div);
        document.getElementById('btn-donate-one').setAttribute(my_modal_1.showModal())

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
    else if (myCurrentBalance <= donateValueOne) {
        alert('your balance is low');
    }
    else {
        const myBalance = myCurrentBalance - donateValueOne;
        const currentBalance = donateValueOne + previousDonation;
        document.getElementById('current-balance-two').innerText = currentBalance;
        document.getElementById('my-balance').innerText = myBalance;
        const inputValueClear = document.getElementById('donate-value-two');
        inputValueClear.value = '';
        
        // for transaction 
        const div = document.createElement('div');
        div.classList.add('px-8', 'py-4', 'mt-8', 'rounded-lg', 'bg-red-50')
        div.innerHTML = `
            <h3 class="text-xl font-semibold"><span>${donateValueOne}</span> Donate for Flood Relief in Feni,Bangladesh 
                </h3>
            <p class="mt-2">Date : ${new Date()} </p>
        
        `;
        console.log(div)
        document.getElementById('transaction-container').appendChild(div);
        document.getElementById('btn-donate-two').setAttribute(my_modal_1.showModal())
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
    else if (myCurrentBalance <= donateValueTwo) {
        alert('your balance is low');
    }
    else {
        const myBalance = myCurrentBalance - donateValueTwo;
        const currentBalance = donateValueTwo + previousDonation;
        document.getElementById('current-balance-three').innerText = currentBalance;
        document.getElementById('my-balance').innerText = myBalance;
        const inputValueClear = document.getElementById('donate-value-three');
        inputValueClear.value = '';
       
        // for transaction 
        const div = document.createElement('div');
        div.classList.add('px-8', 'py-4', 'mt-8', 'rounded-lg', 'bg-red-50')
        div.innerHTML = `
            <h3 class="text-xl font-semibold"><span>${donateValueTwo}</span> Aid for Injured in the Quota Movement 
                </h3>
            <p class="mt-2">Date : ${new Date()} </p>
        
        `;
        console.log(div)
        document.getElementById('transaction-container').appendChild(div);
        document.getElementById('btn-donate-three').setAttribute(my_modal_1.showModal());
    }

})
