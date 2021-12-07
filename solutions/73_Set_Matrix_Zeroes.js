// https://leetcode.com/problems/set-matrix-zeroes/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// 84 ms, faster than 98.07%
// var setZeroes = function (matrix) {
//     let rows = [];
//     let cols = [];
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[0].length; j++) {
//             if (matrix[i][j] === 0) {
//                 rows.push(i);
//                 cols.push(j);
//             }
//         }
//     }

//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[0].length; j++) {
//             if (rows.indexOf(i) > -1 || cols.indexOf(j) > -1) {
//                 matrix[i][j] = 0;
//             }
//         }
//     }

//     return matrix;
// };

// 96 ms, faster than 72.79% 
var setZeroes = function (matrix) {
    const setZeroesInInnerMatrix = (matrix) => {
        for (let i = 1; i < matrix.length; i++) {
            for (j = 1; j < matrix[0].length; j++) {
                if (matrix[i][j] === 0) {
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }

        for (let i = 1; i < matrix.length; i++) {
            for (j = 1; j < matrix[0].length; j++) {
                if (matrix[0][j] === 0 || matrix[i][0] === 0) {
                    matrix[i][j] = 0;
                }
            }
        }
    };

    let isRowZero = false;
    let isColZero = false;

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            isColZero = true;
        }
    }

    for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[0][i] === 0) {
            isRowZero = true;
        }
    }

    setZeroesInInnerMatrix(matrix);

    for (let i = 0; i < matrix.length; i++) {
        if (isColZero) {
            matrix[i][0] = 0
        }
    }

    for (let i = 0; i < matrix[0].length; i++) {
        if (isRowZero) {
            matrix[0][i] = 0
        }
    }

    return matrix;
};

console.log(
    setZeroes([
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
    ])
); // [[1,0,1],[0,0,0],[1,0,1]]

console.log(
    setZeroes([
        [0, 1, 2, 0],
        [3, 4, 5, 2],
        [1, 3, 1, 5],
    ])
); // [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
