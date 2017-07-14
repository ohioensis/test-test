$(document).ready(function() {
	$(".burger").click(function() {
		$(".header-menu").addClass("header-menu--show");
	});
	$(".header-menu__close").click(function() {
		$(".header-menu").removeClass("header-menu--show");
	});
    $(".advantages__item").hover(function() {
        $(this).css("advantages__item--hover");
    }, function() {
        $(this).removeClass("advantages__item--hover");
    });
    $(".advantages__item").hover(function() {
        $(this).prevAll(".advantages__item").css("opacity", "0.2");
    }, function() {
        $(this).prevAll(".advantages__item").css("opacity", "1");
    });
});

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $(".page-header").outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    if (st > lastScrollTop && st > navbarHeight){
        
        $(".page-header").removeClass("page-header--down").addClass("page-header--up");
    } else {
      
        if(st + $(window).height() < $(document).height()) {
            $(".page-header").removeClass("page-header--up").addClass("page-header--down");
        }
    }
    
    lastScrollTop = st;
}

