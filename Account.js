"use strict";

class Account {
  constructor(...args) {
    [this._id, this._name, this._balance] = args;
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get balance() {
    return this._balance;
  }
  set name(val) {
    if (typeof val === "string") {
      this._name = val;
    } else {
      throw "Invalid input of name";
    }
  }
  set balance(val) {
    if (typeof val === "number") {
      this._balance = val;
    } else {
      throw "Invalid input of balance";
    }
  }
  credit(amount) {
    return (this.balance += amount);
  }
  debit(amount) {
    if (amount < this._balance) {
      return (this._balance -= amount);
    } else {
      return "Amount exceeded balance.";
    }
  }
  transferTo(anotherAccount, amount) {
    if (amount < this._balance) {
      this._balance -= amount;
      anotherAccount += amount;
      return this._balance;
    } else {
      return "Amount exceeded balance";
    }
  }
}

let account1 = new Account(1, "Saving account", 5000);

console.log(account1.debit(200));
console.log(account1.credit(100));
console.log(account1.transferTo(100, 10));
