function toggleNavbarBackground(){
    const navbar = document.getElementById("navbar")
    const titleLogo = document.getElementById("titleLogo")
    if (window.scrollY > 10){
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        titleLogo.style.color = "#dab769";
    }
    else{
        navbar.style.backgroundColor = 'transparent';
        titleLogo.style.color = "#A00026";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 5000; // Intervallo di tempo in millisecondi tra una slide e l'altra


    // Funzione per cambiare slide
    const changeSlide = () => {
        // Rimuovi la classe 'active' dalla slide corrente
        slides[currentSlide].classList.remove('active');

        // Incrementa l'indice della slide corrente
        currentSlide = (currentSlide + 1) % slides.length;

        // Aggiungi la classe 'active' alla nuova slide
        slides[currentSlide].classList.add('active');
    };

    // Cambia slide ogni slideInterval millisecondi
    setInterval(changeSlide, slideInterval);


    // Effetto di copertura quando si scorre la pagina
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        // Calcola la distanza percorsa rispetto all'altezza della finestra
        if (scrollY >= windowHeight) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }

        // Effetto parallax per le immagini nello slider
        slides.forEach((slide, index) => {
            const img = slide.querySelector('img');
            // Calcola la traslazione dell'immagine basata sulla distanza di scorrimento
            const parallax = (scrollY / windowHeight) * 40; // Puoi regolare il valore '30' per l'intensità dell'effetto
            img.style.transform = `translateY(-${parallax}%)`;
        });

        // Optional: Effetto più dinamico durante lo scroll
        const coverSections = document.querySelectorAll('.cover-section');
        coverSections.forEach(section => {
            const offset = scrollY / windowHeight; // Calcola offset in base allo scroll
            section.style.transform = `translateY(${100 - offset * 100}vh)`;
        });
    });
});
