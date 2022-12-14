// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3


/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const visited = new Set();
    let count = 0;
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (explore(grid, r, c, visited)) {
                count++;
            }
        }
    }
    return count;
};

const explore = (grid, r, c, visited) => {
    if (!isInBound(grid, r, c) || grid[r][c] === '0') return false;

    const pos = r + ',' + c;
    if (visited.has(pos)) return false;
    visited.add(pos);

    explore(grid, r + 1, c, visited);
    explore(grid, r - 1, c, visited);
    explore(grid, r, c + 1, visited);
    explore(grid, r, c - 1, visited);

    return true;
};

const isInBound = (grid, r, c) => {
    const rowInBound = r >= 0 && r < grid.length;
    const colInBound = c >= 0 && c < grid[0].length;
    return rowInBound && colInBound;
};

