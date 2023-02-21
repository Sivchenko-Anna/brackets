module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let brakets = new Map(bracketsConfig);

  for (let i = 0; i < str.length; i++) {
    const currentBracket = str[i];
    if (currentBracket == brakets.get(stack[stack.length - 1])) {
      stack.pop();
    } else {
      stack.push(currentBracket);
    }
  }
  return stack.length === 0;
}
