import anime from 'animejs/lib/anime.es.js';

const introAnime = () => {

    const intro = document.querySelectorAll('.intro-anime');
    const introBtn = document.querySelector('.intro-anime__btn');

    const laptop = document.querySelector('.intro__laptop');

    anime({
        targets: intro,
        translateX: 0,
        opacity: 1,
        easing: 'linear',
        delay: anime.stagger(200, {start: 200}),
        duration: 600,
    });

    anime({
        targets: laptop,
        translateY: 10,
        easing: 'easeInOutExpo',
        loop: true,
        direction: 'alternate',
        delay: 1,
        duration: 2000,
    });

    anime({
        targets: introBtn,
        translateY: 0,
        opacity: 1,
        easing: 'linear',
        duration: 1000
    })
}

export default introAnime;