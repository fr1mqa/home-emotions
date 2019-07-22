$(document).ready(function () {
    $('.production__small-list--first').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        infinite: false,
        dots: false,
        arrows: false,
    });
    $('.production__small-list--second').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        infinite: false,
    });
    $('.production__small-list--third').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        infinite: false,
    });
    $('.production__small-list--fourth').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        infinite: false,
    });
    let sliderSmallFirst = document.querySelector('.production__small-list--first');
    let sliderSmallSecond = document.querySelector('.production__small-list--second');
    let sliderSmallThird = document.querySelector('.production__small-list--third');
    let sliderSmallFourth = document.querySelector('.production__small-list--fourth');
    let sliderFullFirstList = document.querySelectorAll('.production__full-list--first .production__full-item');
    let sliderFullSecondList = document.querySelectorAll('.production__full-list--second .production__full-item');
    let sliderFullThirdList = document.querySelectorAll('.production__full-list--third .production__full-item');
    let sliderFullFourthList = document.querySelectorAll('.production__full-list--fourth .production__full-item');
    sliderSmallFirst.addEventListener('click', function(e){
       let index = e.target.getAttribute('data-slick-index') || e.target.parentNode.getAttribute('data-slick-index');
       for (let i = 0; i < sliderFullFirstList.length; i = i + 1) {
           sliderFullFirstList[i].classList.remove('production__full-item--active');
       }
        sliderFullFirstList[index].classList.add('production__full-item--active');
    });
    sliderSmallSecond.addEventListener('click', function(e){
       let index = e.target.getAttribute('data-slick-index') || e.target.parentNode.getAttribute('data-slick-index');
       for (let i = 0; i < sliderFullSecondList.length; i = i + 1) {
           sliderFullSecondList[i].classList.remove('production__full-item--active');
       }
        sliderFullSecondList[index].classList.add('production__full-item--active');
    });
    sliderSmallThird.addEventListener('click', function(e){
       let index = e.target.getAttribute('data-slick-index') || e.target.parentNode.getAttribute('data-slick-index');
       for (let i = 0; i < sliderFullThirdList.length; i = i + 1) {
           sliderFullThirdList[i].classList.remove('production__full-item--active');
       }
        sliderFullThirdList[index].classList.add('production__full-item--active');
    });
    sliderSmallFourth.addEventListener('click', function(e){
       let index = e.target.getAttribute('data-slick-index') || e.target.parentNode.getAttribute('data-slick-index');
       for (let i = 0; i < sliderFullFourthList.length; i = i + 1) {
           sliderFullFourthList[i].classList.remove('production__full-item--active');
       }
        sliderFullFourthList[index].classList.add('production__full-item--active');
    });
});