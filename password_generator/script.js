const generateBtn = document.querySelector(".btn");
const choices = document.querySelectorAll(".choices input")
const slider = document.querySelector(".pass-length input");
const number = document.querySelector(".number");
const inputPassword = document.querySelector(".input input")

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@%&"
}

const updateSlider = function(){
    number.style.display = "block";
    return number.innerHTML = `${slider.value}`;
}

const makePasword = function(){
    let password = "";
    let passLength = slider.value;
    let newPassword = "";
    // console.log(options);
    

    choices.forEach(choice => {
        if(choice.checked){
            password += characters[choice.value]; 
        }
    });

    for (let i = 0; i < passLength; i++) {
        newPassword += password[Math.floor(Math.random() * password.length)];
        
    }
    // console.log(newPassword);
    inputPassword.value = newPassword;
    
}

// lowercase.addEventListener("click", function(){
//     console.log('Lowercase was selected');  
// })

slider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", makePasword);

