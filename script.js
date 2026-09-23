function scrollToMenu() {
    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });
}

function orderFood(foodName) {
    alert("🍴 You selected: " + foodName +  "\n\nThank you for choosing Foodie!");
}