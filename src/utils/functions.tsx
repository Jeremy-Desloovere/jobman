import { type } from "os";
import { playground } from "../components/playground";

const limitRow = playground.length - 1;
const limitCol = playground[0].length - 1;

type Position = {
  x: number;
  y: number;
};

type Message = {
  message: string;
};

export function isMoveOk(position: Position) {
  //function which check if the move is ok (no wall, no out of the grid) and return a message if not

  if (
    position.x < 0 ||
    position.x > limitRow ||
    position.y < 0 ||
    position.y > limitCol
  ) {
    console.log("hors limite");
    return false;
  }

  if (playground[position.x][position.y] === "*") {
    console.log("mur sur position :" + position.x, position.y);
    return false;
  }

  // if (playground[position.x][position.y] === "m") {
  //   console.log("sortie de jeu" + playground[position.x][position.y]);
  //   return false;
  // }

  return true;
}

export function isGoal(position: Position) {
  // console.log("isGoal: " + position.x, position.y);
  if (playground[position.x][position.y] === "-") {
    return true;
  }
  return false;
}
