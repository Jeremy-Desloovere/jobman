import { isMoveOk } from "../../utils/functions";
import { isGoal } from "../../utils/functions";
import { setNewPosition } from "../../utils/functions";

const LEVEL = 0; // 0, 1, 2, 3

describe(`LEVEL ${LEVEL} : isMoveOk - Arrows`, () => {
  test("ArrowRight", () => {
    expect(isMoveOk(LEVEL, { x: 7, y: 2 }, "ArrowRight")).toBe(false);
  });

  test("ArrowUp ", () => {
    expect(isMoveOk(LEVEL, { x: 7, y: 2 }, "ArrowUp")).toStrictEqual({
      x: 6,
      y: 2,
    });
  });
  test("ArrowLeft ", () => {
    expect(isMoveOk(LEVEL, { x: 7, y: 2 }, "ArrowLeft")).toBe(false);
  });
  test("ArrowDown ", () => {
    expect(isMoveOk(LEVEL, { x: 7, y: 2 }, "ArrowDown")).toBe(false);
  });
});

describe(`LEVEL ${LEVEL} : limit of playground`, () => {
  test("limit - ArrowUp", () => {
    expect(isMoveOk(LEVEL, { x: 0, y: 0 }, "ArrowUp")).toBe(false);
  });

  test("limit - ArrowRight ", () => {
    expect(isMoveOk(LEVEL, { x: 9, y: 0 }, "ArrowRight")).toStrictEqual({
      x: 9,
      y: 1,
    });
  });
  test("limit - ArrowLeft ", () => {
    expect(isMoveOk(LEVEL, { x: 9, y: 0 }, "ArrowLeft")).toBe(false);
  });
  test("limit - ArrowRight ", () => {
    expect(isMoveOk(LEVEL, { x: 0, y: 9 }, "ArrowRight")).toBe(false);
  });
  test("limit - ArrowDown ", () => {
    expect(isMoveOk(LEVEL, { x: 9, y: 9 }, "ArrowDown")).toBe(false);
  });
});

describe(`isGoal`, () => {
  test("isGoal - Level 1", () => {
    expect(isGoal(LEVEL, { x: 0, y: 12 })).toBe(true);
  });
  test("isGoal - Level 2", () => {
    expect(isGoal(LEVEL + 1, { x: 5, y: 3 })).toBe(true);
  });
  test("isGoal - Level 3", () => {
    expect(isGoal(LEVEL + 2, { x: 8, y: 9 })).toBe(true);
  });
  test("isGoal - Level 4", () => {
    expect(isGoal(LEVEL + 3, { x: 1, y: 12 })).toBe(true);
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
