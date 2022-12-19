window.addEventListener('scroll', () => {
    if(window.scrollY > 0 ) {
        document.getElementById("nav_fixe").style.boxShadow = "0px 2px 10px rgb(161, 161, 161)";
        document.getElementById("nav_fixe").style.backgroundColor = "#eadfc1";

    }
    else{
        document.getElementById("nav_fixe").style.boxShadow = "none";
        document.getElementById("nav_fixe").style.backgroundColor = "#faedcd";
    }
});