// You are given row x col grid representing a map where grid[i][j] = 1 
// represents land and grid[i][j] = 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). 
// The grid is completely surrounded by water, and there is exactly one 
// island (i.e., one or more connected land cells).

// The island doesn't have "lakes", meaning the water inside isn't 
// connected to the water around the island. One cell is a square with side length 1. 
// The grid is rectangular, width and height don't exceed 100. 
// Determine the perimeter of the island.

// Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// Output: 16
// Explanation: The perimeter is the 16 yellow stripes in the image above.

// Example 2:
// Input: grid = [[1]]
// Output: 4

// Example 3:
// Input: grid = [[1,0]]
// Output: 4


// Constraints:

// row == grid.length
// col == grid[i].length
// 1 <= row, col <= 100
// grid[i][j] is 0 or 1.
// There is exactly one island in grid.

function islandPerimeter(grid) {
    let perimeter = 0;
    let row = grid.length;
    let col = grid[0].length;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (i == 0) {
                if (grid[i][j] == 1) { perimeter++; }
            } else {
                if (grid[i][j] == 1 && (grid[i - 1][j] == 0)) perimeter++;
            }

            if (j == 0) {
                if (grid[i][j] == 1) { perimeter++; }
            } else {
                if (grid[i][j] == 1 && (grid[i][j - 1] == 0)) perimeter++;
            }

            if (i == (row - 1)) {
                if (grid[i][j] == 1) { perimeter++; }
            } else {
                if (grid[i][j] == 1 && (grid[i + 1][j] == 0)) perimeter++;
            }

            if (j == (col - 1)) {
                if (grid[i][j] == 1) { perimeter++; }
            } else {
                if (grid[i][j] == 1 && (grid[i][j + 1] == 0)) perimeter++;
            }
        }
    }

    return perimeter;
}

function islandPerimeterDirection(grid) {
    let perimeter = 0;
    const row = grid.length, col = grid[0].length;
    const direction = [
        [-1, 0],    // UP
        [1, 0],     // Down
        [0, -1],    // Left
        [0, 1]      // Right
    ];

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] == 1) {
                for (const [x, y] of direction) {
                    const ix = i + x, jy = j + y;
                    if (ix < 0 || jy < 0 || ix >= row || jy >= col || grid[ix][jy] == 0) perimeter++;
                }
            }
        }

    }
    return perimeter;
}


grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]] // 16
console.log("islandPerimeter:", islandPerimeter(grid));
console.log("islandPerimeterDirection:", islandPerimeterDirection(grid));

grid = [[1]] // 4
console.log("islandPerimeter:", islandPerimeter(grid));
console.log("islandPerimeterDirection:", islandPerimeterDirection(grid));

grid = [[1, 0]] // 4
console.log("islandPerimeter:", islandPerimeter(grid));
console.log("islandPerimeterDirection:", islandPerimeterDirection(grid));