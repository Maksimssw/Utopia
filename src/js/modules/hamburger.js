import { identity } from "lodash";

const hamburger = () => {
    
    const menu = document.querySelector('.header__wrapper').cloneNode(1);
    const retractableMenu = document.querySelector('.retractable-menu');
    const hamburger = document.querySelector('.hamburger');

    retractableMenu.appendChild(menu);

    function hamburgerActiveHidden(){
        hamburger.classList.toggle('active');
        retractableMenu.classList.toggle('active');
    }

    hamburger.addEventListener('click', function(){
        hamburgerActiveHidden();
    });
}

export default hamburger;