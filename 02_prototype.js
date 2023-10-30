// JavaScript functions are the object

function BankAccount(customerName, balance=0){
    this.customerName = customerName;
    this.balance = balance;
    this.accountNumber = Date.now();

    // it is not a very optimized way to declare below functions inside constructor function
    // this.deposit = function(amount){
    //     this.balance += amount;
    // }

    //Arrow function
    // this.withdraw = (amount) => {
    //     this.balance -= amount;
    // }
    // The above two methods should be common for each user rather than taking memory for individual users
    // Prototype helps to solve above problem
}

const tarunAccount = new BankAccount('Tarun');
// const sumitAccount = new BankAccount('Sumit', 500);

// console.log(tarunAccount, sumitAccount);

// BankAccount.prototype.testFunction = 'Adding to test';

// The below function will be shared with all objects of the above constructor function
BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
    // Arrow function can't be used here because of this keyword
};

BankAccount.prototype.withdraw = function(amount){
    this.balance -= amount;
}

tarunAccount.deposit(5000);  // works due to prototype chaining
tarunAccount.withdraw(1000);
// console.log(BankAccount.prototype);

console.log(tarunAccount);