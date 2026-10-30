/**
 * LANGARD. — Luxury Landscape Architecture & Botanical Estate Design
 * Interactive Scripts: Responsive Navigation, Portfolio Filtering, Service Switching & Smooth Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. Mobile Navigation & Backdrop Overlay
  // =========================================================================
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

    // Close when clicking any nav link or action button
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

  // =========================================================================
  // 2. Interactive Services Accordion / Image Switcher
  // =========================================================================
  const serviceItems = document.querySelectorAll('.service-item');
  const serviceFeatureImg = document.querySelector('.service-feature-img');
  const serviceImageCaption = document.querySelector('.service-image-caption span');

  const serviceMediaData = {
    '1': {
      img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80',
      caption: 'Bespoke Landscape Masterplans'
    },
    '2': {
      img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=80',
      caption: 'Year-Round Estate Horticultural Care'
    },
    '3': {
      img: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=900&q=80',
      caption: 'Artisanal Terraces & Stone Watercraft'
    },
    '4': {
      img: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
      caption: 'Specimen Trees & Biodiversity Curation'
    }
  };

  serviceItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      serviceItems.forEach(si => si.classList.remove('active'));
      item.classList.add('active');

      const serviceId = item.getAttribute('data-service');
      if (serviceMediaData[serviceId] && serviceFeatureImg) {
        serviceFeatureImg.style.opacity = '0.4';
        serviceFeatureImg.style.transform = 'scale(0.98)';
        setTimeout(() => {
          serviceFeatureImg.src = serviceMediaData[serviceId].img;
          if (serviceImageCaption) {
            serviceImageCaption.textContent = serviceMediaData[serviceId].caption;
          }
          serviceFeatureImg.style.opacity = '1';
          serviceFeatureImg.style.transform = 'scale(1)';
        }, 180);
      }
    });

    item.addEventListener('click', () => {
      serviceItems.forEach(si => si.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // =========================================================================
  // 3. Portfolio Project Category Filtering
  // =========================================================================
  const catPills = document.querySelectorAll('.cat-pill');
  const workCards = document.querySelectorAll('.work-card');

  catPills.forEach(pill => {
    pill.addEventListener('click', () => {
      catPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filterValue = pill.getAttribute('data-filter');

      workCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCat === filterValue) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // =========================================================================
  // 4. Header Scroll Elevation Effect
  // =========================================================================
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
      header.style.boxShadow = 'none';
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.96)';
    }
  });
});
