function toggleColorMode() {
    const colorModeButton = document.querySelector('.color-mode');
    const body = document.body;

    if (colorModeButton) {
        colorModeButton.addEventListener('click', () => {
            const colorModeIcon = document.querySelector('.color-mode-icon');
            if (colorModeIcon) {
                colorModeIcon.classList.toggle('active');
            }
            body.classList.toggle('dark-mode');
        });
    }
}


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
