var isDarkMode = false;

function handleDarkMode() {
    isDarkMode = isDarkMode ? false : true;
    $(document.body).toggleClass('dark');
    if (isDarkMode) {
        $('.sun').css('display', 'none');
        $('.moon').css('display', 'block');
    } else {
        $('.sun').css('display', 'block');
        $('.moon').css('display', 'none');
    }
};

function handleNavIconClick(item) {
    $(`#${item}`)[0].scrollIntoView();
};

function handleContactIconClick(item) {
    window.open(
        item === 'gmail'
            ? 'mailto:er.gupta.arpit@gmail.com'
            : item === 'linkedin'
                ? 'https://www.linkedin.com/in/er-arpit-gupta'
                : 'https://github.com/er-arpitgupta'
    )
}