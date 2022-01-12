class Shiritori {
  constructor() {
    this.words = [];
    this.game_over = false;
  }

  play(word) {
    let arr = this.words;

    if (arr.length === 0) {
      arr.push(word);
    } else {
      let lastEl = arr.length - 1;
      let lastChar = arr[lastEl].length - 1;

      if (arr.includes(word)) {
        this.game_over = true;
        console.log("gameover");
      } else if (arr[lastEl][lastChar] === word[0]) {
        this.game_over = true;
        console.log("gameover");
      } else {
        arr.push(word);
      }
    }
  }
  restart() {
    this.words = [];
    this.game_over = false;
  }
}

let player1 = new Shiritori();
player1.play("play");
player1.play("eat");
player1.play("dog");
player1.play("garden");
//player1.restart();
console.log(player1.words);
