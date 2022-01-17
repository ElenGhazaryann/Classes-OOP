# _Classes, OOP_

## _Literature_

---

- [Classes](https://javascript.info/classes)
- [Introduction to OOP](https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/)

- [Object-oriented JavaScript for beginners](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [A Guide to OOP](https://betterprogramming.pub/object-oriented-programming-in-javascript-b3bda28d3e81)

- [The Flavors of OOP](https://css-tricks.com/the-flavors-of-object-oriented-programming-in-javascript/)

## _Tasks_

---

## 1. CoffeeShop

**Properties** - `name, menu, orders`

**Methods** - `addOrder, fulfillOrder, listOrders, dueAmount, cheapestItem, drinksOnly, foodOnly`:

[Solution](https://github.com/ElenGhazaryann/Classes-OOP/blob/main/CoffeeShop.js)

## 2. Shiritori

This challenge is an English twist on the Japanese word game Shiritori. The basic premise is to follow two
rules:

- First character of next word must match last character of previous word.
- The word must not have already been said.

```JS
["word", "dowry", "yodel", "leader", "righteous", "serpent"]; // valid!
["motive", "beach"]; // invalid! - beach should start with "e"
["hive", "eh", "hive"]; // invalid! - "hive" has already been said
```

Write a Shiritori class that has two instance properties:

`words`: an array of words already said.  
`game_over`: a boolean that is true if the game is over.  
Methods:  
`play`: a method that takes in a word as an argument and checks if it is valid (the word should follow
rules #1 and #2 above).

- If it is valid, it adds the word to the words array, and returns the words array.
- If it is invalid (either rule is broken), it returns "game over" and sets the game_over boolean to
  true.
- restart: a method that sets the words array to an empty one [] and sets the game_over boolean
  to false. It should return "game restarted".
  [Solution](https://github.com/ElenGhazaryann/Classes-OOP/blob/main/Shiritori.js)

## 3. CustomConsole Class

Create a CustomConsole class with following methods:

- log function that takes user arguments and returns them as a string,
- history function that takes an optional range as an argument,
- clearHistory function to remove the history memory.
- The log function has no limit of arguments.

```JS
const myConsole = new Console('Regular');
const fancyConsole = new Console('Fancy');
myConsole.log([0, 1, 2, 3]) // "Regular: [0,1,2,3]"
myConsole.log({ a:1, b:2 }) // "Fancy: {a:1, b:2}"
myConsole.log("ok : ", 1, 2, 3) ➞ "ok : 1, 2, 3"
myConsole.clearHistory() // true
myConsole.history() // ""
```

[Solution]()

## 4. Author and Book

Create an` Author` class and a `Book` class. Author should have:

**Fields** - `name, email, gender`  
**Methods** - `getters for fields, toString()`

Book should have:  
**Fields** - `title, author(Author), price, quantity, methods, getters and setters for fields, getProfit(), toString()`

```JS
let author1 = new Author("J. K. Rowling", "abc@gmail.com", "fEmaLe");
console.log(author1.gender); // female
console.log(author1.name); // J. K. Rowling
console.log(author1.toString()); // Ms. J. K. Rowling
author.name = 12; // throws error
```

[Solution](https://github.com/ElenGhazaryann/Classes-OOP/blob/main/AuthorBook.js)

## 5. Account

Create an Account class. Account should have:

**Fields**
`id, name, balance, getters and setters - for name and balance, credit(amount), debit(amount)`  
`transferTo(anotherAccount, amount)` - which should subtract the amount from the account balance and add it to the given anotherAccount and return the updated balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”  
`identifyAccounts(accountFirst, accountSecond)` - static method, which gets two accounts and identifies if they are the same or not comparing all fields.
`toString()`

```JS
let savingAcc = new Account("Saving account", 2000);
let cardAcc = new Account("Card account", 1000);
console.log(savingAcc); // Account { id: 0, _name: 'Saving account',
_balance: 2000 }
console.log(cardAcc); // Account { id: 1, _name: 'Card account', _balance:
1000 }
console.log(savingAcc.balance); // 2000
console.log(savingAcc.credit(400)); // 2400
console.log(savingAcc.balance); // 2400
console.log(savingAcc.debit(9000)); //6600
console.log(savingAcc.transferTo(cardAcc, 1000)); // 1400
console.log(savingAcc.balance); // 1400
console.log(cardAcc.balance); // 2000
let anotherAcc = savingAcc;
console.log(Account.identifyAccounts(savingAcc, anotherAcc)); // true
console.log(Account.identifyAccounts(savingAcc, cardAcc)); // false
console.log(savingAcc.toString()); // Saving account's account balance is
$1400.
```

[Solution](https://github.com/ElenGhazaryann/Classes-OOP/blob/main/Account.js)

## 6. Student

Write classes: Person class and Student class. Person should have:

**Fields**

- `firstName`
- `lastName`
- `gender`
- `age`

**Methods**

- `getters for fields`
- `setters for fields`
- `toString()`

```JS
let user1 = new Person("Name", "Surname", "female", 23);
console.log(user1.toString()); // Name Surname, 23 years old.
```

`Student` is inherited from `Person`. It should have

**Fields**

- `year`
- `fee`
- `program(array of { programName, grade })`

**Methods**

- `getters for fields`
- `setters for fields`
- `passExam(programName, grade)`
- `isAllPassed()`
- `toString()`

`Student` should contain the data about its programs and exams.

- `PassExam` will update that data, so if student passed all the `exams(grade is great or equal to 50)`, its `year` should be increased by one.
- It should have a method isAllPassed().

```JS
[
{ programName: "math", grade: 10 },
{ programName: "english", grade: undefined },
];

```

[Solution](https://github.com/ElenGhazaryann/Classes-OOP/blob/main/PersonStudent.js)

## 7. Library

Read and solve [Task 4](https://classroom.google.com/c/NDMwODEwNzI3NTMz/a/NDMyMDc0OTY0NTkz/details) in this article

[Solutin](https://github.com/ElenGhazaryann/Classes-OOP/blob/main/Library.js)
