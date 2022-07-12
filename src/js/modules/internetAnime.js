import anime from 'animejs/lib/anime.es.js';

const internetAnime = () => {

    const listMini = document.querySelectorAll('.internet__list-mini');
    const listBig = document.querySelector('.internet__list-big');
    const heightMini = document.querySelector('.internet__help');
    const heightBig = document.querySelector('.internet__help-big');

    const heightBigPx = `${heightBig.offsetHeight}px`;
    heightBig.style.display = 'none';

    const heightMiniPx = `${heightMini.offsetHeight}px`;
    heightMini.style.display = 'none';



    anime({
        targets: listMini,
        height: heightMiniPx,
        delay: 700,
        duration: 700,
        easing: 'linear',
        opacity: 1,
    });

    anime({
        targets: listBig,
        height: heightBigPx,
        duration: 700,
        delay: 500,
        opacity: 1,
        easing: 'linear',
    })
}

export default internetAnime;