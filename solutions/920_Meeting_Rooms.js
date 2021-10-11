// https://leetcode.com/problems/meeting-rooms
// https://www.lintcode.com/problem/920/

/**
 * canAttendMeetings
 *
 * @param intervals: an array of meeting time intervals
 * @return: if a person could attend all meetings
 */
function canAttendMeetings(intervals) {
  return intervals
    .sort((a, b) => (a[0] > b[0] ? 1 : -1))
    .reduce((acc, item, index) => {
      if (!acc) {
        return acc;
      }

      if (index === 0) {
        return true;
      }

      return item[0] > intervals[index - 1][1];
    }, true);
}

console.log(
  canAttendMeetings([
    [5, 10],
    [15, 20],
    [0, 30],
  ])
); // false
console.log(
  canAttendMeetings([
    [5, 8],
    [9, 15],
  ])
); // true
