function isValid(s) {
  let stack = [];
  let pairs = {
    "(": ")",
    "{": "}",
    "[": "]"
  };

  for (let char of s) {
    if (pairs[char]) {
      stack.push(char); // Masukkan kurung buka ke stack
    } else {
      if (stack.length === 0 || pairs[stack.pop()] !== char) {
        return false; // Jika stack kosong atau pasangan tidak cocok, return false
      }
    }
  }

  return stack.length === 0; // Stack harus kosong jika valid
}

// Contoh pengujian
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("("));      // Output: false
console.log(isValid("({[]})")); // Output: true
console.log(isValid("({[}]"));  // Output: false
