document.getElementById('btn-show-donation').addEventListener('click', function(){
    console.log('clicked')
    showSectionById('donation-section')
})
document.getElementById('btn-show-history').addEventListener('click', function(){
    console.log('clicked')
    showSectionById('transaction-section')
})