function Expand(obj) {
    if (!obj.savesize) obj.savesize = obj.size;
    obj.size = Math.max(obj.savesize, obj.value.length);
}


//semantic modules
//dropdown
$('.ui.dropdown')
    .dropdown({
        allowCategorySelection: true
    });
$('.ui.progress').progress({
    showActivity: false
});

// clear the generated semantic-ui menu
var $menu = $('<div/>').addClass('menu');
$('.optgroups').each(function() {
    //debugger
    var parentthis = $(this);
    $(this).find('optgroup').each(function(index, element) {
        $menu.append('<div class="header ui horizontal divider">' + element.label + '</div>')
        $(element).children().each(function(i, e) {
            $menu.append('<div class="item" data-value="' + e.value + '">' + e.innerHTML + '</div>');
        })
    })
    $(this).find('.menu').html($menu.html());
    $menu = "";
    $menu = $('<div/>').addClass('menu');
});




$('.ui.checkbox')
    .checkbox();
$('.ui.accordion')
    .accordion()


$('.notification-filter-popup.modal')
    .modal('setting', 'transition', 'fade')
    .modal('attach events', '.notification-filter-button', 'show');

$('.button.date-period')
    .popup({
        inline: true,
        position: 'top left'
    });
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

$('.tabs-home .item').tab({
    history: false
});

//resizing pannel script
//<![CDATA[
$(window).load(function() {
    $(document).ready(function() {


        if ($(window).width() > 1000) {
            $(window).on('scroll', function() {
                var scroll = $(window).scrollTop();

                if (scroll >= 200) {
                    $(".ui.container.content-container").addClass("scroll");
                } else {
                    $(".ui.container.content-container").removeClass("scroll");
                }
            });
            var resize = $(".resize-left-column");
            var containerWidth = $("#container").width();

            $(resize).resizable({
                handles: 'e',
                maxWidth: 350,
                minWidth: 250,
                resize: function(event, ui) {
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
            $(".grid.home .ui.tab").addClass("column").removeClass("segment ui tab");

        } else {
            //script for mobile menu and fitler
            var TopHeight = $(".fintech .top").height() + 0;
            $(".content-container").css({
                'padding-top': TopHeight
            });

            $(".main-nav-button").click(function() {
                $("body").addClass("menu-open no-scroll");
                $('.main-nav').addClass("overlay-container");

                var height = $(".main-nav .holder").height();
                $(".main-nav .holder").css({
                    height: height
                });
                $(".main-nav .holder").addClass("menu-holder");
            });
            $(".main-nav .close").click(function() {

                $("body").removeClass("menu-open no-scroll");
            });

            $(".filter").click(function() {
                $(".page.filters").addClass("show");
                $("body").addClass("no-scroll");
            });
            $(".page.filters .header .close").click(function() {
                $(".page.filters").removeClass("show");
                $("body").removeClass("no-scroll");

            });

            $(".country-selection input.search").prop('readonly', true);

            //script for mobile menu and fitler end
        }
    });
});
//clock
$(document).ready(function() {

    setInterval(function() {
        var seconds = new Date().getSeconds();
        var sdegree = seconds * 6;
        var srotate = "rotate(" + sdegree + "deg)";

        $("#sec").css({
            "-moz-transform": srotate,
            "-webkit-transform": srotate
        });

    }, 1000);


    setInterval(function() {
        var hours = new Date().getHours();
        var mins = new Date().getMinutes();
        var hdegree = hours * 30 + (mins / 2);
        var hrotate = "rotate(" + hdegree + "deg)";

        $("#hour").css({
            "-moz-transform": hrotate,
            "-webkit-transform": hrotate
        });

    }, 1000);


    setInterval(function() {
        var mins = new Date().getMinutes();
        var mdegree = mins * 6;
        var mrotate = "rotate(" + mdegree + "deg)";

        $("#min").css({
            "-moz-transform": mrotate,
            "-webkit-transform": mrotate
        });

    }, 1000);
    var WindowHeight = $(window).height();
    var HeaderHeight = $(".top").height();
    var QuestionHeight = $(".question.page").height() + 24;
    var FooterHeight = $("footer").height() + 30;
    var BreadcrumbHeight = $("#breadcrumb-container").height();
    var ExtraHeight = HeaderHeight + FooterHeight;
    var ContentHeight = WindowHeight - ExtraHeight;
    var ContainerHeight = ContentHeight - QuestionHeight;

    //alert(BreadcrumbHeight);
    $(".coming-soon-page").css({
        'height': ContentHeight
    });

    $("#container").css({
        'min-height': ContainerHeight
    });
    if ($('#breadcrumb-container').length == 1) {
        $("#container").css({
            'min-height': ContainerHeight - BreadcrumbHeight
        });
    }
    $(".notification-filter-popup").parent().addClass('inverted notification-filter-popup-container');


});

//input number auto resize
$.fn.textWidth = function(_text, _font) { //get width of text with font.  usage: $("div").textWidth();
    var fakeEl = $('<span>').hide().appendTo(document.body).text(_text || this.val() || this.text()).css('font', _font || this.css('font')),
        width = fakeEl.width();
    fakeEl.remove();
    return width;
};

$.fn.autoresize = function(options) { //resizes elements based on content size.  usage: $('input').autoresize({padding:10,minWidth:0,maxWidth:100});
    options = $.extend({
        padding: 10,
        minWidth: 0,
        maxWidth: 10000
    }, options || {});
    $(this).on('input', function() {
        $(this).css('width', Math.min(options.maxWidth, Math.max(options.minWidth, $(this).textWidth() + options.padding)));
    }).trigger('input');
    return this;
}


$(".auto-resize").autoresize({
    padding: 25,
    minWidth: 20,
    maxWidth: 300
});