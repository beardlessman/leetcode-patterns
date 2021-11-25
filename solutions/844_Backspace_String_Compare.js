/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// O(n) O(n)mem 133 ms, faster than 7.02%
// var backspaceCompare = function (s, t) {
//     const sclear = [];
//     const tclear = [];

//     s.split("").forEach((char) => {
//         if (char === "#") {
//             sclear.pop();
//         } else {
//             sclear.push(char);
//         }
//     });

//     t.split("").forEach((char) => {
//         if (char === "#") {
//             tclear.pop();
//         } else {
//             tclear.push(char);
//         }
//     });

//     return tclear.join("") === sclear.join("");
// };


// O(n) O(1)mem 85 ms, faster than 33.79%
var backspaceCompare = function (s, t) {
    const getCurrentIndex = (str, i) => {
        let toSkip = 0;

        while (i >= 0) {
            if (str[i] === "#") {
                toSkip += 1;
            } else if (toSkip > 0) {
                toSkip -= 1;
            } else {
                break;
            }

            i -= 1;
        }

        return i;
    };

    let sIndex = s.length - 1;
    let tIndex = t.length - 1;

    while (sIndex >= 0 || tIndex >= 0) {
        sIndex = getCurrentIndex(s, sIndex);
        tIndex = getCurrentIndex(t, tIndex);

        if (sIndex < 0 && tIndex < 0) {
            return true;
        } else if (s[sIndex] === t[tIndex]) {
            sIndex -= 1;
            tIndex -= 1;
        } else {
            return false;
        }
    }

    return true;
};

console.log(backspaceCompare("ab#c", "ad#c")); // true
console.log(backspaceCompare("ab##", "c#d#")); // true
console.log(backspaceCompare("a##c", "#a#c")); // true
console.log(backspaceCompare("a#c", "b")); // false
