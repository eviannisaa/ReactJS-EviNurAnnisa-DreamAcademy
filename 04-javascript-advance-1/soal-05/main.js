function checkChar (char){
   const cChar = new RegExp(/[a-z]/i);
   return cChar.test(char)
}

function vowel (char){
   const cVowel = ["a", "i", "u", "e", "o"]
   return cVowel.includes(char) ? "vokal" : "konsonan"
}

const checkWord = ["mempertanggungjawabkan", "merdeka!", "100", "Amin"]

checkWord.map((word)=>{
   const w = word
      .toLowerCase()
      .split("")
      .map((char) => {
         const valid = checkChar(char)
         return valid ? vowel(char):"invalid"
      })
      console.log(w.toString())
})