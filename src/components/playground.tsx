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
  map: string[];
}

export const playground: PlaygroundItem[] = [
  {
    id: 1,
    name: "Le Labyrinthe",
    map: [
      "xxxxxxxxx**xx",
      "x********xx-x",
      "xxxxxxxx*x**x",
      "xx*****xxx*x*",
      "xxxxxx*x***x*",
      "****x**x*xxx*",
      "xxx*xx*x*xxxx",
      "x*o**x**xx*xx",
      "x***xxxxxx*xx",
      "xxxxxx*****xx",
    ],
  },
  {
    id: 2,
    name: "Le serpent",
    map: [
      "*************",
      "oxxxxxxxxxxx*",
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
    map: [
      "xxxxxxxxxx*xx",
      "x*****x**xmxx",
      "mxxxxxxm*x*xx",
      "xx*****xxxx-*",
      "mxxxxx*x***x*",
      "****xm*x*xxx*",
      "xxx*xx*x*xxxx",
      "x*o*mx**xm*xx",
      "x***xxxxxx*xx",
      "xxxxxx*****xx",
    ],
  },
  {
    id: 4,
    name: "Où sont les murs ?",
    map: [
      "xxxxxxxxxx*xx",
      "x*****x**xmxx",
      "mxxxxxxm*x*xx",
      "xx*****xxxx-*",
      "mxxxxx*x***x*",
      "****xm*x*xxx*",
      "xxx*xx*x*xxxx",
      "x*o*mx**xm*xx",
      "x***xxxxxx*xx",
      "xxxxxx*****xx",
    ],
  },
];
