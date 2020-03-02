function myFunction(x) {
    x.classList.toggle("change");
    var navigation = document.getElementById("navhide");
    if (navigation.style.display === "flex") {
        navigation.style.display = "none";
    } else {
        navigation.style.display = "flex";
    }
}
