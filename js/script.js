$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navebar').addClass("sticky");

        }else{
            $('.navebar').removeClass("sticky");
        }
    });
    $('.menu-btn').Click(function(){
        $('.navebar .menu').toggleClass('active');
    });

    $('.corousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        Responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

});
var top1 = document.querySelector('.top1');
// var btn =document.querySelector('.menu-btn');
// var menu =document.querySelector('.navebar .menu');
window.onscroll = () => {
    
    if (window.scrollY >100) {
        top1.classList.add('show');
    }else {
        top1.classList.remove('show');
    }
}
top1.onclick = () => {
    window.scrollTo({
        top : 0,
        behavior: 'smooth',
    })
};