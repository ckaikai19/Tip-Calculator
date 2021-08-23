var billAmount = document.getElementById('bill-amount');
var tipAmount = document.getElementById('tip-precentage');
var peopleAmount = document.getElementById('people');
var button = document.getElementById('button');
var tipPP = document.getElementById('tipAmount');
var tipTT = document.getElementById('tipTotal');



button.addEventListener('click', getData);


function getData(event){
    event.preventDefault();
    let bill = 0;
    let precentage = 0;
    let people = 0;

    bill = parseInt(billAmount.value, 10);
    precentage = parseInt(tipAmount.value, 10) / 100;
    people = parseInt(peopleAmount.value, 10);

    const tipPerPerson = (bill * precentage) / people;
    tipPP.innerHTML = '$' + tipPerPerson.toFixed(2);

    const totalPerPerson = ( bill + (bill * precentage) ) / people;
    tipTT.innerHTML = '$' + totalPerPerson.toFixed(2);
}