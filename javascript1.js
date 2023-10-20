//1. Reverse of the word

const str = 'This is a sunny day';
const reverseSentence = str => {
   const arr = str.split(" ");
   const reversed = arr.map(d => {
      return d.split('').reverse().join("");
   });
   return reversed.join(" ");
};
console.log(reverseSentence(str));