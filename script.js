const button = document.querySelector(".btn")
const pass = document.querySelector(".password")
const copyBtn = document.getElementById("copyBtn");
const feed = document.getElementById("feed");

const generatePassword = (length) =>{
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*+-*/=-_"
    let password = ""

    for( let i=1; i<=length; i++ ){
      const index =    Math.floor(Math.random() * chars.length)
      password +=  chars[index]
    }
    return password
}


// button.addEventListener("click",(e)=>{
//         e.preventDefault()
//         const length = Number(document.querySelector(".number").value)       
//         if(length <= 0 ){
//             alert("You have to put a Positive Numbers")
//         }
//         else{
//             pass.innerText = generatePassword(length)
//         }      
// })

button.addEventListener("click",(e)=>{
    e.preventDefault()
    const length = Number(document.querySelector(".number").value)
    if(length <= 0){
        alert("Please Provide a Positive Intergers")
    }else{
        pass.innerText = generatePassword(length)
    }
})

copyBtn.addEventListener("click", () => { 
    navigator.clipboard.writeText(pass.innerText)
    .then(() => {
        feed.innerText = "Text copied to clipboard!";
    })
    .catch(err => {
        feed.innerText = "Failed to copy text.";
        console.error("Error copying text: ", err);
    });
});