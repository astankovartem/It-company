$(function () {
    let burger = $(".burger");
    let burger_window = $(".burger_window");
    burger.click(function(){
        burger_window.toggleClass("active");
    });
})