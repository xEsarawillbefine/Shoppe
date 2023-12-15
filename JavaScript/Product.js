var elements = document.getElementsByClassName("deskr");
var n;
var under_product = document.getElementsByClassName("under-product-info-style");

function changeInfo(n){
    if(n==1){
        for(var i =0; i<3; i++){
            elements[i].classList.add('non-active-link');
            elements[i].classList.remove('active-link');
            under_product[i].classList.add('non-active-info');
            under_product[i].classList.remove('active-info');
        }
        elements[n-1].classList.add('active-link');
        elements[n-1].classList.remove('non-active-link');
        under_product[n-1].classList.add('active-info');
        under_product[n-1].classList.remove('non-active-info');
    }
    else if(n==2){
        for(var i =0; i<3; i++){
            elements[i].classList.add('non-active-link');
            elements[i].classList.remove('active-link');
            under_product[i].classList.add('non-active-info');
            under_product[i].classList.remove('active-info');
        }
        elements[n-1].classList.add('active-link');
        elements[n-1].classList.remove('non-active-link');
        under_product[n-1].classList.add('active-info');
        under_product[n-1].classList.remove('non-active-info');
    }
    else if(n==3){
        for(var i =0; i<3; i++){
            elements[i].classList.add('non-active-link');
            elements[i].classList.remove('active-link');
            under_product[i].classList.add('non-active-info');
            under_product[i].classList.remove('active-info');
        }
        elements[n-1].classList.add('active-link');
        elements[n-1].classList.remove('non-active-link');
        under_product[n-1].classList.add('active-info');
        under_product[n-1].classList.remove('non-active-info');
    }
}