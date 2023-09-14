import { type } from "os";
import { playground } from "../components/playground";

type Position = {
  x: number;
  y: number;
};

export function isMoveOk(level: number, position: Position, event: any) {
  //function which check if the move is ok (no wall, no out of the grid) and return a message if not

  const newPosition = getNewPosition(position, event.key);

  const limitRow = playground[level - 1].map.length - 1;
  const limitCol = playground[level - 1].map[0].length - 1;

  //find the current map with the level id
  const currentMap = playground[level - 1].map;

  // console.log("currentMap: " + currentMap);

  //check if the position is in the grid

  if (
    newPosition.x < 0 ||
    newPosition.x > limitRow ||
    newPosition.y < 0 ||
    newPosition.y > limitCol
  ) {
    console.log("hors limite");
    return false;
  }

  //search if there is a wall on the position of playground where level = playground id

  if (currentMap[newPosition.x][newPosition.y] === "*") {
    console.log("mur sur position :" + newPosition.x, newPosition.y);
    return false;
  }

  if (currentMap[newPosition.x][newPosition.y] === "m") {
    console.log("sortie de jeu" + currentMap[newPosition.x][newPosition.y]);
    return false;
  }

  return newPosition;
}

export function isGoal(level: number, position: Position) {
  //find the current map with the level id
  const currentMap = playground[level - 1].map;
  // console.log("isGoal: " + position.x, position.y);
  if (currentMap[position.x][position.y] === "-") {
    return true;
  }
  return false;
}

//function which return the position of the player
export function getPosition(level: number) {
  const currentMap = playground[level - 1].map;
  let position: Position = { x: 0, y: 0 };
  currentMap.forEach((row, rowIndex) => {
    row.split("").forEach((symbol, colIndex) => {
      if (symbol === "o") {
        position.x = rowIndex;
        position.y = colIndex;
      }
    });
  });
  return position;
}

export const getNewPosition = (position: Position, direction: string) => {
  switch (direction) {
    case "ArrowRight":
      return { x: position.x, y: position.y + 1 };
    case "ArrowLeft":
      return { x: position.x, y: position.y - 1 };
    case "ArrowUp":
      return { x: position.x - 1, y: position.y };
    case "ArrowDown":
      return { x: position.x + 1, y: position.y };
    default:
      return position;
  }
};
