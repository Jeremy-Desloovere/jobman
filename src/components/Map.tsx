import React, { use, useEffect, useState } from "react";
import { playground } from "@/components/playground";

interface ColorMap {
  [key: string]: string;
}

const colors: ColorMap = {
  x: "bg-gray-300",
  "*": "bg-red-400",
  "-": "bg-job bg-gray-300",
  o: "bg-me bg-blue-300",
  m: "bg-gray-300",
};

type Position = {
  x: number;
  y: number;
};

interface MapProps {
  level: number;
  playerPosition: Position;
}

export const Map: React.FC<MapProps> = ({ level, playerPosition }) => {
  const [currentMap, setCurrentMap] = useState(playground[0].map);

  useEffect(() => {
    setCurrentMap(playground[level].map);
  }, [level]);

  const transformedMap = currentMap.map((row, rowIndex) =>
    row.split("").map((symbol, colIndex) => {
      if (symbol === "o") {
        return "x";
      } else if (
        rowIndex === playerPosition.x &&
        colIndex === playerPosition.y
      ) {
        return "o";
      } else {
        return symbol;
      }
    })
  );

  console.log("Transformed Map:", transformedMap);
  console.log("Player Position:", playerPosition);

  return (
    <div className="flex flex-wrap w-[39rem] bg-white">
      {transformedMap.map((row, rowIndex) =>
        row.map((symbol: string | number, colIndex: any) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`w-12 h-12 bg-cover  ${colors[symbol]}`}
          ></div>
        ))
      )}
    </div>
  );
};
