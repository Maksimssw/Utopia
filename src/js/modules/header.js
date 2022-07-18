
const header = () => {

    const header = document.querySelector('.header');
    const intro = document.querySelector('.intro');

    window.addEventListener('scroll', function(){

        const scrollY = window.scrollY;
        const scrollIntro = intro.offsetHeight / 2;

        if(scrollY >= scrollIntro){
            header.classList.add('fixed')
            intro.style.marginTop =  `${header.offsetHeight}px`;
        } else{
            header.classList.remove('fixed');
            intro.style.marginTop = '0px';
        }
    });
}

export default header;