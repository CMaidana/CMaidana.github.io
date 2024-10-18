window.addEventListener('DOMContentLoaded', event => {
  const isMobileDevice = () => /Mobi|Android/i.test(navigator.userAgent);

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach(el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });


  const section = document.querySelectorAll('section');

  const navItems = Array.from(document.querySelectorAll('#navbarResponsive .navbar-item'));

  const activeLinks = (el) => {
    navItems.forEach(e => e.classList.remove('active'));
    el.classList.add('active');
  };

  // Navbar shrink function
  const navbarShrink = () => {
    const navbarCollapsible = document.body.querySelector('#navbarHeader');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink')
    } else {
      navbarCollapsible.classList.add('navbar-shrink')
    }

  };

  const scrollSectionControl = () => {
    section.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (id && top >= (offset - 80) && top < offset + height) {
        const target = document.querySelector(`[href='#${id}']`);
        activeLinks(target);
        scrollParagraphControl(sec);
      }
    });
  }

  const scrollParagraphControl = (section) => {
    const animatedClassName = 'text-animated-displayed';
    const texts = section.getElementsByClassName('text-animated');
    Array.from(texts).forEach((text) => {
      if (!text.classList.contains(animatedClassName)) {
        text.classList.add(animatedClassName);
      }
    });
  }

  // Shrink the navbar 
  if (!isMobileDevice()) {
    navbarShrink();
    // Shrink the navbar when page is scrolled
    window.addEventListener('scroll', navbarShrink);
  }
  window.addEventListener('scroll', scrollSectionControl);

  navItems.forEach((el) => {
    el.addEventListener('click', _ => {
      activeLinks(el);
    })
  });

});
