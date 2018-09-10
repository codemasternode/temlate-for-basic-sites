let slideIndex = 1;
let buttonsDirect = document.querySelectorAll('.button-direct')
let slider = document.querySelector('#slider')
let left = document.querySelector('#left')
let right = document.querySelector('#right')




showDivs(slideIndex);

let imageSlider = document.querySelector('#image')

onResize()

function plusDivs(n) {
    showDivs(slideIndex += n);
}

window.addEventListener('resize', onResize)

function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"
        x[i].removeAttribute('id')
    }
    x[slideIndex - 1].style.display = "block"
    x[slideIndex - 1].setAttribute('id','image')
}

function onResize() {
    console.log(imageSlider.offsetHeight)
    slider.style.height = imageSlider.offsetHeight + 'px'
}