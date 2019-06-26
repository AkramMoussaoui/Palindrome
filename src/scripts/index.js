function Palindrome(mot){
  mot = mot.replace(/[^0-9a-zA-Z]/g, '')
  mot = mot.toLowerCase()
  console.log(mot)
  let i = 0
  let j = mot.length - 1
  while(j > i){
    if (mot[i] !== mot[j - i])
      return false
    i++;
  }
  return true
}

let mot = prompt("Donner le mot")

console.log(Palindrome(mot))

