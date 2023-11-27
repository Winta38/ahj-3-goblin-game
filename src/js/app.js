import DrawBorder from "./drawBorder";
import ControllGame from "./GameController";

const board = new DrawBorder();
const gameCtrl = new ControllGame(board);

gameCtrl.init();
