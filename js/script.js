// Bienvenue dans le fichier script.js !
// Chaque section comporte un exercice guidé et un exercice pour appliquer ce que tu apprends.

// ============ SECTION 1 : Variables ============

// 💡 Exercice guidé : Les variables permettent de stocker et manipuler des informations.

// 🛠️ À toi de jouer !
// Objectif : Récupérer les informations utilisateur et les afficher dans "resultat-exo".

document.getElementById("afficher-exo").addEventListener("click", function () {
  // Étape 1 : Récupére les valeurs des champs "prenom-exo" et "age-exo".
  let prenom = ""; // Remplace cette ligne avec ton code.
  let age = ""; // Remplace cette ligne avec ton code.

  // Étape 2 : Affiche un message similaire dans "resultat-exo".
  let resultat = document.getElementById("resultat-exo");
  // Écris ici le code pour afficher le message.
});

// ============ SECTION 2 : Modifier le texte ============

// 💡 Exercice guidé : Modifions dynamiquement le contenu d’un élément HTML.

// 🛠️ À toi de modifier un autre texte !
// Objectif : Change le texte de l'élément "text-exo" lorsque le bouton "change-text-exo" est cliqué.
document
  .getElementById("change-text-exo")
  .addEventListener("click", function () {
    // Sélectionne l'élément "text-exo" et modifie son contenu.
    // Écris ton code ici.
  });

// ============ SECTION 3 : Modifier les styles ============

// 💡 Exercice guidé : Changeons l’apparence d’un élément.

// 🛠️  À toi de personnaliser le style !
// Objectif : Applique un style différent à l'élément "style-exo".
document
  .getElementById("change-style-exo")
  .addEventListener("click", function () {
    let texte = document.getElementById("style-exo");
    // Change la couleur en vert et applique un style italique.
    // Écris ton code ici.
  });

// ============ SECTION 4 : Liste dynamique ============

// 💡 Exercice guidé : Ajoutons dynamiquement des éléments dans une liste.

// 🛠️  Ajoute des éléments à une autre liste !
// Objectif : Ajoute un nouvel élément à "list-exo" lorsque le bouton est cliqué.
document.getElementById("add-item-exo").addEventListener("click", function () {
  let liste = document.getElementById("list-exo");
  // Crée un nouvel élément <li> et ajoute-le à la liste.
  // Écris ton code ici.
});

// ============ SECTION 5 : Formulaire interactif ============

// 💡 Exercice guidé : Collectons et affichons des informations utilisateur.

// 🛠️ À toi de gérer un formulaire similaire !
// Objectif : Affiche un message de salutation dans "greeting-exo" avec le nom saisi.
document.getElementById("greet-exo").addEventListener("click", function () {
  let username = ""; // Récupére la valeur du champ "username-exo".
  // Modifie "greeting-exo" pour afficher un message.
  // Écris ton code ici.
});

// ============ SECTION 6 : Boucles ============

// 💡 Exercice guidé : Utilisons une boucle pour afficher des nombres dans une liste.

// 🛠️  Utilise une boucle pour un autre affichage !
// Objectif : Affiche les nombres de 10 à 15 dans "loop-list-exo".
document.getElementById("loop-exo").addEventListener("click", function () {
  let liste = document.getElementById("loop-list-exo");
  liste.innerHTML = ""; // Vide la liste.
  // Utilise une boucle pour ajouter les nombres de 10 à 15.
  // Écris ton code oci.
});

// ============ BONUS : Mode Nuit ============

// Ajout d'une classe "dark-mode" pour basculer le mode sombre

// ============ BONUS : Générateur de couleurs aléatoires ============

// Génère une couleur aléatoire pour le fond de la page

// ============ BONUS : Réinitialisation de la page ============

// Réinitialise le mode nuit et la couleur de fond
