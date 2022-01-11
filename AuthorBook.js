"use strict";

class Author {
  constructor(...args) {
    [this._name, this._email, this._gender] = args;
  }

  get name() {
    return this._name;
  }
  get email() {
    return this._email;
  }
  get gender() {
    return this._gender;
  }

  set name(val) {
    if (typeof val === "string") {
      this._name = val;
    } else {
      throw "Invalid input of name";
    }
  }
  toString() {
    if (this._gender === "female") {
      return `Ms ${this._name}`;
    } else {
      return `Mr ${this._name}`;
    }
  }
}
class Book {
  constructor(...args) {
    [this._title, this._author, this._price, this._quantity] = args;
  }
  get title() {
    return this._title;
  }
  get author() {
    return this._author;
  }
  get price() {
    this._price;
  }
  get quantity() {
    return this._quantity;
  }
  set title(val) {
    if (typeof val === "string") {
      this._title = val;
    }
  }
  set author(val) {
    if (typeof val === "string") {
      this._author = val;
    }
  }
  set price(val) {
    if (typeof val === "number") {
      this._price = val;
    }
  }
  set quantity(val) {
    if (typeof val === "number") {
      this._quantity = val;
    }
  }
  toString() {
    return this._author;
  }
  getProfit() {
    return this._price * this._quantity;
  }
}

let author1 = new Author("J. K. Rowling", "abc@gmail.com", "female");
let book1 = new Book("The Great Gatsby", " F. S. Fitzgerald", 450, 20);
console.log(book1.getProfit());

console.log(book1._title);

console.log(book1.toString());
