/*

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

const tarunAccount = new CurrentAccount('Tarun', 5000);
// tarunAccount.balance = 10000;  // It should not happen
// tarunAccount.balance = 'Hello';   // To prevent such operation, we do encapsulation
console.log(tarunAccount);

*/


class BankAccount {
    customerName;
    accountNumber;
    #balance;      // Variables starting with under_score will be considered as a private variable in old days. Now it should start with #
    
    constructor(customerName, balance = 0){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance;
    }

    // The below methods will be inside the prototype of this constructor function
    deposit(amount){
        this.#balance += amount;
    }

    withdraw(amount){
        this.#balance -= amount;
    }

    // setBalance(amount){
    //     if(isNaN(amount)){
    //         throw new Error('Amount is not a valid input');
    //     }
    //     this.#balance = amount;
    // }
    // OR

    set balance(amount){
        if(isNaN(amount)){
            throw new Error('Amount is not a valid input');
        }
        this.#balance = amount;
    }


    // getBalance(){
    //     return this.#balance;
    // }
    // OR
    get balance(){
        return this.#balance;
    }
}


class CurrentAccount extends BankAccount{
    transactionLimit = 50000;

    constructor(customerName, balance = 0){
        super(customerName, balance);
    }

    #calculateInterest(amount){
        // This is a private method
        console.log('Calculating Interest');
    }

    takeBusinessLoan(amount){
        this.#calculateInterest(amount);   // calling private method is possible only within class, not even sub class can do it
        console.log('Taking a business loan : ' + amount);
    }
}

const tarunAccount = new CurrentAccount('Tarun', 5000);
// tarunAccount.#balance = 10000;  // It should not happen
// tarunAccount.#balance = 'Hello';   // To prevent such operation, we do encapsulation
// tarunAccount.setBalance('Hello');
// tarunAccount.setBalance(4000);
tarunAccount.balance = 4000;   // setting a balance with the help of special setters and getters
// tarunAccount.calculateInterest(1000);  // It should not happen with private method --> put # in front of method name
tarunAccount.takeBusinessLoan(1000);

console.log(tarunAccount);
// console.log(tarunAccount.getBalance());
console.log(tarunAccount.balance);   // calling a getter as a normal property