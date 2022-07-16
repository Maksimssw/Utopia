import anime from 'animejs/lib/anime.es.js';


const ecologyAnime = (text, photo) => {

    anime({
        targets: text,
        delay: 600,
        duration: 600,
        translateY: 0,
        opacity: 1,
        easing: 'linear',
    });

    anime({
        targets: photo,
        delay: 700,
        duration: 600,
        translateX: 0,
        opacity: 1,
        easing: 'linear',
    })

}

export default ecologyAnime;


