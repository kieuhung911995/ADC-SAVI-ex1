//event onclick header-menu
function myFunction(x) {
    const myNav=document.getElementById("myNav")
    x.classList.toggle("change");
    if (x.classList[1]==="change") {
        myNav.classList.toggle("active");
        console.log(x.classList);
    } else {
        myNav.classList.remove("active");
        console.log(x.classList);
    }
  }
//slideShow
$(document).ready(function(){
    $(".certyficate-info-container").owlCarousel(
        {
            loop:true,
            margin:10,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true,         
                },
                767:{
                    items:3,
                    nav:true,                
                },
                991:{
                    items:5,
                    nav:true,                   
                },
                1200:{
                    items:6,
                    nav:true,
                    loop:false,
                },
            }
        }
    );
  });