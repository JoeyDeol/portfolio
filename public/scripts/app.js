(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var portfolio = {};

portfolio.smoothScroll = function () {
    new SmoothScroll('a[href*="#"]', {
        // Selectors
        ignore: "[data-scroll-ignore]", // Selector for links to ignore (must be a valid CSS selector)
        header: null, // Selector for fixed headers (must be a valid CSS selector)
        // Speed & Easing
        speed: 500, // Integer. How fast to complete the scroll in milliseconds
        offset: 150 // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
    });
};

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
        if (item.length) {
            return item;
        }
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
            if ($(this).offset().top < fromTop) return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems.parent().removeClass("active").end().filter("[href='#" + id + "']").parent().addClass("active");
        }
    });
};

portfolio.init = function () {
    // portfolio.smoothScroll();
    AOS.init({
        disable: 'mobile'
    });
    portfolio.bannerScroll();
};

$(function () {
    portfolio.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sWUFBWSxFQUFsQjs7QUFFQSxVQUFVLFlBQVYsR0FBeUIsWUFBVztBQUNoQyxRQUFJLFlBQUosQ0FBaUIsY0FBakIsRUFBaUM7QUFDN0I7QUFDQSxnQkFBUSxzQkFGcUIsRUFFRztBQUNoQyxnQkFBUSxJQUhxQixFQUdmO0FBQ2Q7QUFDQSxlQUFPLEdBTHNCLEVBS2pCO0FBQ1osZ0JBQVEsR0FOcUIsQ0FNakI7QUFOaUIsS0FBakM7QUFRSCxDQVREOztBQVdBLFVBQVUsWUFBVixHQUF5QixZQUFZO0FBQ2pDO0FBQ0EsUUFBSSxNQUFKO0FBQUEsUUFDSSxVQUFVLEVBQUUsV0FBRixDQURkO0FBQUEsUUFFSSxnQkFBZ0IsUUFBUSxXQUFSLEtBQXdCLEVBRjVDOztBQUdJO0FBQ0EsZ0JBQVksUUFBUSxJQUFSLENBQWEsR0FBYixDQUpoQjs7QUFLSTtBQUNBLGtCQUFjLFVBQVUsR0FBVixDQUFjLFlBQVk7QUFDcEMsWUFBSSxPQUFPLEVBQUUsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLE1BQWIsQ0FBRixDQUFYO0FBQ0EsWUFBSSxLQUFLLE1BQVQsRUFBaUI7QUFBRSxtQkFBTyxJQUFQO0FBQWM7QUFDcEMsS0FIYSxDQU5sQjs7QUFXQTtBQUNBO0FBQ0EsY0FBVSxLQUFWLENBQWdCLFVBQVUsQ0FBVixFQUFhO0FBQ3pCLFlBQUksT0FBTyxFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsTUFBYixDQUFYO0FBQUEsWUFDSSxZQUFZLFNBQVMsR0FBVCxHQUFlLENBQWYsR0FBbUIsRUFBRSxJQUFGLEVBQVEsTUFBUixHQUFpQixHQUFqQixHQUF1QixhQUF2QixHQUF1QyxDQUQxRTtBQUVBLFVBQUUsWUFBRixFQUFnQixJQUFoQixHQUF1QixPQUF2QixDQUErQjtBQUMzQix1QkFBVztBQURnQixTQUEvQixFQUVHLEdBRkg7QUFHQSxVQUFFLGNBQUY7QUFDSCxLQVBEOztBQVNBO0FBQ0EsTUFBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixZQUFZO0FBQ3pCO0FBQ0EsWUFBSSxVQUFVLEVBQUUsSUFBRixFQUFRLFNBQVIsS0FBc0IsYUFBcEM7O0FBRUE7QUFDQSxZQUFJLE1BQU0sWUFBWSxHQUFaLENBQWdCLFlBQVk7QUFDbEMsZ0JBQUksRUFBRSxJQUFGLEVBQVEsTUFBUixHQUFpQixHQUFqQixHQUF1QixPQUEzQixFQUNJLE9BQU8sSUFBUDtBQUNQLFNBSFMsQ0FBVjtBQUlBO0FBQ0EsY0FBTSxJQUFJLElBQUksTUFBSixHQUFhLENBQWpCLENBQU47QUFDQSxZQUFJLEtBQUssT0FBTyxJQUFJLE1BQVgsR0FBb0IsSUFBSSxDQUFKLEVBQU8sRUFBM0IsR0FBZ0MsRUFBekM7O0FBRUEsWUFBSSxXQUFXLEVBQWYsRUFBbUI7QUFDZixxQkFBUyxFQUFUO0FBQ0E7QUFDQSxzQkFDSyxNQURMLEdBQ2MsV0FEZCxDQUMwQixRQUQxQixFQUVLLEdBRkwsR0FFVyxNQUZYLENBRWtCLGFBQWEsRUFBYixHQUFrQixJQUZwQyxFQUUwQyxNQUYxQyxHQUVtRCxRQUZuRCxDQUU0RCxRQUY1RDtBQUdIO0FBQ0osS0FwQkQ7QUFxQkgsQ0E5Q0Q7O0FBZ0RBLFVBQVUsSUFBVixHQUFpQixZQUFXO0FBQ3hCO0FBQ0EsUUFBSSxJQUFKLENBQVM7QUFDTCxpQkFBUztBQURKLEtBQVQ7QUFHQSxjQUFVLFlBQVY7QUFDSCxDQU5EOztBQVFBLEVBQUUsWUFBVztBQUNULGNBQVUsSUFBVjtBQUNILENBRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3QgcG9ydGZvbGlvID0ge307IFxuXG5wb3J0Zm9saW8uc21vb3RoU2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gICAgbmV3IFNtb290aFNjcm9sbCgnYVtocmVmKj1cIiNcIl0nLCB7XG4gICAgICAgIC8vIFNlbGVjdG9yc1xuICAgICAgICBpZ25vcmU6IFwiW2RhdGEtc2Nyb2xsLWlnbm9yZV1cIiwgLy8gU2VsZWN0b3IgZm9yIGxpbmtzIHRvIGlnbm9yZSAobXVzdCBiZSBhIHZhbGlkIENTUyBzZWxlY3RvcilcbiAgICAgICAgaGVhZGVyOiBudWxsLCAvLyBTZWxlY3RvciBmb3IgZml4ZWQgaGVhZGVycyAobXVzdCBiZSBhIHZhbGlkIENTUyBzZWxlY3RvcilcbiAgICAgICAgLy8gU3BlZWQgJiBFYXNpbmdcbiAgICAgICAgc3BlZWQ6IDUwMCwgLy8gSW50ZWdlci4gSG93IGZhc3QgdG8gY29tcGxldGUgdGhlIHNjcm9sbCBpbiBtaWxsaXNlY29uZHNcbiAgICAgICAgb2Zmc2V0OiAxNTAgLy8gSW50ZWdlciBvciBGdW5jdGlvbiByZXR1cm5pbmcgYW4gaW50ZWdlci4gSG93IGZhciB0byBvZmZzZXQgdGhlIHNjcm9sbGluZyBhbmNob3IgbG9jYXRpb24gaW4gcGl4ZWxzXG4gICAgfSk7XG59XG5cbnBvcnRmb2xpby5iYW5uZXJTY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gQ2FjaGUgc2VsZWN0b3JzXG4gICAgdmFyIGxhc3RJZCxcbiAgICAgICAgdG9wTWVudSA9ICQoXCIjdG9wLW1lbnVcIiksXG4gICAgICAgIHRvcE1lbnVIZWlnaHQgPSB0b3BNZW51Lm91dGVySGVpZ2h0KCkgKyAxNSxcbiAgICAgICAgLy8gQWxsIGxpc3QgaXRlbXNcbiAgICAgICAgbWVudUl0ZW1zID0gdG9wTWVudS5maW5kKFwiYVwiKSxcbiAgICAgICAgLy8gQW5jaG9ycyBjb3JyZXNwb25kaW5nIHRvIG1lbnUgaXRlbXNcbiAgICAgICAgc2Nyb2xsSXRlbXMgPSBtZW51SXRlbXMubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gJCgkKHRoaXMpLmF0dHIoXCJocmVmXCIpKTtcbiAgICAgICAgICAgIGlmIChpdGVtLmxlbmd0aCkgeyByZXR1cm4gaXRlbTsgfVxuICAgICAgICB9KTtcbiAgICBcbiAgICAvLyBCaW5kIGNsaWNrIGhhbmRsZXIgdG8gbWVudSBpdGVtc1xuICAgIC8vIHNvIHdlIGNhbiBnZXQgYSBmYW5jeSBzY3JvbGwgYW5pbWF0aW9uXG4gICAgbWVudUl0ZW1zLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBocmVmID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKSxcbiAgICAgICAgICAgIG9mZnNldFRvcCA9IGhyZWYgPT09IFwiI1wiID8gMCA6ICQoaHJlZikub2Zmc2V0KCkudG9wIC0gdG9wTWVudUhlaWdodCArIDE7XG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IG9mZnNldFRvcFxuICAgICAgICB9LCAzMDApO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gICAgXG4gICAgLy8gQmluZCB0byBzY3JvbGxcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gR2V0IGNvbnRhaW5lciBzY3JvbGwgcG9zaXRpb25cbiAgICAgICAgdmFyIGZyb21Ub3AgPSAkKHRoaXMpLnNjcm9sbFRvcCgpICsgdG9wTWVudUhlaWdodDtcbiAgICBcbiAgICAgICAgLy8gR2V0IGlkIG9mIGN1cnJlbnQgc2Nyb2xsIGl0ZW1cbiAgICAgICAgdmFyIGN1ciA9IHNjcm9sbEl0ZW1zLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5vZmZzZXQoKS50b3AgPCBmcm9tVG9wKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gR2V0IHRoZSBpZCBvZiB0aGUgY3VycmVudCBlbGVtZW50XG4gICAgICAgIGN1ciA9IGN1cltjdXIubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpZCA9IGN1ciAmJiBjdXIubGVuZ3RoID8gY3VyWzBdLmlkIDogXCJcIjtcbiAgICBcbiAgICAgICAgaWYgKGxhc3RJZCAhPT0gaWQpIHtcbiAgICAgICAgICAgIGxhc3RJZCA9IGlkO1xuICAgICAgICAgICAgLy8gU2V0L3JlbW92ZSBhY3RpdmUgY2xhc3NcbiAgICAgICAgICAgIG1lbnVJdGVtc1xuICAgICAgICAgICAgICAgIC5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKVxuICAgICAgICAgICAgICAgIC5lbmQoKS5maWx0ZXIoXCJbaHJlZj0nI1wiICsgaWQgKyBcIiddXCIpLnBhcmVudCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbnBvcnRmb2xpby5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gcG9ydGZvbGlvLnNtb290aFNjcm9sbCgpO1xuICAgIEFPUy5pbml0KHtcbiAgICAgICAgZGlzYWJsZTogJ21vYmlsZSdcbiAgICB9KTtcbiAgICBwb3J0Zm9saW8uYmFubmVyU2Nyb2xsKCk7XG59O1xuXG4kKGZ1bmN0aW9uKCkge1xuICAgIHBvcnRmb2xpby5pbml0KCk7IFxufSk7Il19
