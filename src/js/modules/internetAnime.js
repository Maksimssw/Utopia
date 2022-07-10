import anime from 'animejs/lib/anime.es.js';

const internetAnime = () => {

    const listMini = document.querySelectorAll('.internet__list-mini');
    const listBig = document.querySelector('.internet__list-big');
    const heightMini = document.querySelector('.internet__help');
    const heightBig = document.querySelector('.internet__help-big');

    console.log(listBig);

    if(listBig){
        anime({
            targets: listMini,
            height: `${heightMini.offsetHeight}px`,
            delay: 700,
            duration: 700,
            easing: 'linear',
        });

        anime({
            targets: listBig,
            height: `${heightBig.offsetHeight}px`,
            duration: 2000,
        })
    }

}

export default internetAnime;