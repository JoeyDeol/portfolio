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
    portfolio.bannerScroll();
};

$(function () {
    portfolio.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sWUFBWSxFQUFsQjs7QUFFQSxVQUFVLFlBQVYsR0FBeUIsWUFBVztBQUNoQyxRQUFJLFlBQUosQ0FBaUIsY0FBakIsRUFBaUM7QUFDN0I7QUFDQSxnQkFBUSxzQkFGcUIsRUFFRztBQUNoQyxnQkFBUSxJQUhxQixFQUdmO0FBQ2Q7QUFDQSxlQUFPLEdBTHNCLEVBS2pCO0FBQ1osZ0JBQVEsR0FOcUIsQ0FNakI7QUFOaUIsS0FBakM7QUFRSCxDQVREOztBQVdBLFVBQVUsWUFBVixHQUF5QixZQUFZO0FBQ2pDO0FBQ0EsUUFBSSxNQUFKO0FBQUEsUUFDSSxVQUFVLEVBQUUsV0FBRixDQURkO0FBQUEsUUFFSSxnQkFBZ0IsUUFBUSxXQUFSLEtBQXdCLEVBRjVDOztBQUdJO0FBQ0EsZ0JBQVksUUFBUSxJQUFSLENBQWEsR0FBYixDQUpoQjs7QUFLSTtBQUNBLGtCQUFjLFVBQVUsR0FBVixDQUFjLFlBQVk7QUFDcEMsWUFBSSxPQUFPLEVBQUUsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLE1BQWIsQ0FBRixDQUFYO0FBQ0EsWUFBSSxLQUFLLE1BQVQsRUFBaUI7QUFBRSxtQkFBTyxJQUFQO0FBQWM7QUFDcEMsS0FIYSxDQU5sQjs7QUFXQTtBQUNBO0FBQ0EsY0FBVSxLQUFWLENBQWdCLFVBQVUsQ0FBVixFQUFhO0FBQ3pCLFlBQUksT0FBTyxFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsTUFBYixDQUFYO0FBQUEsWUFDSSxZQUFZLFNBQVMsR0FBVCxHQUFlLENBQWYsR0FBbUIsRUFBRSxJQUFGLEVBQVEsTUFBUixHQUFpQixHQUFqQixHQUF1QixhQUF2QixHQUF1QyxDQUQxRTtBQUVBLFVBQUUsWUFBRixFQUFnQixJQUFoQixHQUF1QixPQUF2QixDQUErQjtBQUMzQix1QkFBVztBQURnQixTQUEvQixFQUVHLEdBRkg7QUFHQSxVQUFFLGNBQUY7QUFDSCxLQVBEOztBQVNBO0FBQ0EsTUFBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixZQUFZO0FBQ3pCO0FBQ0EsWUFBSSxVQUFVLEVBQUUsSUFBRixFQUFRLFNBQVIsS0FBc0IsYUFBcEM7O0FBRUE7QUFDQSxZQUFJLE1BQU0sWUFBWSxHQUFaLENBQWdCLFlBQVk7QUFDbEMsZ0JBQUksRUFBRSxJQUFGLEVBQVEsTUFBUixHQUFpQixHQUFqQixHQUF1QixPQUEzQixFQUNJLE9BQU8sSUFBUDtBQUNQLFNBSFMsQ0FBVjtBQUlBO0FBQ0EsY0FBTSxJQUFJLElBQUksTUFBSixHQUFhLENBQWpCLENBQU47QUFDQSxZQUFJLEtBQUssT0FBTyxJQUFJLE1BQVgsR0FBb0IsSUFBSSxDQUFKLEVBQU8sRUFBM0IsR0FBZ0MsRUFBekM7O0FBRUEsWUFBSSxXQUFXLEVBQWYsRUFBbUI7QUFDZixxQkFBUyxFQUFUO0FBQ0E7QUFDQSxzQkFDSyxNQURMLEdBQ2MsV0FEZCxDQUMwQixRQUQxQixFQUVLLEdBRkwsR0FFVyxNQUZYLENBRWtCLGFBQWEsRUFBYixHQUFrQixJQUZwQyxFQUUwQyxNQUYxQyxHQUVtRCxRQUZuRCxDQUU0RCxRQUY1RDtBQUdIO0FBQ0osS0FwQkQ7QUFxQkgsQ0E5Q0Q7O0FBZ0RBLFVBQVUsSUFBVixHQUFpQixZQUFXO0FBQ3hCO0FBQ0EsY0FBVSxZQUFWO0FBQ0gsQ0FIRDs7QUFLQSxFQUFFLFlBQVc7QUFDVCxjQUFVLElBQVY7QUFDSCxDQUZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IHBvcnRmb2xpbyA9IHt9OyBcblxucG9ydGZvbGlvLnNtb290aFNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgIG5ldyBTbW9vdGhTY3JvbGwoJ2FbaHJlZio9XCIjXCJdJywge1xuICAgICAgICAvLyBTZWxlY3RvcnNcbiAgICAgICAgaWdub3JlOiBcIltkYXRhLXNjcm9sbC1pZ25vcmVdXCIsIC8vIFNlbGVjdG9yIGZvciBsaW5rcyB0byBpZ25vcmUgKG11c3QgYmUgYSB2YWxpZCBDU1Mgc2VsZWN0b3IpXG4gICAgICAgIGhlYWRlcjogbnVsbCwgLy8gU2VsZWN0b3IgZm9yIGZpeGVkIGhlYWRlcnMgKG11c3QgYmUgYSB2YWxpZCBDU1Mgc2VsZWN0b3IpXG4gICAgICAgIC8vIFNwZWVkICYgRWFzaW5nXG4gICAgICAgIHNwZWVkOiA1MDAsIC8vIEludGVnZXIuIEhvdyBmYXN0IHRvIGNvbXBsZXRlIHRoZSBzY3JvbGwgaW4gbWlsbGlzZWNvbmRzXG4gICAgICAgIG9mZnNldDogMTUwIC8vIEludGVnZXIgb3IgRnVuY3Rpb24gcmV0dXJuaW5nIGFuIGludGVnZXIuIEhvdyBmYXIgdG8gb2Zmc2V0IHRoZSBzY3JvbGxpbmcgYW5jaG9yIGxvY2F0aW9uIGluIHBpeGVsc1xuICAgIH0pO1xufVxuXG5wb3J0Zm9saW8uYmFubmVyU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIENhY2hlIHNlbGVjdG9yc1xuICAgIHZhciBsYXN0SWQsXG4gICAgICAgIHRvcE1lbnUgPSAkKFwiI3RvcC1tZW51XCIpLFxuICAgICAgICB0b3BNZW51SGVpZ2h0ID0gdG9wTWVudS5vdXRlckhlaWdodCgpICsgMTUsXG4gICAgICAgIC8vIEFsbCBsaXN0IGl0ZW1zXG4gICAgICAgIG1lbnVJdGVtcyA9IHRvcE1lbnUuZmluZChcImFcIiksXG4gICAgICAgIC8vIEFuY2hvcnMgY29ycmVzcG9uZGluZyB0byBtZW51IGl0ZW1zXG4gICAgICAgIHNjcm9sbEl0ZW1zID0gbWVudUl0ZW1zLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9ICQoJCh0aGlzKS5hdHRyKFwiaHJlZlwiKSk7XG4gICAgICAgICAgICBpZiAoaXRlbS5sZW5ndGgpIHsgcmV0dXJuIGl0ZW07IH1cbiAgICAgICAgfSk7XG4gICAgXG4gICAgLy8gQmluZCBjbGljayBoYW5kbGVyIHRvIG1lbnUgaXRlbXNcbiAgICAvLyBzbyB3ZSBjYW4gZ2V0IGEgZmFuY3kgc2Nyb2xsIGFuaW1hdGlvblxuICAgIG1lbnVJdGVtcy5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgaHJlZiA9ICQodGhpcykuYXR0cihcImhyZWZcIiksXG4gICAgICAgICAgICBvZmZzZXRUb3AgPSBocmVmID09PSBcIiNcIiA/IDAgOiAkKGhyZWYpLm9mZnNldCgpLnRvcCAtIHRvcE1lbnVIZWlnaHQgKyAxO1xuICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiBvZmZzZXRUb3BcbiAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICAgIFxuICAgIC8vIEJpbmQgdG8gc2Nyb2xsXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEdldCBjb250YWluZXIgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICAgIHZhciBmcm9tVG9wID0gJCh0aGlzKS5zY3JvbGxUb3AoKSArIHRvcE1lbnVIZWlnaHQ7XG4gICAgXG4gICAgICAgIC8vIEdldCBpZCBvZiBjdXJyZW50IHNjcm9sbCBpdGVtXG4gICAgICAgIHZhciBjdXIgPSBzY3JvbGxJdGVtcy5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCQodGhpcykub2Zmc2V0KCkudG9wIDwgZnJvbVRvcClcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEdldCB0aGUgaWQgb2YgdGhlIGN1cnJlbnQgZWxlbWVudFxuICAgICAgICBjdXIgPSBjdXJbY3VyLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaWQgPSBjdXIgJiYgY3VyLmxlbmd0aCA/IGN1clswXS5pZCA6IFwiXCI7XG4gICAgXG4gICAgICAgIGlmIChsYXN0SWQgIT09IGlkKSB7XG4gICAgICAgICAgICBsYXN0SWQgPSBpZDtcbiAgICAgICAgICAgIC8vIFNldC9yZW1vdmUgYWN0aXZlIGNsYXNzXG4gICAgICAgICAgICBtZW51SXRlbXNcbiAgICAgICAgICAgICAgICAucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAgICAuZW5kKCkuZmlsdGVyKFwiW2hyZWY9JyNcIiArIGlkICsgXCInXVwiKS5wYXJlbnQoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5wb3J0Zm9saW8uaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIHBvcnRmb2xpby5zbW9vdGhTY3JvbGwoKTtcbiAgICBwb3J0Zm9saW8uYmFubmVyU2Nyb2xsKCk7XG59O1xuXG4kKGZ1bmN0aW9uKCkge1xuICAgIHBvcnRmb2xpby5pbml0KCk7IFxufSk7Il19
