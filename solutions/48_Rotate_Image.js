// https://leetcode.com/problems/rotate-image/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// 80 ms, faster than 35.58%
// var rotate = function (matrix) {
//     let len = matrix.length - 1;
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[0].length; j++) {
//             let item = String(matrix[i][j]).split("_")[0];

//             let nextJ = len - i;
//             let nextI = j;

//             // console.log({ item, prevI: i, prevJ: j, nextI, nextJ });

//             matrix[nextI][nextJ] = `${matrix[nextI][nextJ]}_${item}`;
//         }
//     }

//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[0].length; j++) {
//             let item = Number(String(matrix[i][j]).split("_")[1]);
//             matrix[i][j] = item;
//         }
//     }

//     console.log(matrix);
// };

var transpose = function (matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (j = i; j < matrix.length; j++) {
            if (i !== j) {
                let temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
    }
};

var reverse = function (matrix) {
    const length = matrix.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length / 2; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][length - 1 - j];
            matrix[i][length - 1 - j] = temp;
        }
    }
};

// 72 ms, faster than 78.78%
var rotate = function (matrix) {
    transpose(matrix)
    reverse(matrix)
}

// rotate([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]);
// [
//     [7, 4, 1],
//     [8, 5, 2],
//     [9, 6, 3],
// ];

// rotate([
//     [5, 1, 9, 11],
//     [2, 4, 8, 10],
//     [13, 3, 6, 7],
//     [15, 14, 12, 16],
// ]);
// [
//     [15, 13, 2, 5],
//     [14, 3, 4, 1],
//     [12, 6, 8, 9],
//     [16, 7, 10, 11],
// ];
// rotate([[1]]); // [[1]]

// rotate([
//     [1, 2],
//     [3, 4],
// ]);
// [[3,1],[4,2]]
