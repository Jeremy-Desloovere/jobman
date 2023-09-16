//test isMoveOK function with jest

import { isMoveOk } from "../../utils/functions";
import { isGoal } from "../../utils/functions";
import { setNewPosition } from "../../utils/functions";
import { getPlayerPosition } from "../../utils/functions";

const LEVEL = 1;

describe(`LEVEL ${LEVEL} : isMoveOk - Arrows`, () => {
  test("ArrowRight", () => {
    expect(isMoveOk(LEVEL, { x: 7, y: 2 }, { key: "ArrowRight" })).toBe(false);
  });

  test("ArrowUp ", () => {
    expect(isMoveOk(LEVEL, { x: 7, y: 2 }, { key: "ArrowUp" })).toStrictEqual({
      x: 6,
      y: 2,
    });
  });
  test("ArrowLeft ", () => {
    expect(isMoveOk(LEVEL, { x: 7, y: 2 }, { key: "ArrowLeft" })).toBe(false);
  });
  test("ArrowDown ", () => {
    expect(isMoveOk(LEVEL, { x: 7, y: 2 }, { key: "ArrowDown" })).toBe(false);
  });
});

describe(`LEVEL ${LEVEL} : limit of playground`, () => {
  test("limit - ArrowUp", () => {
    expect(isMoveOk(LEVEL, { x: 0, y: 0 }, { key: "ArrowUp" })).toBe(false);
  });

  test("limit - ArrowRight ", () => {
    expect(
      isMoveOk(LEVEL, { x: 9, y: 0 }, { key: "ArrowRight" })
    ).toStrictEqual({
      x: 9,
      y: 1,
    });
  });
  test("limit - ArrowLeft ", () => {
    expect(isMoveOk(LEVEL, { x: 9, y: 0 }, { key: "ArrowLeft" })).toBe(false);
  });
  test("limit - ArrowRight ", () => {
    expect(isMoveOk(LEVEL, { x: 0, y: 9 }, { key: "ArrowRight" })).toBe(false);
  });
  test("limit - ArrowDown ", () => {
    expect(isMoveOk(LEVEL, { x: 9, y: 9 }, { key: "ArrowDown" })).toBe(false);
  });
});

describe(`isGoal`, () => {
  test("isGoal - Level 1", () => {
    expect(isGoal(1, { x: 1, y: 11 })).toBe(true);
  });
  test("isGoal - Level 2", () => {
    expect(isGoal(2, { x: 6, y: 3 })).toBe(true);
  });
  test("isGoal - Level 3", () => {
    expect(isGoal(3, { x: 3, y: 11 })).toBe(true);
  });
  test("isGoal - Level 4", () => {
    expect(isGoal(4, { x: 3, y: 11 })).toBe(true);
  });
});

describe(`setNewPosition`, () => {
  test("setNewPosition - ArrowRight", () => {
    expect(setNewPosition({ x: 7, y: 2 }, "ArrowRight")).toStrictEqual({
      x: 7,
      y: 3,
    });
  });
  test("setNewPosition - ArrowUp", () => {
    expect(setNewPosition({ x: 7, y: 2 }, "ArrowUp")).toStrictEqual({
      x: 6,
      y: 2,
    });
  });
  test("setNewPosition - ArrowLeft", () => {
    expect(setNewPosition({ x: 7, y: 2 }, "ArrowLeft")).toStrictEqual({
      x: 7,
      y: 1,
    });
  });
  test("setNewPosition - ArrowDown", () => {
    expect(setNewPosition({ x: 7, y: 2 }, "ArrowDown")).toStrictEqual({
      x: 8,
      y: 2,
    });
  });
});

// describe(`getPlayerPosition`, () => {
//   test("getPlayerPosition - Level 1", () => {
//     expect(getPlayerPosition(1)).toStrictEqual({ x: 7, y: 2 });
//   });
//   test("getPlayerPosition - Level 2", () => {
//     expect(getPlayerPosition(2)).toStrictEqual({ x: 1, y: 0 });
//   });
//   test("getPlayerPosition - Level 3", () => {
//     expect(getPlayerPosition(3)).toStrictEqual({ x: 7, y: 2 });
//   });
//   test("getPlayerPosition - Level 4", () => {
//     expect(getPlayerPosition(4)).toStrictEqual({ x: 7, y: 2 });
//   });
// });
