import anime from 'animejs/lib/anime.es.js';

const toolsAnime = () => {

    const toolsList = document.querySelectorAll('.tools__list');

    const scroolAnime = () => {

        let windowCenter = (window.innerHeight / 2) + window.scrollY;

        toolsList.forEach(el => {
            
            let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
            
            console.log(windowCenter);
            console.log(scrollOffset);

            if(windowCenter >= scrollOffset){

                

            } else{
                
            }

        });

    }

    scroolAnime();
    window.addEventListener('scroll', function(){
        scroolAnime();
    });

}

export default toolsAnime;