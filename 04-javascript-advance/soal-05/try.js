// const checkValidText = (char) => {
//    const validText = new RegExp(/[a-z]/i);
 
//    return validText.test(char);
//  };
 
//  const checkVokalText = (char) => {
//    const vocal = ["a", "i", "u", "e", "o"];
 
//    return vocal.includes(char) ? "vokal" : "konsonan";
//  };
//  const testCase = ["mempertanggunjawabkan", "merdeka!", "100", "Amin"]
 
//  testCase.map((word) => {
//    const w = word
//      .toLowerCase()
//      .split("")
//      .map((char) => {
//        const valid = checkValidText(char);
//        return valid ? checkVokalText(char) : "invalid";
//      });
 
//    console.log(w.toString());
//  });
 
 // const word = "a/lex,"
 // const valid = word.split("").map((char) =>{
 //   return checkValidText(char)
 // })
 
 // console.log(valid)
 
 // const c = 'v'
 // console.log(checkVokalText(c.toLowerCase()))

 // const checkWord = ["mempertanggungjawabkan", "merdeka!", "100", "Amin"]

// document.getElementById("myInput").addEventListener("change", (e) =>{
//   const word = e.target.value
//   const w = word
//      .toLowerCase()
//      .split("")
//      .map((char) => {
//         const valid = checkChar(char)
//         return valid ? vowel(char):"invalid"
//      })

//      document.getElementById("text").innerHTML = word
//      document.getElementById("result").innerHTML = w.toString()
//      e.target.value =""
//      // console.log(w.toString())
// })
