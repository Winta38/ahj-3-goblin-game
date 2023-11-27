export default class DrawBorder {
  constructor() {
    this.container = null;
  }

  draw(boardSize, el1, el2) {
    const gameContainer = document.getElementById("game-container");
    this.container = gameContainer
      ? gameContainer
      : document.createElement("div");
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
