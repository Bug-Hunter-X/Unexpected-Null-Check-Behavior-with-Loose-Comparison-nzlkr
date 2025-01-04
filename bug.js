function foo(a, b) {
  if (a === null || b === null) {
    return null; // This will not always return null if a or b is undefined
  }  
  // ... rest of the function
}