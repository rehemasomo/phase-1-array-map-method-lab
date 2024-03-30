function titleCased() {
  return tutorials.map(tutorial => {
    // Split the tutorial title into an array of words
    const words = tutorial.split(' ');

    // Capitalize the first letter of each word
    const titleCaseWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    // Join the words back together to form the title case tutorial name
    return titleCaseWords.join(' ');
  });
}

// Example usage:
const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

console.log(titleCased());

