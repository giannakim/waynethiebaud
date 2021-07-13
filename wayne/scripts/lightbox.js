const openLightBox = function(event){
    console.log(event.target.src);

    let lightboxPrefix = window.location.protocol + '//' + window.location.host + '/wnm601/m14';

    if(event.target.src == lightboxPrefix + '/img/displaycakes.jpg'){
        x = "Display Cakes 1963";
    } else if(event.target.src == lightboxPrefix + '/img/custurd.jpg'){
        x = "Blueberry Custard 1961";
    } else if(event.target.src == lightboxPrefix + '/img/boxedballs.jpg'){
        x = "Boxed Balls 1979";
    } else if(event.target.src == lightboxPrefix + '/img/lollipop.jpg'){
        x = "Lollipop 1987";
    } else if(event.target.src == lightboxPrefix + '/img/eightlipsticks.jpg'){
        x = "Eight Lipsticks 1988";
    } else if(event.target.src == lightboxPrefix + '/img/twopaintcans.jpg'){
        x = "Two Paint Cans 1987";
    } else{
        x = "Artwork";
    }


    $(".lightbox-content").html(
        "<img src='" + event.target.src + "'>" + "<h6>" + x + "</h6>"
    );

    $(".lightbox").addClass("active");
}




$(function(){

    $("body").on("click", ".gallery img", openLightBox);

    $(".lightbox-back").on("click", function(){
        $(".lightbox").removeClass("active");
    })
});

