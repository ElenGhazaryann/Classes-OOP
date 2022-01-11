"use strict";

class CoffeeShop {
  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
    this.orders = [];
  }
  addOrder(orderName) {
    let item = this.menu.filter((el) => el.name === orderName);
    if (item.length !== 0) {
      this.orders.push(item[0]);
    } else {
      console.log("This item is currently unavailable!");
    }
  }
  fulfillOrder() {
    if (this.orders.length > 0) {
      let item = this.orders.shift().name;
      console.log(`The ${item} is ready`);
    } else {
      console.log("All orders have been fulfilled");
    }
  }
  listOrders() {
    console.log(this.orders);
  }
  dueAmaunt() {
    console.log(
      this.orders.reduce((acc, currentVal) => acc.price + currentVal.price)
    );
  }
  cheapestItem() {
    let cheapestItem = this.menu.reduce((acc, currentVal) => {
      if (acc.price < currentVal.price) {
        return acc;
      } else {
        acc = currentVal;
        return acc;
      }
    });
    console.log(cheapestItem.name);
  }

  drinksOnly() {
    let onlyDrinks = this.menu.reduce((acc, currentVal) => {
      if (currentVal.type === "drink") {
        acc.push(currentVal.name);
      }
      return acc;
    }, []);
    console.log(onlyDrinks);
  }
  foodOnly() {
    let onlyFood = this.menu.reduce((acc, currentVal) => {
      if (currentVal.type === "food") {
        acc.push(currentVal.name);
      }
      return acc;
    }, []);
    console.log(onlyFood);
  }
}

const menu1 = [
  { name: "Hot chocolate", type: "drink", price: 500 },
  { name: "Americano", type: "drink", price: 600 },
  { name: "Latte", type: "drink", price: 800 },
  { name: "Pancake", type: "food", price: 1200 },
  { name: "Cookie", type: "food", price: 500 },
  { name: "Crepe", type: "food", price: 1200 },
  { name: "Black coffee", type: "drink", price: 300 },
  { name: "Milkshake", type: "drink", price: 1100 },
];
let shop1 = new CoffeeShop("CoffeeTea", menu1);

shop1.addOrder("Crepe");
shop1.addOrder("Latte");
shop1.fulfillOrder();
shop1.fulfillOrder();
shop1.fulfillOrder();
shop1.listOrders();
shop1.addOrder("Crepe");
shop1.addOrder("Black coffee");
shop1.dueAmaunt();
shop1.cheapestItem();
shop1.foodOnly();
