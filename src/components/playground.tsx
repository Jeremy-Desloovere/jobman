// export const playground = [
//   "xxxxxxxxx**xx",
//   "x********xx-x",
//   "xxxxxxxx*x**x",
//   "xx*****xxx*x*",
//   "xxxxxx*x***x*",
//   "****x**x*xxx*",
//   "xxx*xx*x*xxxx",
//   "x*x**x**xx*xx",
//   "x***xxxxxx*xx",
//   "xxxxxx*****xx",
// ];

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
    start: { x: 1, y: 10 }, //7.2
    map: [
      "xxxxxxxxx**xx",
      "x********xx-x",
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
    start: { x: 6, y: 4 }, //1.0
    map: [
      "*************",
      "xxxxxxxxxxxx*",
      "***********x*",
      "*xxxxxxxxx*x*",
      "*x*******x*x*",
      "*x*******x*x*",
      "*x*-xxxxxx*x*",
      "*x*********x*",
      "*xxxxxxxxxxx*",
      "*************",
    ],
  },
  {
    id: 3,
    name: "Les murs transparents",
    start: { x: 3, y: 10 }, //7.2
    map: [
      "xxxxxxxxxx*xx",
      "x*****x**xmxx",
      "mxxxxxxm*x*xx",
      "xx*****xxxx-*",
      "mxxxxx*x***x*",
      "****xm*x*xxx*",
      "xxx*xx*x*xxxx",
      "x*x*mx**xm*xx",
      "x***xxxxxx*xx",
      "xxxxxx*****xx",
    ],
  },
  {
    id: 4,
    name: "Où sont les murs ?",
    start: { x: 3, y: 10 }, //7.2
    map: [
      "xxxxxxxxxx*xx",
      "x*****x**xmxx",
      "mxxxxxxm*x*xx",
      "xx*****xxxx-*",
      "mxxxxx*x***x*",
      "****xm*x*xxx*",
      "xxx*xx*x*xxxx",
      "x*x*mx**xm*xx",
      "x***xxxxxx*xx",
      "xxxxxx*****xx",
    ],
  },
];
