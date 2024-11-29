const cadre = document.querySelector('.cadre');
const hoverEffect = document.querySelector('.hover-effect');

cadre.addEventListener('mousemove', (event) => {
    const rect = cadre.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    hoverEffect.style.transform = `translate(${x - 50}px, ${y - 50}px)`;
});

cadre.addEventListener('mouseleave', () => {
    hoverEffect.style.transform = 'translate(-150%, -150%)';
});

const boxes = document.querySelectorAll('.box');

const checkScroll = () => {
    boxes.forEach((box) => {
        const boxPosition = box.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (boxPosition < windowHeight - 100) {
            box.classList.add('visible');
        } else {
            box.classList.remove('visible');
        }
    });
};

window.addEventListener('scroll', checkScroll);
checkScroll();

const header = document.querySelector('header');
const heroSection = document.querySelector('#hero');

function checkHeaderScroll() {
    const heroHeight = heroSection.offsetHeight;
    if (window.scrollY === 0 ) {
        header.classList.remove('sticky');
        header.classList.remove('sticky-return');
    } else {
        if (window.scrollY >= heroHeight) {
            header.classList.add('sticky');
            header.classList.remove('sticky-return');
        } else {
            header.classList.remove('sticky');
            header.classList.add('sticky-return');
        }
    }
}

window.addEventListener('scroll', checkHeaderScroll);
checkHeaderScroll();

const links = document.querySelectorAll('.navbar_item_link');
const sections = document.querySelectorAll('section');

function highlightLinkOnScroll() {
  const scrollPosition = window.scrollY;

  for (let i = 1; i < sections.length; i++) {
    const section = sections[i]; 
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
      links[i - 1].classList.add('active'); 
    } else {
      links[i - 1].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', highlightLinkOnScroll);
highlightLinkOnScroll();
