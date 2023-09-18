import { playground } from "../components/playground";

type Position = {
  x: number;
  y: number;
};

/**
 *  function which check if the move is ok (no wall, no out of the grid) and return a message if not
 * @param level : level id
 * @param position : player position
 * @param eventString : direction of the move
 * @returns : new position of the player if the move is ok, false if not
 */
export function isMoveOk(
  level: number,
  position: Position,
  eventString: string
) {
  //put the player on the new position
  const newPosition = setNewPosition(position, eventString);
  const limitRow = playground[level].map.length - 1;
  const limitCol = playground[level].map[0].length - 1;

  //find the current map with the level id
  const currentMap = playground[level].map;

  //check if the position is in the grid return false if not
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
    console.log("mur sur position ");
    return false;
  }

  //search if there is a wall on the position of playground where level = playground id
  if (currentMap[newPosition.x][newPosition.y] === "m") {
    console.log("mur transparent");
    return false;
  }

  return newPosition;
}

/**
 * function which check if the player is on the goal
 * @param level : level id
 * @param position : player position
 * @returns true if the player is on the goal
 */
export function isGoal(level: number, position: Position) {
  //find the current map with the level id
  const currentMap = playground[level].map;
  // console.log("isGoal: " + position.x, position.y);
  if (currentMap[position.x][position.y] === "-") {
    console.log("goal");
    return true;
  }
  return false;
}

/**
 * function which set the new position of the player
 * @param position : player position
 * @param direction : direction of the move
 * @returns : new position of the player
 */
export const setNewPosition = (position: Position, direction: string) => {
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
