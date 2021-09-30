let slider = document.querySelector('.slider');
let sliderItem = document.querySelectorAll('.testimonio');
let counter = 1;
let widthSize = sliderItem[0].clientWidth;
let intervalo = 5000;

window.addEventListener("resize", function(){
    widthSize = sliderItem[0].clientWidth;
})

setInterval(function tiempo(){
    slides();
}, intervalo);

function slides(){
    slider.style.transform = 'translate('+ (- widthSize * counter) + 'px)';
    slider.style.transition = 'transform 1s';
    counter++;

    if(counter === sliderItem.length){
        counter=0;
        setTimeout(function(){
            slider.style.transform = 'translate(0px)';
            slider.style.transition = 'transform 0s';
        },intervalo)
    }
}