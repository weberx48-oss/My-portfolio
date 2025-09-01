// Nav button active state
const navBtns = document.querySelectorAll('.nav-btn');

// Scrolling animation for elements with .scroll-animate
function handleScrollAnimation() {
  const elements = document.querySelectorAll('.scroll-animate');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    // Animate when element is at least 50px into viewport
    if (rect.top < window.innerHeight - 50 && rect.bottom > 50) {
      el.classList.add('visible');
      el.style.transition = 'opacity 0.6s, transform 0.6s';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    } else {
      el.classList.remove('visible');
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px)';
    }

    // Scroll animation for navbar buttons
    navBtns.forEach(btn => {
      const btnRect = btn.getBoundingClientRect();
      if (btnRect.top < window.innerHeight - 50 && btnRect.bottom > 50) {
      btn.classList.add('nav-visible');
      btn.style.transition = 'opacity 0.6s, transform 0.6s';
      btn.style.opacity = '1';
      btn.style.transform = 'translateY(0)';
      } else {
      btn.classList.remove('nav-visible');
      btn.style.opacity = '0';
      btn.style.transform = 'translateY(-20px)';
      }
    });
  });
}

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('DOMContentLoaded', handleScrollAnimation);

navBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    navBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});

// ...existing code...
// Modal popup for projects
document.addEventListener('DOMContentLoaded', () => {
  // ...existing scroll animation code...

  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const closeBtn = document.querySelector('.close-btn');
  const projectCards = document.querySelectorAll('.project-card');

  const projectInfo = {
    1: { title: 'Project 1', desc: 'Description for Project 1.' },
    2: { title: 'Project 2', desc: 'Description for Project 2.' },
    3: { title: 'Project 3', desc: 'Description for Project 3.' }
  };

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-project');
      modalTitle.textContent = projectInfo[id].title;
      modalDesc.textContent = projectInfo[id].desc;
      modal.classList.add('show');
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
});

