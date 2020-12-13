function countLetters() {
  let word = document.querySelector("input").value
  console.log(word)
  let letters = word.length
  document.querySelector("p").innerHTML=letters
}