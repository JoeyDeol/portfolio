const portfolio = {}; 

portfolio.smoothScroll = function() {
    new SmoothScroll('a[href*="#"]', {
        // Selectors
        ignore: "[data-scroll-ignore]", // Selector for links to ignore (must be a valid CSS selector)
        header: null, // Selector for fixed headers (must be a valid CSS selector)
        // Speed & Easing
        speed: 500, // Integer. How fast to complete the scroll in milliseconds
        offset: 150 // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
    });
}

portfolio.bannerScroll = function () {
    // Cache selectors
    var lastId,
        topMenu = $("#top-menu"),
        topMenuHeight = topMenu.outerHeight() + 15,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });
    
    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });
    
    // Bind to scroll
    $(window).scroll(function () {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;
    
        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";
    
        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#" + id + "']").parent().addClass("active");
        }
    });
}

portfolio.hamburger = function() {
    $(".hamburger-menu").on("click", function () {
        console.log('clicked');
        // $(".page-nav .page-nav-menu").toggleClass("open");
    });
    $(".page-nav .page-nav-menu a").on("click", function () {
        $(".page-nav .page-nav-menu").toggleClass("open");
    });
}

portfolio.init = function() {
    // portfolio.smoothScroll();
    AOS.init({
        disable: 'mobile'
    });
    portfolio.bannerScroll();
    portfolio.hamburger();
};

$(function() {
    portfolio.init(); 
});