function isElementInViewport(el) {
    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

$(document).ready(() => {
    $(window).scroll(() => {
        if (isElementInViewport($(".box-level-3"))) {
            $(".slide-animation").addClass("slide-animation-end");
        }

        if (isElementInViewport($(".title"))) {
            $(".zoom-animation").addClass("zoom-animation-end");
        }
    });
});