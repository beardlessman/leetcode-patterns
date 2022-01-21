// https://leetcode.com/problems/letter-case-permutation/

/**
 * @param {string} s
 * @return {string[]}
 */

// 101 ms, faster than 52.59%
var letterCasePermutation = function (s) {
    let result = new Set();

    const getVariants = (s, i) => {
        if (i >= s.length) {
            return;
        }

        let newS = s.slice(0, i) + s[i].toUpperCase() + s.slice(i + 1);

        result.add(s);
        result.add(newS);

        getVariants(newS, i + 1);
        getVariants(s, i + 1);
    };

    getVariants(s.toLowerCase(), 0);

    return Array.from(result);
};

var letterCasePermutation = function (S) {
    const result = [S];
    for (let i = 0; i < S.length; i++) {
        if (/[0-9]/.test(S[i])) continue;
        const size = result.length;
        for (let j = 0; j < size; j++) {
            const node = result.shift();
            result.push(
                node.slice(0, i) + node[i].toLowerCase() + node.slice(i + 1)
            );
            result.push(
                node.slice(0, i) + node[i].toUpperCase() + node.slice(i + 1)
            );
        }
    }
    return result;
};

console.log(letterCasePermutation("a1b2")); // ["a1b2","a1B2","A1b2","A1B2"]
console.log(letterCasePermutation("3z4")); // ["3z4","3Z4"]
