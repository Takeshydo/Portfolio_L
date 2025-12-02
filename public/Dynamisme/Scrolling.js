// Sélectionne toutes les sections avec la classe .reveal
const reveals = document.querySelectorAll('.reveal');

function handleScroll() {
    const windowHeight = window.innerHeight;
    const triggerBottom = windowHeight * 0.8; // apparition plus tard (70% du viewport)

    reveals.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); 
