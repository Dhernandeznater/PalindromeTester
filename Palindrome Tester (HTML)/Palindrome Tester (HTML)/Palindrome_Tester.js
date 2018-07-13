let inputWord = document.querySelector("#testWord");


var testButton = document.querySelector("#Test");


function testWord()
{
  var testWord = inputWord.value;
  testWord = testWord.replace(/[^a-zA-Z-]/g, "");
  let displayWord = testWord;
  testWord = testWord.toLowerCase();
  var testArray = testWord.split("");
  var reverseArray = testWord.split("");
  reverseArray = reverseArray.reverse();
  var reverseWord = reverseArray.join("");
  console.log(reverseWord);
  if(testWord == reverseWord)
    alert(displayWord + " is a palindrome!");
  else
    alert(displayWord + " is not a palindrome")


}

testButton.addEventListener("click", ()=>
{
  testWord();
})
