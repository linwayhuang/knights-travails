export function knightMoves(start, end) {
  // All possible knight moves
  const moves = [
    [2, 1], [1, 2], [-1, 2], [-2, 1],
    [-2, -1], [-1, -2], [1, -2], [2, -1],
  ];

  // Check if position is valid on 8x8 board
  const isValid = ([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8;

  // BFS queue, storing current position and path
  const queue = [[start, [start]]];
  const visited = new Set([start.toString()]);

  while (queue.length > 0) {
    const [pos, path] = queue.shift();
    const [x, y] = pos;

    // If we reached the target
    if (x === end[0] && y === end[1]) {
        console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
        path.forEach(p => console.log(p));
        return path;
    }

    // Explore all possible knight moves
    for (let [dx, dy] of moves) {
      const next = [x + dx, y + dy];
      if (isValid(next) && !visited.has(next.toString())) {
        visited.add(next.toString());
        queue.push([next, [...path, next]]);
      }
    }
  }

  return null; // Should never happen for valid inputs
}