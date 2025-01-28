
// Gestion du menu burger en version mobile
const burger = document.querySelector('.burger'); // Sélectionne le bouton burger
const nav = document.querySelector('.nav-links'); // Sélectionne le menu de navigation

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active'); // Affiche ou masque le menu en basculant la classe 'nav-active'
});

// Bouton retour en haut (optionnel)
window.addEventListener('scroll', () => {
    let scrollBtn = document.getElementById('scrollUpBtn'); // Vérifie si le bouton existe déjà
    if (!scrollBtn) {
        scrollBtn = document.createElement('button'); // Crée un bouton si absent
        scrollBtn.id = 'scrollUpBtn'; // Attribue un ID au bouton
        scrollBtn.textContent = '↑'; // Définit le contenu du bouton
        // Applique des styles au bouton dynamiquement
        scrollBtn.style.position = 'fixed'; // Garde le bouton visible en bas de la fenêtre
        scrollBtn.style.bottom = '20px'; // Distance du bas
        scrollBtn.style.right = '20px'; // Distance de la droite
        scrollBtn.style.padding = '0.5rem';
        scrollBtn.style.background = '#f0db4f';
        scrollBtn.style.border = 'none';
        scrollBtn.style.borderRadius = '5px';
        scrollBtn.style.cursor = 'pointer';
        scrollBtn.style.display = 'none'; // Caché par défaut
        scrollBtn.style.zIndex = '1000'; // Priorité d'affichage élevée
        document.body.appendChild(scrollBtn); // Ajoute le bouton au DOM

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Défilement fluide vers le haut
        });
    }

    if (window.scrollY > 200) {
        scrollBtn.style.display = 'block'; // Affiche le bouton si l'utilisateur a fait défiler vers le bas
    } else {
        scrollBtn.style.display = 'none'; // Cache le bouton si l'utilisateur est en haut de la page
    }
});

// Gestion de l'affichage des informations sur les poumons
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleLungsInfo'); // Bouton pour afficher ou masquer les informations
    const lungsInfo = document.getElementById('lungsInfo'); // Contenu des informations sur les poumons

    if (toggleBtn && lungsInfo) {
        toggleBtn.addEventListener('click', () => {
            lungsInfo.classList.toggle('hidden'); // Masque ou affiche les informations
            lungsInfo.classList.toggle('visible'); // Ajoute une classe pour les styles affichés

            toggleBtn.textContent = lungsInfo.classList.contains('visible') 
                ? 'Réduire' // Change le texte en "Réduire" si les infos sont visibles
                : 'En savoir plus'; // Change le texte en "En savoir plus" si elles sont cachées
        });
    }

    // Gestion du Modal Pop-up Choquant
    const showShockingBtn = document.getElementById('showShockingInfo'); // Bouton pour afficher le modal
    const modal = document.getElementById('shockingModal'); // Fenêtre modale
    const closeButton = document.querySelector('.close-button'); // Bouton pour fermer le modal

    if (showShockingBtn && modal && closeButton) {
        showShockingBtn.addEventListener('click', () => {
            modal.classList.remove('hidden'); // Affiche le modal
            modal.classList.add('visible');
        });

        closeButton.addEventListener('click', () => {
            modal.classList.remove('visible'); // Cache le modal
            modal.classList.add('hidden');
        });

        // Ferme le modal si on clique en dehors du contenu
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('visible'); // Cache le modal
                modal.classList.add('hidden');
            }
        });
    }
});
