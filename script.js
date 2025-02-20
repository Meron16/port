// Smooth scroll for navigation links
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function PageTransitions() {
  // Button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function () {
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className += ' active-btn';
    });
  }

  // Sections active
  allSections[0].addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      // Remove selected from the other btns
      sectBtns.forEach((btn) => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');

      // Hide other sections
      sections.forEach((section) => {
        section.classList.remove('active');
      });

      const element = document.getElementById(id);
      element.classList.add('active');
    }
  });

  // Toggle theme
  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode');
  });
}

// Portfolio section "Read More" functionality
const readMoreButtons = document.querySelectorAll('.read-more-btn');

readMoreButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); // Prevents anchor default action (page navigation)

    const hiddenContent = document.getElementById(button.dataset.id);
    if (hiddenContent.style.display === 'block') {
      hiddenContent.style.display = 'none'; // Hide content if it's already visible
    } else {
      hiddenContent.style.display = 'block'; // Show hidden content
    }
  });
});

// Initialize page transitions
PageTransitions();
