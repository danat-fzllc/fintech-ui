//semantic modules
//dropdown
$('.ui.dropdown')
  .dropdown({
    allowCategorySelection: true
  })
;
$('.ui.checkbox')
  .checkbox()
;
$('.ui.accordion')
  .accordion()
;

$('.button.date-period')
  .popup({
        inline : true,
        position   : 'top left'
  })
;
//fintech modules
$(".filter .text").click(function() {
    $(this).parent().toggleClass("opened");
});
$(".collapse-btn").click(function() {
    $(".ui.content.container").toggleClass("expand-content");
    $(".top .menu").toggleClass("expand");
});
$(".show.filter-button").click(function() {
    $(".ui.content.container").toggleClass("expand-content");
    $(".top .menu-nav").toggleClass("expand");
});
$(".filters .hide.icon").click(function() {
    $(".ui.content.container").toggleClass("expand-content");
    $(".top .menu-nav").toggleClass("expand");
});



//resizing pannel script
//<![CDATA[
$(window).load(function(){
$(document).ready(function() {


// var width = $('.aggregate-chart .arrow').width();
// // var width = document.getElementsByClassName(".aggregate-chart .arrow").width();

// if (width == 0){
//     $('.aggregate-chart .arrow').addClass('no-change');
// }


// init
var leftPanel = $("#left_slide_panel");
var resize= $(".resize-left-column");
var containerWidth = $("#container").width();
   
$(resize).resizable({
     handles: 'e',
     maxWidth: 350,
     minWidth: 230,
     resize: function(event, ui){
         var currentWidth = ui.size.width;
         
         // this accounts for padding in the panels + 
         // borders, you could calculate this using jQuery
         var padding = 12; 
         
         // this accounts for some lag in the ui.size value, if you take this away 
         // you'll get some instable behaviour
         $(this).width(currentWidth);
         
         // set the content panel width
         $(".resize-right-column").width(containerWidth - currentWidth - padding);            
     }
});


});
});//]]> 