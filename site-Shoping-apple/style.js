// searche buttom
searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle('active');
}
// login form
var loginform = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick = () => {
    loginform.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick = () => {
    loginform.classList.remove('active')
}
/* <!-- home section start  --> */
var swipper = new Swiper('.books-list', {
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:1500,
        disableOnInteraction:false,
    },
    breakpoints:{
        0:{
            slidesPerview:1,
        },
        768:{
            slidesPerview:2,
        },
        1024:{
            slidesPerview:3,
        },
    },
});
/* <!-- featired section start  --> */
var swiper = new Swiper(".featured-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    navigation: {
        nextE1:".swiper-button-next",
        prevE1:".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerview:1,
        },
        450:{
            slidesPerview:2,
        },
        768:{
            slidesPerview:3,

        },
        1024:{
            slidesPerview:4,
        },
    },
});
/* <!-- arrivals section start  --> */
var swiper = Swiper(".arrivals-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints:{
        0:{
            slidesPerview:1,
        },
        768:{
            slidesPerview:3,

        },
        1024:{
            slidesPerview:4,
        },
    },
});
/* <!-- deal section start  --> */
var swiper = new Swiper(".review-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints:{
        0:{
            slidesPerview:1,
        },
        768:{
            slidesPerview:3,

        },
        1024:{
            slidesPerview:4,
        },
    },
});
var swiper = new Swiper(".blog-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints:{
        0:{
            slidesPerview:1,
        },
        768:{
            slidesPerview:2,

        },
        1024:{
            slidesPerview:3,
        },
    },
});
