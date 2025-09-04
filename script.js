
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show button when user scrolls down 200px
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// When user clicks, scroll smoothly to top
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const learnMoreBtn = document.querySelector('.learn-more-btn');

const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }
  });
});

learnMoreBtn.addEventListener('click', () => {
  learnMoreBtn.style.backgroundColor = '#ffcc00'; // temporary color
  setTimeout(() => {
    learnMoreBtn.style.backgroundColor = 'white'; // revert back
  }, 300);
});

const darkModeBtn = document.createElement('button');
darkModeBtn.textContent = 'Toggle Dark Mode';
darkModeBtn.style.margin = '20px';
document.body.prepend(darkModeBtn);

darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
learnMoreBtn.addEventListener('click', () => {
  learnMoreBtn.style.transform = 'scale(0.9)'; // shrink quickly
  setTimeout(() => {
    learnMoreBtn.style.transform = 'scale(1)'; // back to normal
  }, 150);
});
learnMoreBtn.addEventListener('click', (e) => {
  const ripple = document.createElement('span');
  ripple.classList.add('ripple');
  learnMoreBtn.appendChild(ripple);

  const rect = learnMoreBtn.getBoundingClientRect();
  ripple.style.left = `${e.clientX - rect.left}px`;
  ripple.style.top = `${e.clientY - rect.top}px`;

  setTimeout(() => {
    ripple.remove();
  }, 600);
});

learnMoreBtn.addEventListener('mousedown', () => {
  learnMoreBtn.style.transform = 'scale(0.95)';
});

learnMoreBtn.addEventListener('mouseup', () => {
  learnMoreBtn.style.transform = 'scale(1)';
});