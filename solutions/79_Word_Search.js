// https://leetcode.com/problems/word-search/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    // const findTurn = (prevCoords, nextLetter) => {
    //     const [x, y] = prevCoords;
    //     const directions = [
    //         [x, y - 1],
    //         [x, y + 1],
    //         [x - 1, y],
    //         [x + 1, y],
    //     ].filter(
    //         (dir) =>
    //             dir[0] >= 0 &&
    //             dir[1] >= 0 &&
    //             dir[1] <= board.length - 1 &&
    //             dir[0] <= board[0].length - 1
    //     );
    //     const newCoords = [];
    //     directions.forEach((dir) => {
    //         if (board[dir[1]][dir[0]] === nextLetter) {
    //             newCoords.push(dir);
    //         }
    //     });
    //     return newCoords;
    // };

    // const findFirst = () => {
    //     const coords = [];

    //     for (let y = 0; y < board.length; y++) {
    //         for (let x = 0; x < board[0].length; x++) {
    //             if (board[y][x] === word.charAt(0)) {
    //                 coords.push([x, y]);
    //             }
    //         }
    //     }

    //     return coords;
    // };

    const h = board.length;
    const w = board[0].length;
    const isOutOfTheBounds = (i, j) => i < 0 || i >= h || j < 0 || j >= w;

    const step = (x, y, letterIndex) => {
        if (isOutOfTheBounds(x, y)) return false;
        if (board[x][y] !== word[letterIndex]) return false;
        if (letterIndex === word.length - 1) return true;

        // recursion
        board[x][y] = "*"; // mark as visited
        let result = false;
        result =
            step(x + 1, y, letterIndex + 1) ||
            step(x - 1, y, letterIndex + 1) ||
            step(x, y + 1, letterIndex + 1) ||
            step(x, y - 1, letterIndex + 1);
        board[x][y] = word[letterIndex]; // reset
        return result;
    };

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (step(i, j, 0)) return true;
        }
    }

    return false;
};

console.log(
    exist(
        [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"],
        ],
        "ABCCED"
    )
); // true
console.log(
    exist(
        [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"],
        ],
        "SEE"
    )
); // true
console.log(
    exist(
        [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"],
        ],
        "ABCB"
    )
); // false
