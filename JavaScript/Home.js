var dot = document.getElementsByClassName("dot");
var n;
var firstSlide = document.querySelector('.first-slide');
var secondSlide = document.querySelector('.second-slide');
var thirdSlide = document.querySelector('.third-slide');
var fourthSlide = document.querySelector('.fourth-slide');
var fifthSlide = document.querySelector('.fifth-slide');


function currentSlide(n){
    if(n == 1){
        firstSlide.classList.add('slide-active');
        firstSlide.classList.remove('slide-non-active');
        secondSlide.classList.remove('slide-active');
        secondSlide.classList.add('slide-non-active');
        thirdSlide.classList.remove('slide-active');
        thirdSlide.classList.add('slide-non-active');
        fourthSlide.classList.remove('slide-active');
        fourthSlide.classList.add('slide-non-active');
        fifthSlide.classList.remove('slide-active');
        fifthSlide.classList.add('slide-non-active');
    }else if(n==2){
        firstSlide.classList.remove('slide-active');
        firstSlide.classList.add('slide-non-active');
        secondSlide.classList.add('slide-active');
        secondSlide.classList.remove('slide-non-active');
        thirdSlide.classList.remove('slide-active');
        thirdSlide.classList.add('slide-non-active');
        fourthSlide.classList.remove('slide-active');
        fourthSlide.classList.add('slide-non-active');
        fifthSlide.classList.remove('slide-active');
        fifthSlide.classList.add('slide-non-active');
    }else if(n==3){
        firstSlide.classList.remove('slide-active');
        firstSlide.classList.add('slide-non-active');
        secondSlide.classList.remove('slide-active');
        secondSlide.classList.add('slide-non-active');
        thirdSlide.classList.add('slide-active');
        thirdSlide.classList.remove('slide-non-active');
        fourthSlide.classList.remove('slide-active');
        fourthSlide.classList.add('slide-non-active');
        fifthSlide.classList.remove('slide-active');
        fifthSlide.classList.add('slide-non-active');
    }else if(n==4){
        firstSlide.classList.remove('slide-active');
        firstSlide.classList.add('slide-non-active');
        secondSlide.classList.remove('slide-active');
        secondSlide.classList.add('slide-non-active');
        thirdSlide.classList.remove('slide-active');
        thirdSlide.classList.add('slide-non-active');
        fourthSlide.classList.add('slide-active');
        fourthSlide.classList.remove('slide-non-active');
        fifthSlide.classList.remove('slide-active');
        fifthSlide.classList.add('slide-non-active');
    }else if(n==5){
        firstSlide.classList.remove('slide-active');
        firstSlide.classList.add('slide-non-active');
        secondSlide.classList.remove('slide-active');
        secondSlide.classList.add('slide-non-active');
        thirdSlide.classList.remove('slide-active');
        thirdSlide.classList.add('slide-non-active');
        fourthSlide.classList.remove('slide-active');
        fourthSlide.classList.add('slide-non-active');
        fifthSlide.classList.add('slide-active');
        fifthSlide.classList.remove('slide-non-active');
    }
}
