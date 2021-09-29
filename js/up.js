window.onscroll = function (){
    if(document.documentElement.scrollTop > 600){
        document.querySelector('.go-top-cont').classList.add('show');
    }else{
        document.querySelector('.go-top-cont').classList.remove('show');
    }

    if(document.documentElement.scrollTop > 2500){
        document.querySelector('.go-top-cont').classList.remove('show');
    }
}

    
    
document.querySelector('.go-top-cont').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});