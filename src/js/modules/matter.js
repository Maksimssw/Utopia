const matter = () => {
    const btns = document.querySelectorAll('.matter__cross'),
          subTitle = document.querySelectorAll('.matter__subtitle');

    const visibility = (i) =>{
        console.log(subTitle[i]);
        subTitle[i].classList.toggle('active');
        btns[i].classList.toggle('active');
    }

    btns.forEach((item, i) => {
        item.addEventListener('click', function(){
            visibility(i);
        });
    });
}

export default matter;