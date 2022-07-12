import anime from 'animejs/lib/anime.es.js';
import e from 'cors';
import { func } from 'prop-types';

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






function pow(x, n){
    if(n === 1){
        return x 
    } else{
        return x * pow(x, n - 1);
    }
}

console.log(pow(3, 1));