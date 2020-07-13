$(document).ready(function init() {
  const doc = document.documentElement;

  doc.classList.remove('no-js');
  doc.classList.add('js');

  $(window).on('scroll', function ChangeButtonFloating() {
    const element = document.getElementsByClassName('site-footer')[0];
    const buttonFloating = document.getElementsByClassName('button-floating')[0];
    const pageTop = $(window).scrollTop();
    const pageBottom = pageTop + $(window).height();
    const elementTop = $(element).offset().top;
    const elementBottom = elementTop + $(element).height();

    if (elementTop <= pageBottom && elementBottom >= pageTop) {
      buttonFloating.style.position = 'absolute';
    } else {
      buttonFloating.style.position = 'fixed';
    }
  });

  if (document.body.classList.contains('has-animations')) {
    // Reveal animations
    /* global ScrollReveal */
    window.sr = ScrollReveal();
    const { sr } = window;

    sr.reveal('.feature, .institution', {
      duration: 600,
      distance: '50px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'bottom',
      interval: 100,
    });

    /* global anime */
    const heroAnimation = anime.timeline({ autoplay: false });
    const strokedElement = document.querySelector('.stroke-animation');

    strokedElement.setAttribute('stroke-dashoffset', anime.setDashoffset(strokedElement));

    heroAnimation
      .add({
        targets: '.stroke-animation',
        strokeDashoffset: {
          value: 0,
          duration: 2000,
          easing: 'easeInOutQuart',
        },
        strokeWidth: {
          value: [0, 2],
          duration: 2000,
          easing: 'easeOutCubic',
        },
        strokeOpacity: {
          value: [1, 0],
          duration: 1000,
          easing: 'easeOutCubic',
          delay: 1000,
        },
        fillOpacity: {
          value: [0, 1],
          duration: 500,
          easing: 'easeOutCubic',
          delay: 1300,
        },
      })
      .add({
        targets: '.fadeup-animation',
        offset: 1300, // Starts at 1300ms of the timeline
        translateY: {
          value: [100, 0],
          duration: 1500,
          easing: 'easeOutElastic',
          delay(el, i) {
            return i * 150;
          },
        },
        opacity: {
          value: [0, 1],
          duration: 200,
          easing: 'linear',
          delay(el, i) {
            return i * 150;
          },
        },
      })
      .add({
        targets: '.fadeleft-animation',
        offset: 1300, // Starts at 1300ms of the timeline
        translateX: {
          value: [40, 0],
          duration: 400,
          easing: 'easeOutCubic',
          delay(el, i) {
            return i * 100;
          },
        },
        opacity: {
          value: [0, 1],
          duration: 200,
          easing: 'linear',
          delay(el, i) {
            return i * 100;
          },
        },
      });

    doc.classList.add('anime-ready');
    heroAnimation.play();
  }
});
