/*

function BankAccount(customerName, balance=0){
    this.customerName = customerName;
    this.balance = balance;
    this.accountNumber = Date.now();

    // it is not a very optimized way to declare below functions inside constructor function
    this.deposit = function(amount){
        this.balance += amount;
    }

    //Arrow function
    this.withdraw = (amount) => {
        this.balance -= amount;
    }
}

// Here new keyword creates an object of constructor function
const tarunAccount = new BankAccount('Tarun Vanshkar', 5000);

const sumitAccount = new BankAccount('Sumit');
sumitAccount.balance = 50000;   // It should not happen --> use getters and setters to do such modification

tarunAccount.deposit(5000);
sumitAccount.withdraw(40000);

console.log(tarunAccount);
console.log(sumitAccount);

*/

function BankAccount(customerName, balance=0){
    this.customerName = customerName;
    this.balance = balance;
    this.accountNumber = Date.now();

    // it is not a very optimized way to declare below functions inside constructor function
    this.deposit = function(amount){
        this.balance += amount;
    }

    //Arrow function
    this.withdraw = (amount) => {
        this.balance -= amount;
    }
}

const accounts = []; //Array to store all accounts
const accountForm = document.getElementById('accountForm');
const customerName = document.querySelector('#customerName');
const balance = document.getElementById('balance');


const depositForm = document.getElementById('depositForm');
const accountNumber = document.querySelector('#accountNumber');
const amount = document.getElementById('amount');

accountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(customerName.value);
    // console.log(balance.value);

    const account = new BankAccount(customerName.value, +balance.value);  // Since balance is a string here, hence appending '+' as prefix to convert it to number

    accounts.push(account);
    console.log(accounts);
});

// Event listener to deposit in account
depositForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(accountNumber.value);
    // console.log(amount.value);

    const account = accounts.find((account) => account.accountNumber === +accountNumber.value);

    account.deposit(+amount.value);

    console.log(accounts);
});