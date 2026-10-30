/**
 * Trabook Landing Page - Interactive Scripts
 * Handles mobile navigation, testimonial carousel, booking action, and smooth interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle & Overlay
  const menuToggle = document.getElementById('menuToggle');
  const navbar = document.getElementById('navbar');
  const navOverlay = document.getElementById('navOverlay');

  function openMobileMenu() {
    navbar.classList.add('open');
    if (navOverlay) navOverlay.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    const icon = menuToggle.querySelector('i');
    if (icon) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    }
  }

  function closeMobileMenu() {
    navbar.classList.remove('open');
    if (navOverlay) navOverlay.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    const icon = menuToggle.querySelector('i');
    if (icon) {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  }

  if (menuToggle && navbar) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navbar.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close when clicking overlay
    if (navOverlay) {
      navOverlay.addEventListener('click', closeMobileMenu);
    }

    // Close when clicking any nav link or mobile action button
    navbar.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Automatically close when window expands past tablet width
    window.addEventListener('resize', () => {
      if (window.innerWidth > 991 && navbar.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }

  // 2. Testimonial Switcher
  const testimonials = [
    {
      quote: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
      author: "Mike Taylor",
      location: "Lahore, Pakistan",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
      nextAuthor: "Chris Thomas",
      nextRole: "CEO of Red Button"
    },
    {
      quote: "“Trabook made our vacation completely seamless! The itineraries, local tour guides, and hotel selections were top notch. Can't wait for our next trip!”",
      author: "Chris Thomas",
      location: "CEO of Red Button",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80",
      nextAuthor: "Mike Taylor",
      nextRole: "Lahore, Pakistan"
    }
  ];

  let currentTestimonialIndex = 0;
  const quoteEl = document.getElementById('testimonialQuote');
  const authorEl = document.getElementById('testimonialAuthor');
  const locationEl = document.getElementById('testimonialLocation');
  const avatarEl = document.getElementById('testimonialAvatar');
  const cardBack = document.getElementById('cardBack');
  const btnPrev = document.getElementById('btnTestPrev');
  const btnNext = document.getElementById('btnTestNext');

  function updateTestimonial(index) {
    const item = testimonials[index];
    if (quoteEl && authorEl && locationEl && avatarEl) {
      // Gentle fade transition
      const cardFront = document.getElementById('cardFront');
      if (cardFront) {
        cardFront.style.opacity = '0';
        cardFront.style.transform = 'translateY(10px)';
      }

      setTimeout(() => {
        quoteEl.textContent = item.quote;
        authorEl.textContent = item.author;
        locationEl.textContent = item.location;
        avatarEl.src = item.avatar;
        avatarEl.alt = `${item.author} client portrait`;

        if (cardBack) {
          const backName = cardBack.querySelector('.author-name');
          const backRole = cardBack.querySelector('.author-role');
          if (backName) backName.textContent = item.nextAuthor;
          if (backRole) backRole.textContent = item.nextRole;
        }

        if (cardFront) {
          cardFront.style.opacity = '1';
          cardFront.style.transform = 'translateY(0)';
        }
      }, 200);
    }
  }

  if (btnPrev && btnNext) {
    btnPrev.addEventListener('click', () => {
      btnPrev.classList.add('active');
      btnNext.classList.remove('active');
      currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
      updateTestimonial(currentTestimonialIndex);
    });

    btnNext.addEventListener('click', () => {
      btnNext.classList.add('active');
      btnPrev.classList.remove('active');
      currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
      updateTestimonial(currentTestimonialIndex);
    });
  }

  // 3. Deals & Vacation Plan Slider Navigation Button Toggles
  const dealPrev = document.querySelector('.deals-section .btn-prev');
  const dealNext = document.querySelector('.deals-section .btn-next');
  if (dealPrev && dealNext) {
    dealPrev.addEventListener('click', () => {
      dealPrev.classList.add('active');
      dealNext.classList.remove('active');
    });
    dealNext.addEventListener('click', () => {
      dealNext.classList.add('active');
      dealPrev.classList.remove('active');
    });
  }

  const vacPrev = document.querySelector('.btn-vacation-prev');
  const vacNext = document.querySelector('.btn-vacation-next');
  if (vacPrev && vacNext) {
    vacPrev.addEventListener('click', () => {
      vacPrev.classList.add('active');
      vacNext.classList.remove('active');
    });
    vacNext.addEventListener('click', () => {
      vacNext.classList.add('active');
      vacPrev.classList.remove('active');
    });
  }

  // 4. Newsletter Form Submission Feedback
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('.newsletter-input');
      const submitBtn = newsletterForm.querySelector('.btn-newsletter');
      if (input && input.value) {
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Subscribed! ✓';
        submitBtn.style.backgroundColor = '#10B981';
        input.value = '';
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.backgroundColor = '';
        }, 3000);
      }
    });
  }

  // 5. Booking Search Button Action
  const btnExplore = document.getElementById('btnExplore');
  if (btnExplore) {
    btnExplore.addEventListener('click', () => {
      const originalText = btnExplore.textContent;
      btnExplore.textContent = 'Searching tours...';
      setTimeout(() => {
        btnExplore.textContent = 'Found 24+ Tours!';
        setTimeout(() => {
          btnExplore.textContent = originalText;
        }, 2000);
      }, 800);
    });
  }

  // 6. Blog Pagination Switcher
  const blogDots = document.querySelectorAll('.blog-pagination .dot');
  blogDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      blogDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
    });
  });
});
