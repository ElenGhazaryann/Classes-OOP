"use strict";

class Book {
  constructor(title, author) {
    this._title = title;
    this._author = author;
  }
  get title() {
    return this._title;
  }
  get author() {
    return this._author;
  }
  toString() {
    return `${this._title} wrote ${this._author}`;
  }
  isTheSameBook(sameTitle, sameAuthor) {
    if (sameTitle === this._title && sameAuthor === this._author) {
      return "true";
    }
    return "false";
  }
}

class LibraryBookBase extends Book {
  constructor(title, author) {
    super(title, author);
    this.bookId = LibraryBookBase.index++;
  }
  static index = 0;
}

class LibraryBook extends Book {
  constructor(title, author, quantity) {
    super(title, author);
    this._quantity = quantity;
    this._bookId = LibraryBook.index++;
  }
  static index = 0;
  get quantity() {
    return this._quantity;
  }
  set quantity(val) {
    if (typeof val === "number") {
      this._quantity = val;
    }
  }
  increaseQuantityBy(amount) {
    this._quantity += amount;
  }
  decreaseQuantityBy(amount) {
    this._quantity -= amount;
  }
}

class ReaderBook extends Book {
  constructor(title, author, expirationDate, isReturned) {
    super(title, author);
    this._expirationDate = expirationDate;
    this._isReturned = isReturned;
  }
  get expirationDate() {
    return this._expirationDate;
  }
  get isReturned() {
    return this._isReturned;
  }
  set expirationDate(val) {
    if (typeof val === "number") {
      this._expirationDate = val;
    }
  }
  set isReturned(val) {
    if (typeof val === "boolean") {
      this._isReturned = val;
    }
  }
}

class Reader {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._readerId = Reader.index++;
    this._books = [];
  }
  static index = 0;
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get books() {
    return this._books;
  }
  set firstName(val) {
    if (typeof val === "string") {
      this._firstName = val;
    }
  }
  set lastName(val) {
    if (typeof val === "string") {
      this._lastName = val;
    }
  }
  set books(val) {
    if (typeof val === "object") {
      this._books = val;
    }
  }
  borrowBook(book, library) {}
}

class Library {
  constructor() {
    this._books = [];
    this._readers = [];
  }
  get books() {
    return this._books;
  }
  get readers() {
    return this._readers;
  }
  doHaveBook(requestedBook) {
    if (this._books.includes(requestedBook)) {
      return true;
    }
    return false;
  }
  addBook(newBook) {}
}
// let book1 = new Book("The Great Gatsby", "F. S. Fitzgerald");
//console.log(book1.toString());
