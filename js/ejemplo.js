document.addEventListener("DOMContentLoaded", function(event) {
    moveButton();
});

function moveButton() {
    var button = document.getElementById("noBtn");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var buttonWidth = button.offsetWidth;
    var buttonHeight = button.offsetHeight;
    var maxX = windowWidth - buttonWidth;
    var maxY = windowHeight - buttonHeight;
    var xPos = Math.random() * maxX;
    var yPos = Math.random() * maxY;
    button.style.position = "absolute";
    button.style.left = xPos + "px";
    button.style.top = yPos + "px";
}
alert("Contestala pleaseeee, si puedes grabarte o grabar la pantalla mientras respondes, mucho mejor:)");