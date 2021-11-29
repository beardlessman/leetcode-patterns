/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
// 240 ms, faster than 74.04%
var construct2DArray = function (original, m, n) {
    if (original.length !== m * n) {
        return [];
    }

    let result = [];

    for (let i = 0; i < m; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            let index = i * n + j;
            row.push(original[index]);
        }

        result.push(row);
    }

    return result;
};

console.log(construct2DArray([1, 2, 3, 4], 2, 2)); // [[1, 2], [3, 4]]
console.log(construct2DArray([1, 2, 3], 1, 3)); // [[1, 2, 3]]
console.log(construct2DArray([1, 2], 1, 1)); // []
console.log(construct2DArray([3], 1, 2)); // []
