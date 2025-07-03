const colorPickBtn = document.querySelector(".picker button");
const colorList = document.querySelector(".all-colors");
const clearAll = document.querySelector(".clear-all");
const colorsFound = JSON.parse(localStorage.getItem("picked-colors") || "[]");

const copyColor = elem => {
    navigator.clipboard.writeText(elem.dataset.color);
    elem.innerText = "Copied";
    setTimeout(() => elem.innerText = elem.dataset.color, 1000);
    
}

const showColors = function() {
    if(!colorsFound.length) return;
    colorList.innerHTML = colorsFound.map(color => `
        <li class="color">
            <span class="box" style="background: ${color}; border: 1px solid ${color == "#ffffff" ? "#ccc" : color}"></span>
            <span class="value" data-color="${color}">${color}</span>
        </li>
    `).join("");
    document.querySelector(".picked-colors").classList.remove("hide");

    document.querySelectorAll(".color").forEach(li => {
        li.addEventListener("click", e => copyColor(e.currentTarget.lastElementChild));
    });
}

showColors();

const activateEyeDropper = async function(){
    try{
        const eyeDropper = new EyeDropper();
        const {sRGBHex}  = await eyeDropper.open();
        navigator.clipboard.writeText(sRGBHex);

        if(!colorsFound.includes(sRGBHex)) {
            colorsFound.push(sRGBHex);
            localStorage.setItem("picked-colors", JSON.stringify(colorsFound));
            showColors();
        }
    } catch (error) {
        console.log(error);   
    }
}

const clearAllColors = () => {
    colorsFound.length = 0;
    localStorage.setItem("picked-colors", JSON.stringify(colorsFound));
    document.querySelector(".picked-colors").classList.add("hide");
}

clearAll.addEventListener("click", clearAllColors);
colorPickBtn.addEventListener("click", activateEyeDropper);
