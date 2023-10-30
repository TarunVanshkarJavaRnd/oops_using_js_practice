// const tarunAccount = new BankAccount('Tarun Vanshkar', 5000);  // This kind of Hoisting won't work with classes
// Hence first declare a class then try to access it


// class keyword is a syntectic sugar for the constructor function

class BankAccount {
    customerName;
    accountNumber;
    balance;
    
    constructor(customerName, balance = 0){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    // The below methods will be inside the prototype of this constructor function
    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){
        this.balance -= amount;
    }
}

                                    // OR
// const BankAccount = class { }

// Bank account of Tarun
const tarunAccount = new BankAccount('Tarun Vanshkar', 5000);
tarunAccount.deposit(5000);
tarunAccount.withdraw(1000);

// Bank account of Sumit
const sumitAccount = new BankAccount('Sumit');
sumitAccount.deposit(5000);
sumitAccount.withdraw(2000);

console.log(tarunAccount);
console.log(sumitAccount);