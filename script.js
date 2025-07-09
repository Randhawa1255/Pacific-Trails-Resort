const menu = document.getElementById("menu")
const navbar = document.getElementsByTagName("nav")[0]
menu.addEventListener("click", () => {
    if (navbar.classList.contains("menuremove")) {
        navbar.classList.remove("tempremove")
        navbar.classList.remove("menuremove")
        navbar.classList.add("menumove")
    }
    else {
        navbar.classList.remove("tempremove")
        navbar.classList.remove("menumove");
        navbar.classList.add("menuremove");
    }
    
})