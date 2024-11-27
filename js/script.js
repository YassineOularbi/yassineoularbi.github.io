function toggleColorMode() {
    const body = document.body;
    const modeToggler = document.querySelector('.color-mode .tooltip');
    const moonIcon = document.querySelector('.color-mode i');
    const logo = document.getElementById('logo');

    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        document.documentElement.style.setProperty('--black-color', '#fff');
        document.documentElement.style.setProperty('--white-color', '#000');
        modeToggler.textContent = 'Dark mode';
        moonIcon.classList.remove('fa-cloud-moon');
        moonIcon.classList.add('fa-cloud-sun');
        localStorage.setItem('theme', 'light');
        logo.src = 'images/logo/logo-black.png';
    } else {
        document.documentElement.style.setProperty('--black-color', '#000');
        document.documentElement.style.setProperty('--white-color', '#fff');
        modeToggler.textContent = 'Light mode';
        moonIcon.classList.remove('fa-cloud-sun');
        moonIcon.classList.add('fa-cloud-moon');
        localStorage.setItem('theme', 'dark');
        logo.src = 'images/logo/logo-white.png';
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const modeToggler = document.querySelector('.color-mode .tooltip');
    const moonIcon = document.querySelector('.color-mode i');
    const logo = document.getElementById('logo');

    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        document.documentElement.style.setProperty('--black-color', '#fff');
        document.documentElement.style.setProperty('--white-color', '#000');
        modeToggler.textContent = 'Dark mode';
        moonIcon.classList.remove('fa-cloud-moon');
        moonIcon.classList.add('fa-cloud-sun');
        logo.src = 'images/logo/logo-black.png';
    } else {
        body.classList.remove('light-mode');
        document.documentElement.style.setProperty('--black-color', '#000');
        document.documentElement.style.setProperty('--white-color', '#fff');
        modeToggler.textContent = 'Light mode';
        moonIcon.classList.remove('fa-cloud-sun');
        moonIcon.classList.add('fa-cloud-moon');
        logo.src = 'images/logo/logo-white.png';
    }
}

document.addEventListener('DOMContentLoaded', loadTheme);

function toggleFullScreen() {
    let fullScreen = document.getElementById('about');
    let screenIcon = document.querySelector('.screen i');
    let screenTooltip = document.querySelector('.screen .tooltip');

    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
            .catch(err => {
                console.error(`Erreur lors de l'activation du plein écran : ${err.message}`);
            });
        fullScreen.classList.add('full');
        
        screenIcon.classList.remove('fa-expand');
        screenIcon.classList.add('fa-compress');
        screenTooltip.textContent = 'Exit full screen';
    } else {
        document.exitFullscreen()
            .catch(err => {
                console.error(`Erreur lors de la sortie du plein écran : ${err.message}`);
            });
    }
}

document.addEventListener('fullscreenchange', function() {
    let fullScreen = document.getElementById('about');
    let screenIcon = document.querySelector('.screen i');
    let screenTooltip = document.querySelector('.screen .tooltip');

    if (!document.fullscreenElement) {
        fullScreen.classList.remove('full');
        
        screenIcon.classList.remove('fa-compress');
        screenIcon.classList.add('fa-expand');
        screenTooltip.textContent = 'Full screen';
    }
});


// function initializeCarousel() {
//     const carousel = document.querySelector('.owl-carousel');
//     if (carousel) {
//         let currentIndex = 0;
//         const items = carousel.children;
//         const totalItems = items.length;

//         function showItem(index) {
//             Array.from(items).forEach((item, i) => {
//                 item.style.display = i === index ? 'block' : 'none';
//             });
//         }

//         showItem(currentIndex);

//         const prevButton = document.querySelector('.owl-prev');
//         const nextButton = document.querySelector('.owl-next');

//         if (prevButton) {
//             prevButton.addEventListener('click', () => {
//                 currentIndex = (currentIndex - 1 + totalItems) % totalItems;
//                 showItem(currentIndex);
//             });
//         }

//         if (nextButton) {
//             nextButton.addEventListener('click', () => {
//                 currentIndex = (currentIndex + 1) % totalItems;
//                 showItem(currentIndex);
//             });
//         }
//     }
// }

// function smoothScroll() {
//     document.querySelectorAll('.nav-link, .custom-btn-link').forEach(link => {
//         link.addEventListener('click', event => {
//             event.preventDefault();
//             const targetId = link.getAttribute('href');
//             if (targetId && document.querySelector(targetId)) {
//                 const targetPosition = document.querySelector(targetId).offsetTop - 49;
//                 window.scrollTo({
//                     top: targetPosition,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });
// }
