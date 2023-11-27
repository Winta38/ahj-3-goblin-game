export default class Goblin {
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
