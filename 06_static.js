// static methods and properties are such things which does not require a creation of its instance


/*

// we will see how the utility functions can be used for a static methods
// To understand static variables -> assign a id to every created user and that id should be auto incremented for each user
// let id = 1;
class User{
    static id = 1; // correct way to increment id

    constructor(name, age, income){
        this.name = name;
        this.age = age;
        this.income = income;
        // this.id = id++;
        this.id = User.id++;
    }

    // utility function or methods
    static compareByAge(user1, user2){
        return user1.age - user2.age;
    }

    static compareByIncome(user1, user2){
        return user1.income - user2.income;
    }
}

const user1 = new User('Tarun', 24, 25000);
const user2 = new User('Sumit', 23, 15000);
const user3 = new User('Rohit', 40, 9000);

// Now I wanted to sort the user based on their age
const users = [user1, user2, user3];

// users.sort((a, b) => a.age - b.age);   // sort in increasing order

// users.sort(User.compareByAge);
users.sort(User.compareByIncome);

console.log(users);

*/

class Config{
    static cache = {
        1 : 'some value',
    };
    static dbUser = 'username';
    static dbPassword = 'secret';
    static apiTocken = 'abcd';

    static hasInCache(){
        this.checkCache();
    }

    static checkCache(){
        console.log(this.cache);  // this keyword will only work here when both methods and variables are static
    }

    checkCache2(){
        console.log(Config.cache);
    }

    // static block
    static{
        console.log('Initialized static block');   // static block will always run first only once
    }
}

// console.log(Config.dbUser);  // No need to create a instance here
// console.log(Config.dbPassword);
// console.log(Config.apiTocken);

Config.hasInCache();

const config = new Config();
config.checkCache2();   // Since we are calling a static method from non-static method


// e.g. -> Math.random()  here 'random' is a static method on 'Math' class
// or Object.hasOwnProperty()   , etc.