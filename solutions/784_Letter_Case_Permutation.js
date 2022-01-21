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

// 84 ms, faster than 90.45%
var letterCasePermutation = function (s) {
    let result = new Set();

    const traverse = (current, s, i) => {
        if (current.length === s.length) {
            result.add(current);
            return;
        }

        traverse(current + s[i], s, i + 1);
        traverse(current + s[i].toUpperCase(), s, i + 1);
    };

    traverse("", s.toLowerCase(), 0);

    return Array.from(result);
};

console.log(letterCasePermutation("a1b2")); // ["a1b2","a1B2","A1b2","A1B2"]
console.log(letterCasePermutation("3z4")); // ["3z4","3Z4"]
