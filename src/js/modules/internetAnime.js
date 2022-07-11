import anime from 'animejs/lib/anime.es.js';
import { func } from 'prop-types';

const internetAnime = () => {

    const listMini = document.querySelectorAll('.internet__list-mini');
    const listBig = document.querySelector('.internet__list-big');
    const heightMini = document.querySelector('.internet__help');
    const heightBig = document.querySelector('.internet__help-big');
    const container = document.querySelector('.internet .container');

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
    });

    anime({
        targets: listBig,
        height: heightBigPx,
        duration: 2000,
    })


}

export default internetAnime;