function isElementInViewport (el) {

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

$(document).ready(() =>  {
    const boxLevel3 = $(".box-level-3");

    $(window).scroll(() => {
        if (isElementInViewport(boxLevel3)) {
            $(".left-unordered-list").addClass("animation-end");
            $(".right-unordered-list").addClass("animation-end");
        }
    });
});