// 

const str = "I really love cats. My cat is such an amazing pet. She loves to cuddle with me and play. What a great cat. cat. cat. cat.";

console.log(str.replaceAll("cat", "dog"));

// Combining it with regular expression to combat case sensitivity
const str2 = "I really love cats. My cAt is such an amazing pet. She loves to cuddle with me and play. What a great CAT. caT. cat. Cat.";

console.log(str2.replaceAll(new RegExp("cat", "gi"), "dog"));

