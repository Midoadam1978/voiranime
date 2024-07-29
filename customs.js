var button = document.createElement("p");

button.innerText = "Voir le Site Voiranime >>";

button.className = "btn";

button.addEventListener("click", function() {
  
  window.open("https://voiranime.vip", "_blank");
});
document.getElementById("btncnt").appendChild(button);
