async function startHacking() {
    setTimeout(() => {
        document.getElementById("terminal").innerHTML = "Initialize Hacking..." 
    }, 1000);

    setTimeout(() => {
        document.getElementById("terminal1").innerHTML = "Reading your Files..."
    }, 7000);

    setTimeout(() => {
        document.getElementById("terminal2").innerHTML = "Password files Detected..."
    }, 14000);

    setTimeout(() => {
        document.getElementById("terminal3").innerHTML = "Sending all passwords and personal files to server..."
    }, 21000);

    setTimeout(() => {
        document.getElementById("terminal4").innerHTML = "Cleaning up..."
    }, 28000);
   
}

startHacking()