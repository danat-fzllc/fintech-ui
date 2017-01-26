$(window).on('scroll',function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".ui.container.fintech").addClass("scroll");
    } else {
        $(".ui.container.fintech").removeClass("scroll");
    }
});
//semantic modules
//dropdown
$('.ui.dropdown')
  .dropdown({
    allowCategorySelection: true
  });


// clear the generated semantic-ui menu
var $menu = $('<div/>').addClass('menu');
$('.optgroups').each(function(){
   debugger
   var parentthis=$(this);
   $(this).find('optgroup').each(function (index, element) {
      $menu.append('<div class="header ui horizontal divider">' + element.label + '</div>')
      $(element).children().each(function(i, e){
          $menu.append('<div class="item" data-value="' + e.value + '">' + e.innerHTML + '</div>');
      })
   })
   $(this).find('.menu').html($menu.html());
   $menu="";
   $menu = $('<div/>').addClass('menu');
});




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
//Share 
$('.button.share').click(function() {
        $('.button.share .list').toggle(300);
    });
$(document).mouseup(function(e) {
    var container = $(".button.share .list");
    if (!container.is(e.target) // if the target of the click isn't the container...
        &&
        container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
    }
});
//fintech modules
$(".sidebar-toggler-arrow").click(function() {
    $(".ui.content.container").toggleClass("no-side-bar");
});



//resizing pannel script
//<![CDATA[
$(window).load(function(){
$(document).ready(function() {





var resize= $(".resize-left-column");
var containerWidth = $("#container").width();
   
$(resize).resizable({
     handles: 'e',
     maxWidth: 350,
     minWidth: 250,
     resize: function(event, ui){
         var currentWidth = ui.size.width;
         
         // this accounts for padding in the panels + 
         // borders, you could calculate this using jQuery
         var padding = 20; 
         
         // this accounts for some lag in the ui.size value, if you take this away 
         // you'll get some instable behaviour
         $(this).width(currentWidth);
         
         // set the content panel width
         $(".resize-right-column").width(containerWidth - currentWidth - padding);            
     }
});


});
});