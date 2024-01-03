
function adjustWrapperHeight() {
    var wrapper = document.querySelector('.wrapper');
    var footer = document.querySelector('.footer');

    var wrapperHeight = window.innerHeight - footer.offsetHeight;
    wrapper.style.minHeight = wrapperHeight + 'px';
}

document.addEventListener('DOMContentLoaded', adjustWrapperHeight);
window.addEventListener('resize', adjustWrapperHeight);
