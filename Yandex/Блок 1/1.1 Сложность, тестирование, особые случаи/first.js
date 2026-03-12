const input = "0 1 0 2"

let result;

const [P, V, Q, M] = input.split(" ").map(Number);

const trees_intervals = [
  [P - V, P + V],
  [Q - M, Q + M],
];

trees_intervals.sort((first, second) => first[0] - second[0]);

console.log(trees_intervals)
const first = trees_intervals[0];
const second = trees_intervals[1];

if (first[1] >= second[0]) {
  result = Math.abs(Math.min(first[0], first[1], second[0], second[1])) 
            + Math.abs(Math.max(first[0], first[1], second[0], second[1])) + 1;
} else {
  let sasha_trees = first[1] - first[0] + 1;
  let masha_trees = second[1] - second[0] + 1;
  result = sasha_trees + masha_trees;
}

console.log(result);
