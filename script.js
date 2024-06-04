function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
// Add functionality to the start button
document.getElementById("startButton").addEventListener("click", function() {
    // Add your code here to handle what happens when the start button is clicked
    alert("The game is starting!");
});
