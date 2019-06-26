function Palindrome(mot){
  mot = mot.replace(/[^0-9a-zA-Z]/g, '')
  mot = mot.toLowerCase()
  let i = 0
  let j = mot.length - 1
  let text = (() => {
    while(j > i){
    if (mot[i] !== mot[j - i])
      return "N'est pas un palindrome"
    i++;
  }
  return "C'est un palindrome"
 })()
 document.getElementById("resultat").innerHTML = text;
}

let entrer = document.getElementById("entrer")
let mot = document.getElementById("mot")

entrer.addEventListener("click",() =>{
  Palindrome(mot.value)
  mot.value = ""
})
