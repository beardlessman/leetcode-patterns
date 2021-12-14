// https://leetcode.com/problems/spiral-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// 64 ms, faster than 95.68%
// var spiralOrder = function (matrix) {
//     const getTop = () => matrix.shift();
//     const getBottom = () => matrix.pop().reverse();
//     const getRight = () => {
//         let result = [];
//         for (let i = 0; i < matrix.length; i++) {
//             result.push(matrix[i].pop());
//         }
//         return result;
//     };
//     const getLeft = () => {
//         let result = [];
//         for (let i = 0; i < matrix.length; i++) {
//             result.push(matrix[i].shift());
//         }
//         return result.reverse();
//     };

//     let result = [];

//     while (matrix.length && matrix[0].length) {
//         result = [...result, ...getTop()];
//         if (matrix.length && matrix[0].length) {
//             result = [...result, ...getRight()];

//             if (matrix.length && matrix[0].length) {
//                 result = [...result, ...getBottom()];

//                 if (matrix.length && matrix[0].length) {
//                     result = [...result, ...getLeft()];
//                 }
//             }
//         }
//     }

//     return result;
// };

// var spiralOrder = function (matrix) {
//     const res = [];
//     while (matrix.length) {
//         const first = matrix.shift();
//         res.push(...first);
//         for (const m of matrix) {
//             let val = m.pop();
//             if (val) res.push(val);
//             m.reverse();
//         }
//         matrix.reverse();
//     }
//     return res;
// };

// 76 ms, faster than 45.81%
const spiralOrder = (matrix) => {
    let result = [];

    let top = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    let left = 0;

    let direction = 0;

    while (top <= bottom && left <= right) {
        if (direction === 0) {
            // left top -> right top
            for (let i = left; i < right + 1; i++) {
                result.push(matrix[top][i]);
            }
            top = top + 1;
            direction = 1;
        } else if (direction === 1) {
            // top right -> bottom right
            for (let i = top; i < bottom + 1; i++) {
                result.push(matrix[i][right]);
            }
            right = right - 1;
            direction = 2;
        } else if (direction === 2) {
            // right bottom -> left bottom
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom = bottom - 1;
            direction = 3;
        } else if (direction === 3) {
            //bottom left -> top left
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left = left + 1;
            direction = 0;
        }
    }
    return result;
};

console.log(
    spiralOrder([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])
); //  [1,2,3,6,9,8,7,4,5]
// console.log(
//     spiralOrder([
//         [1, 2, 3, 4],
//         [5, 6, 7, 8],
//         [9, 10, 11, 12],
//     ])
// ); //  [1,2,3,4,8,12,11,10,9,5,6,7]
// console.log(spiralOrder([[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]])); // [1,2,3,4,5,6,7,8,9,10]
// console.log(
//     spiralOrder([
//         [1, 2, 3, 4],
//         [5, 6, 7, 8],
//         [9, 10, 11, 12],
//         [13, 14, 15, 16],
//     ])
// ); // [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]
