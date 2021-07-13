$(".complicated a.category_topic").on("click", function(){
    let index = $(this).index(".complicated a.category_topic");
    let nextSibling = $(".complicated ul").eq(index);

    if(nextSibling.is(":visible")){
        nextSibling.slideUp();
    } else{
        nextSibling.slideDown().siblings("ul").slideUp();
    }

});