/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/drawBorder.js
class DrawBorder {
  constructor() {
    this.container = null;
  }
  draw(boardSize, el1, el2) {
    const gameContainer = document.getElementById("game-container");
    this.container = gameContainer ? gameContainer : document.createElement("div");
    const text = `
                <h1 class="title">Поймай Гоблина</h1>
                <div class="control">
                  <div class="slain-goblins">
                    Убито гоблинов:
                    <span>${el1}</span>
                  </div>
                  <div class="slips">
                    Всего промахов:
                    <span>${el2}</span>
                  </div>
                </div>
                <div data-id="board" class="board"> </div>
            `;
    this.container.insertAdjacentHTML("beforeend", text);
    this.board = document.querySelector(".board");
    for (let i = 0; i < Math.pow(boardSize, 2); i += 1) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.id = i;
      this.board.append(cell);
    }
  }
}
;// CONCATENATED MODULE: ./src/js/Goblin.js
class Goblin {
  constructor() {
    this.oldPosition = null;
  }
  moving() {
    document.addEventListener("DOMContentLoaded", () => {
      const cell = document.querySelectorAll(".cell");
      setInterval(() => {
        if (this.oldPosition !== null) {
          cell[this.oldPosition].classList.remove("active");
        }
        const random = Math.floor(Math.random() * cell.length);
        const element = cell[random];
        this.oldPosition = random;
        element.classList.add("active");
      }, 1000);
    });
  }
}
;// CONCATENATED MODULE: ./src/js/GameController.js

class GameController {
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
;// CONCATENATED MODULE: ./src/js/app.js


const board = new DrawBorder();
const gameCtrl = new GameController(board);
gameCtrl.init();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;