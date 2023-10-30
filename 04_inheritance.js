/*

function BankAccount(customerName, balance=0){
    this.customerName = customerName;
    this.balance = balance;
    this.accountNumber = Date.now();
}

// The below function will be shared with all objects of the above constructor function
BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
};

BankAccount.prototype.withdraw = function(amount){
    this.balance -= amount;
}


// Current Account
function CurrentAccount(customerName, balance=0){
    this.customerName = customerName;
    this.balance = balance;
    this.accountNumber = Date.now();
    this.transactionLimit = 50000;
}

// The below function will be shared with all objects of the above constructor function
CurrentAccount.prototype.deposit = function(amount){
    this.balance += amount;
};

CurrentAccount.prototype.withdraw = function(amount){
    this.balance -= amount;
}

CurrentAccount.prototype.takeBusinessLoan = function(amount){
    console.log('Taking business loan : ' + amount);
};

// Saving Account
function SavingAccount(customerName, balance=0){
    this.customerName = customerName;
    this.balance = balance;
    this.accountNumber = Date.now();
    this.transactionLimit = 10000;
}

// The below function will be shared with all objects of the above constructor function
SavingAccount.prototype.deposit = function(amount){
    this.balance += amount;
};

SavingAccount.prototype.withdraw = function(amount){
    this.balance -= amount;
}

SavingAccount.prototype.takePersonalLoan = function(amount){
    console.log('Taking personal loan : ' + amount);
};

const tarunAccount = new BankAccount('Tarun Vanshkar', 5000);
// tarunAccount.deposit(5000);  // works due to prototype chaining
// tarunAccount.withdraw(1000);
// // console.log(BankAccount.prototype);

// console.log(tarunAccount);

const sumitAccount = new CurrentAccount('Sumit', 5000);
const arjunAccount = new SavingAccount('Arjun', 5000);

console.log(sumitAccount);
console.log(arjunAccount);

*/






/*

function BankAccount(customerName, balance=0){
    this.customerName = customerName;
    this.balance = balance;
    this.accountNumber = Date.now();
}

// The below function will be shared with all objects of the above constructor function
BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
};

BankAccount.prototype.withdraw = function(amount){
    this.balance -= amount;
}


// Current Account
function CurrentAccount(customerName, balance=0){
    BankAccount.call(this, customerName, balance);  // Constructor linking
    this.transactionLimit = 50000;
}

CurrentAccount.prototype = Object.create(BankAccount.prototype);   // Prototype linking

// This prototype creation should be after prototype linking
CurrentAccount.prototype.takeBusinessLoan = function(amount){
    console.log('Taking business loan : ' + amount);
};

// Saving Account
function SavingAccount(customerName, balance=0){
    BankAccount.call(this, customerName, balance);  // Constructor linking
    this.transactionLimit = 10000;
}

SavingAccount.prototype = Object.create(BankAccount.prototype);

SavingAccount.prototype.takePersonalLoan = function(amount){
    console.log('Taking personal loan : ' + amount);
};

const sumitAccount = new CurrentAccount('Sumit', 5000);
sumitAccount.deposit(1000);
sumitAccount.withdraw(2000);
sumitAccount.takeBusinessLoan(2000);
const arjunAccount = new SavingAccount('Arjun', 5000);

console.log(sumitAccount);
console.log(arjunAccount);

*/






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


class CurrentAccount extends BankAccount{
    transactionLimit = 50000;

    constructor(customerName, balance = 0){
        super(customerName, balance);
    }

    takeBusinessLoan(amount){
        console.log('Taking a business loan : ' + amount);
    }
}


class SavingAccount extends BankAccount{
    transactionLimit = 10000;

    constructor(customerName, balance = 0){
        super(customerName, balance);
    }

    takePersonalLoan(amount){
        console.log('Taking a personal loan : ' + amount);
    }
}
const tarunAccount = new CurrentAccount('Tarun', 5000);
tarunAccount.deposit(1000);
tarunAccount.withdraw(2000);
tarunAccount.takeBusinessLoan(1000);

const sumitAccount = new SavingAccount('Sumit', 1000);

console.log(tarunAccount);
console.log(sumitAccount);
