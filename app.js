const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dummyTransactions = [
    { Id : 1, text: 'Flower', amount: -20},
    { Id : 2, text: 'Salary', amount: 500},
    { Id : 3, text: 'Book', amount: -30},
    { Id : 4, text: 'Camera', amount: -120}
]

let transactions = dummyTransactions;

//Add transactions to DOM list

function addTransactionDOM(transaction){

    //Get sign
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li');

    //Add clase based on value
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

    item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span> <button class="delete-btn"></button>
    `;

    list.appendChild(item);
}

//Update Values

function updateValues(){
    const amounts = transactions.forEach(transaction => {
        console.log(transaction.amount);
    })
}

//Init app

function init(){
    list.innerHTML = ' ';

    transactions.forEach(addTransactionDOM);

    updateValues();
}

init()