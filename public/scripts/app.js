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

portfolio.hamburger = function () {
    $(".hamburger-menu").on("click", function () {
        console.log('clicked');
        // $(".page-nav .page-nav-menu").toggleClass("open");
    });
    $(".page-nav .page-nav-menu a").on("click", function () {
        $(".page-nav .page-nav-menu").toggleClass("open");
    });
};

portfolio.init = function () {
    // portfolio.smoothScroll();
    AOS.init({
        disable: 'mobile'
    });
    portfolio.bannerScroll();
    portfolio.hamburger();
};

$(function () {
    portfolio.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sWUFBWSxFQUFsQjs7QUFFQSxVQUFVLFlBQVYsR0FBeUIsWUFBVztBQUNoQyxRQUFJLFlBQUosQ0FBaUIsY0FBakIsRUFBaUM7QUFDN0I7QUFDQSxnQkFBUSxzQkFGcUIsRUFFRztBQUNoQyxnQkFBUSxJQUhxQixFQUdmO0FBQ2Q7QUFDQSxlQUFPLEdBTHNCLEVBS2pCO0FBQ1osZ0JBQVEsR0FOcUIsQ0FNakI7QUFOaUIsS0FBakM7QUFRSCxDQVREOztBQVdBLFVBQVUsWUFBVixHQUF5QixZQUFZO0FBQ2pDO0FBQ0EsUUFBSSxNQUFKO0FBQUEsUUFDSSxVQUFVLEVBQUUsV0FBRixDQURkO0FBQUEsUUFFSSxnQkFBZ0IsUUFBUSxXQUFSLEtBQXdCLEVBRjVDOztBQUdJO0FBQ0EsZ0JBQVksUUFBUSxJQUFSLENBQWEsR0FBYixDQUpoQjs7QUFLSTtBQUNBLGtCQUFjLFVBQVUsR0FBVixDQUFjLFlBQVk7QUFDcEMsWUFBSSxPQUFPLEVBQUUsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLE1BQWIsQ0FBRixDQUFYO0FBQ0EsWUFBSSxLQUFLLE1BQVQsRUFBaUI7QUFBRSxtQkFBTyxJQUFQO0FBQWM7QUFDcEMsS0FIYSxDQU5sQjs7QUFXQTtBQUNBO0FBQ0EsY0FBVSxLQUFWLENBQWdCLFVBQVUsQ0FBVixFQUFhO0FBQ3pCLFlBQUksT0FBTyxFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsTUFBYixDQUFYO0FBQUEsWUFDSSxZQUFZLFNBQVMsR0FBVCxHQUFlLENBQWYsR0FBbUIsRUFBRSxJQUFGLEVBQVEsTUFBUixHQUFpQixHQUFqQixHQUF1QixhQUF2QixHQUF1QyxDQUQxRTtBQUVBLFVBQUUsWUFBRixFQUFnQixJQUFoQixHQUF1QixPQUF2QixDQUErQjtBQUMzQix1QkFBVztBQURnQixTQUEvQixFQUVHLEdBRkg7QUFHQSxVQUFFLGNBQUY7QUFDSCxLQVBEOztBQVNBO0FBQ0EsTUFBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixZQUFZO0FBQ3pCO0FBQ0EsWUFBSSxVQUFVLEVBQUUsSUFBRixFQUFRLFNBQVIsS0FBc0IsYUFBcEM7O0FBRUE7QUFDQSxZQUFJLE1BQU0sWUFBWSxHQUFaLENBQWdCLFlBQVk7QUFDbEMsZ0JBQUksRUFBRSxJQUFGLEVBQVEsTUFBUixHQUFpQixHQUFqQixHQUF1QixPQUEzQixFQUNJLE9BQU8sSUFBUDtBQUNQLFNBSFMsQ0FBVjtBQUlBO0FBQ0EsY0FBTSxJQUFJLElBQUksTUFBSixHQUFhLENBQWpCLENBQU47QUFDQSxZQUFJLEtBQUssT0FBTyxJQUFJLE1BQVgsR0FBb0IsSUFBSSxDQUFKLEVBQU8sRUFBM0IsR0FBZ0MsRUFBekM7O0FBRUEsWUFBSSxXQUFXLEVBQWYsRUFBbUI7QUFDZixxQkFBUyxFQUFUO0FBQ0E7QUFDQSxzQkFDSyxNQURMLEdBQ2MsV0FEZCxDQUMwQixRQUQxQixFQUVLLEdBRkwsR0FFVyxNQUZYLENBRWtCLGFBQWEsRUFBYixHQUFrQixJQUZwQyxFQUUwQyxNQUYxQyxHQUVtRCxRQUZuRCxDQUU0RCxRQUY1RDtBQUdIO0FBQ0osS0FwQkQ7QUFxQkgsQ0E5Q0Q7O0FBZ0RBLFVBQVUsU0FBVixHQUFzQixZQUFXO0FBQzdCLE1BQUUsaUJBQUYsRUFBcUIsRUFBckIsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBWTtBQUN6QyxnQkFBUSxHQUFSLENBQVksU0FBWjtBQUNBO0FBQ0gsS0FIRDtBQUlBLE1BQUUsNEJBQUYsRUFBZ0MsRUFBaEMsQ0FBbUMsT0FBbkMsRUFBNEMsWUFBWTtBQUNwRCxVQUFFLDBCQUFGLEVBQThCLFdBQTlCLENBQTBDLE1BQTFDO0FBQ0gsS0FGRDtBQUdILENBUkQ7O0FBVUEsVUFBVSxJQUFWLEdBQWlCLFlBQVc7QUFDeEI7QUFDQSxRQUFJLElBQUosQ0FBUztBQUNMLGlCQUFTO0FBREosS0FBVDtBQUdBLGNBQVUsWUFBVjtBQUNBLGNBQVUsU0FBVjtBQUNILENBUEQ7O0FBU0EsRUFBRSxZQUFXO0FBQ1QsY0FBVSxJQUFWO0FBQ0gsQ0FGRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBwb3J0Zm9saW8gPSB7fTsgXG5cbnBvcnRmb2xpby5zbW9vdGhTY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICBuZXcgU21vb3RoU2Nyb2xsKCdhW2hyZWYqPVwiI1wiXScsIHtcbiAgICAgICAgLy8gU2VsZWN0b3JzXG4gICAgICAgIGlnbm9yZTogXCJbZGF0YS1zY3JvbGwtaWdub3JlXVwiLCAvLyBTZWxlY3RvciBmb3IgbGlua3MgdG8gaWdub3JlIChtdXN0IGJlIGEgdmFsaWQgQ1NTIHNlbGVjdG9yKVxuICAgICAgICBoZWFkZXI6IG51bGwsIC8vIFNlbGVjdG9yIGZvciBmaXhlZCBoZWFkZXJzIChtdXN0IGJlIGEgdmFsaWQgQ1NTIHNlbGVjdG9yKVxuICAgICAgICAvLyBTcGVlZCAmIEVhc2luZ1xuICAgICAgICBzcGVlZDogNTAwLCAvLyBJbnRlZ2VyLiBIb3cgZmFzdCB0byBjb21wbGV0ZSB0aGUgc2Nyb2xsIGluIG1pbGxpc2Vjb25kc1xuICAgICAgICBvZmZzZXQ6IDE1MCAvLyBJbnRlZ2VyIG9yIEZ1bmN0aW9uIHJldHVybmluZyBhbiBpbnRlZ2VyLiBIb3cgZmFyIHRvIG9mZnNldCB0aGUgc2Nyb2xsaW5nIGFuY2hvciBsb2NhdGlvbiBpbiBwaXhlbHNcbiAgICB9KTtcbn1cblxucG9ydGZvbGlvLmJhbm5lclNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBDYWNoZSBzZWxlY3RvcnNcbiAgICB2YXIgbGFzdElkLFxuICAgICAgICB0b3BNZW51ID0gJChcIiN0b3AtbWVudVwiKSxcbiAgICAgICAgdG9wTWVudUhlaWdodCA9IHRvcE1lbnUub3V0ZXJIZWlnaHQoKSArIDE1LFxuICAgICAgICAvLyBBbGwgbGlzdCBpdGVtc1xuICAgICAgICBtZW51SXRlbXMgPSB0b3BNZW51LmZpbmQoXCJhXCIpLFxuICAgICAgICAvLyBBbmNob3JzIGNvcnJlc3BvbmRpbmcgdG8gbWVudSBpdGVtc1xuICAgICAgICBzY3JvbGxJdGVtcyA9IG1lbnVJdGVtcy5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSAkKCQodGhpcykuYXR0cihcImhyZWZcIikpO1xuICAgICAgICAgICAgaWYgKGl0ZW0ubGVuZ3RoKSB7IHJldHVybiBpdGVtOyB9XG4gICAgICAgIH0pO1xuICAgIFxuICAgIC8vIEJpbmQgY2xpY2sgaGFuZGxlciB0byBtZW51IGl0ZW1zXG4gICAgLy8gc28gd2UgY2FuIGdldCBhIGZhbmN5IHNjcm9sbCBhbmltYXRpb25cbiAgICBtZW51SXRlbXMuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGhyZWYgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpLFxuICAgICAgICAgICAgb2Zmc2V0VG9wID0gaHJlZiA9PT0gXCIjXCIgPyAwIDogJChocmVmKS5vZmZzZXQoKS50b3AgLSB0b3BNZW51SGVpZ2h0ICsgMTtcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogb2Zmc2V0VG9wXG4gICAgICAgIH0sIDMwMCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgICBcbiAgICAvLyBCaW5kIHRvIHNjcm9sbFxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBHZXQgY29udGFpbmVyIHNjcm9sbCBwb3NpdGlvblxuICAgICAgICB2YXIgZnJvbVRvcCA9ICQodGhpcykuc2Nyb2xsVG9wKCkgKyB0b3BNZW51SGVpZ2h0O1xuICAgIFxuICAgICAgICAvLyBHZXQgaWQgb2YgY3VycmVudCBzY3JvbGwgaXRlbVxuICAgICAgICB2YXIgY3VyID0gc2Nyb2xsSXRlbXMubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLm9mZnNldCgpLnRvcCA8IGZyb21Ub3ApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBHZXQgdGhlIGlkIG9mIHRoZSBjdXJyZW50IGVsZW1lbnRcbiAgICAgICAgY3VyID0gY3VyW2N1ci5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlkID0gY3VyICYmIGN1ci5sZW5ndGggPyBjdXJbMF0uaWQgOiBcIlwiO1xuICAgIFxuICAgICAgICBpZiAobGFzdElkICE9PSBpZCkge1xuICAgICAgICAgICAgbGFzdElkID0gaWQ7XG4gICAgICAgICAgICAvLyBTZXQvcmVtb3ZlIGFjdGl2ZSBjbGFzc1xuICAgICAgICAgICAgbWVudUl0ZW1zXG4gICAgICAgICAgICAgICAgLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgLmVuZCgpLmZpbHRlcihcIltocmVmPScjXCIgKyBpZCArIFwiJ11cIikucGFyZW50KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxucG9ydGZvbGlvLmhhbWJ1cmdlciA9IGZ1bmN0aW9uKCkge1xuICAgICQoXCIuaGFtYnVyZ2VyLW1lbnVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XG4gICAgICAgIC8vICQoXCIucGFnZS1uYXYgLnBhZ2UtbmF2LW1lbnVcIikudG9nZ2xlQ2xhc3MoXCJvcGVuXCIpO1xuICAgIH0pO1xuICAgICQoXCIucGFnZS1uYXYgLnBhZ2UtbmF2LW1lbnUgYVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIi5wYWdlLW5hdiAucGFnZS1uYXYtbWVudVwiKS50b2dnbGVDbGFzcyhcIm9wZW5cIik7XG4gICAgfSk7XG59XG5cbnBvcnRmb2xpby5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gcG9ydGZvbGlvLnNtb290aFNjcm9sbCgpO1xuICAgIEFPUy5pbml0KHtcbiAgICAgICAgZGlzYWJsZTogJ21vYmlsZSdcbiAgICB9KTtcbiAgICBwb3J0Zm9saW8uYmFubmVyU2Nyb2xsKCk7XG4gICAgcG9ydGZvbGlvLmhhbWJ1cmdlcigpO1xufTtcblxuJChmdW5jdGlvbigpIHtcbiAgICBwb3J0Zm9saW8uaW5pdCgpOyBcbn0pOyJdfQ==
