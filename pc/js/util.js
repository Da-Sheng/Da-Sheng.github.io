function getScrollTop() {
    var scrollPos;
    if (window.pageYOffset) {
        scrollPos = window.pageYOffset
    } else if (document.compatMode && document.compatMode !== 'BackCompat') {
        scrollPos = window.document.documentElement.scrollTop;
    } else if (document.body) {
        scrollPos = document.body.scrollTop;
    }
    return scrollPos;
}

function scrollAddAnimate() {
    var scrollPos = getScrollTop();
    console.log('scrollPos', scrollPos)
    if (scrollPos > 789) {
        var rocketImg = document.querySelector('#rocket-img');
        if (rocketImg) {
            rocketImg.className = 'rocket-slide-top'
        }
        document.removeEventListener('scroll', scrollAddAnimate)
    }
}

document.addEventListener('scroll', scrollAddAnimate);