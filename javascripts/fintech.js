//semantic modules
//dropdown
$('.ui.dropdown').dropdown();
$('.ui.checkbox')
  .checkbox()
;
$('.ui.accordion')
  .accordion()
;

//fintech modules
$(".filter .text").click(function() {
    $(this).parent().toggleClass("opened");
});
$(".collapse-btn").click(function() {
    $(".ui.content.container").toggleClass("expand-content");
    $(".top .menu").toggleClass("expand");
});
$(".top .menu-nav").click(function() {
    $(".ui.content.container").toggleClass("expand-content");
    $(".top .menu-nav").toggleClass("expand");
});
