import Goblin from "./Goblin";

export default class GameController {
  constructor(board) {
    this.board = board;
    this.boardSize = 4;
    this.hitCounter = 0;
    this.missCounter = 0;
  }

  init() {
    this.board.draw(this.boardSize, this.hitCounter, this.missCounter);
    const moveGobline = new Goblin();
    moveGobline.moving();
    this.cells = document.querySelector(".board");
    this.cells.addEventListener("click", this.onBoardClick.bind(this));
  }

  onBoardClick(event) {
    event.preventDefault();
    this.slainGoblins = document.querySelector(".slain-goblins > span");
    this.slips = document.querySelector(".slips > span");

    if (event.target.classList.contains("active")) {
      event.target.classList.remove("active");
      event.target.classList.add("color-active");
      this.hitCounter += 1;
      this.slainGoblins.textContent = this.hitCounter;
      setTimeout(() => event.target.classList.remove("color-active"), 200);
    } else if (!event.target.classList.contains("active")) {
      this.missCounter += 1;
      this.slips.textContent = this.missCounter;
    }

    if (this.hitCounter >= 10) {
      this.resetScore();
      alert("Вы победили!");
    }

    if (this.missCounter >= 5) {
      this.resetScore();
      alert("Вы проиграли!");
    }
  }

  resetScore() {
    this.hitCounter = 0;
    this.missCounter = 0;
    this.slainGoblins.textContent = this.hitCounter;
    this.slips.textContent = this.missCounter;
  }
}
