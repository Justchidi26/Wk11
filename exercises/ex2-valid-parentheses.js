/**
 * Exercise 2 — Valid Parentheses (stack)
 *
 * Problem:
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * A string is valid if:
 * - Open brackets are closed by the same type of brackets.
 * - Open brackets are closed in the correct order.
 *
 * Run:
 *   node exercises/ex2-valid-parentheses.js
 */

function isValidParentheses(s) {
  // TODO:
  // 1) Create an empty stack array
  // 2) Create a map of closing->opening brackets: { ')':'(', ']':'[', '}':'{' }
  // 3) Iterate through characters:
  //    - if it's an opening bracket, push to stack
  //    - if it's a closing bracket:
  //        - pop last opening
  //        - if it doesn't match, return false
  // 4) At the end, string is valid if stack is empty
  
  // 1) stack
  const stack = [];

  // 2) map of closing → opening
  const map = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  // 3) iterate through characters
  for (const char of s) {

    // if opening bracket → push
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } 
    // if closing bracket
    else {
      const last = stack.pop();

      // check if it matches
      if (last !== map[char]) {
        return false;
      }
    }
  }

  // 4) stack must be empty
  return stack.length === 0;
}

const tests = [
  { input: "()", expected: true },
  { input: "()[]{}", expected: true },
  { input: "(]", expected: false },
  { input: "([)]", expected: false },
  { input: "{[]}", expected: true },
  { input: "(((", expected: false }
];

console.log("\n=== Valid Parentheses Tests ===");
for (const { input, expected } of tests) {
  const result = isValidParentheses(input);
  console.log(`${input.padEnd(8)} => ${String(result).padEnd(5)} (expected ${expected})`);
}

