const textInput = document.querySelector(".input input");
const btn = document.querySelector(".arrow-btn");
const result = document.querySelector(".result");
let reverseInput;

btn.addEventListener('click', function(){
    reverseInput = textInput.value.split("").reverse().join(""); 
    result.style.display = "block";
    if(reverseInput.toLowerCase() == textInput.value.toLowerCase()){
        return result.innerHTML = `Yes <span>"${textInput.value}"</span> is a palindrome!`;    
    }
    else{
        return result.innerHTML = `No <span>"${textInput.value}"</span> is not a palindrome!`;   
    }
})