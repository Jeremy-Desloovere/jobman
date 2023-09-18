interface PlaygroundItem {
  id: number;
  name: string;
  start: { x: number; y: number };
  map: string[];
}

export const playground: PlaygroundItem[] = [
  {
    id: 1,
    name: "Le Labyrinthe",
    start: { x: 7, y: 2 },
    map: [
      "xxxxxxxxx**x-",
      "x********xxxx",
      "xxxxxxxx*x**x",
      "xx*****xxx*x*",
      "xxxxxx*x***x*",
      "****x**x*xxx*",
      "xxx*xx*x*xxxx",
      "x*x**x**xx*xx",
      "x***xxxxxx*xx",
      "xxxxxx*****xx",
    ],
  },
  {
    id: 2,
    name: "Le serpent",
    start: { x: 1, y: 0 },
    map: [
      "*************",
      "xxxxxxxxxxxx*",
      "***********x*",
      "*xxxxxxxxx*x*",
      "*x*******x*x*",
      "*x*-*****x*x*",
      "*x*xxxxxxx*x*",
      "*x*********x*",
      "*xxxxxxxxxxx*",
      "*************",
    ],
  },
  {
    id: 3,
    name: "Les murs transparents",
    start: { x: 9, y: 2 },
    map: [
      "**xxxxx******",
      "*xxxxmxxxxxm*",
      "*xm***x**x*mm",
      "*xxxxmxxmm***",
      "*xxmxm*x*x***",
      "*mx*xxmxxxmm*",
      "*mx**x*x*xxx*",
      "*xx**xxx*mmxx",
      "*xx*mmxm*-xxm",
      "**xxx******mm",
    ],
  },
  {
    id: 4,
    name: "Où sont les murs ?",
    start: { x: 2, y: 0 },
    map: [
      "mmmmmmmmmmmmm",
      "mmmmmmmxxxmx-",
      "xxxxxmxxmxmxm",
      "mmmmxmxmmxmxm",
      "mmmmxmxmmxmxm",
      "mmxxxmxmmxmxm",
      "mmxmmmxmxxmxm",
      "mmxxxxxmxmmxm",
      "mmmmmmmmxxxxm",
      "mmmmmmmmmmmmm",
    ],
  },
];
