const menuIcion = document.getElementById("menu");
const navDisplay = document.getElementById("menu-icon");
menuIcion.addEventListener("click", function () { 
    console.log(`Menu button clicked!!`);
    if (navDisplay.classList.contains("hidden")) {
        navDisplay.classList.remove("hidden");
    } else { 
        navDisplay.classList.add("hidden");
    }
})