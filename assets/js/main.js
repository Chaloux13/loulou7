document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".ad-button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      button.classList.add("clicked");  // Ajouter une classe pour l'effet
      setTimeout(() => button.classList.remove("clicked"), 200);
    });
  });
});

/*alerte*/
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(() => {
    alert("Bienvenue sur Loulou Bonheur ! Découvrez nos opportunités !");
  }, 3000); // S'affiche après 3 secondes
});

