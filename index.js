var isDarkMode = false;

$('.darkmode-parent label').click(function () {
    isDarkMode = isDarkMode ? false : true;
    $(document.body).toggleClass('dark');
    if (isDarkMode) {
        $('.sun').css('display', 'none');
        $('.moon').css('display', 'block');

        $('.lightmode-animation').css('display', 'none');
        $('.darkmode-animation').css('display', 'block');
    } else {
        $('.sun').css('display', 'block');
        $('.moon').css('display', 'none');

        $('.lightmode-animation').css('display', 'block');
        $('.darkmode-animation').css('display', 'none');
    }
})

$('.banner .menu li').click(function (e) {
    if (e.target.localName == 'li') $(e.target.id)[0].scrollIntoView();
    else if (e.target.localName == 'img') $(`#${e.target.alt}`)[0].scrollIntoView();
    else $(`#${e.target.innerHTML.toLowerCase()}`)[0].scrollIntoView();
})

$('.contact .links img').click(function (e) {
    window.open(
        e.target.alt === 'gmail'
            ? 'mailto:er.gupta.arpit@gmail.com'
            : e.target.alt === 'linkedin'
                ? 'https://www.linkedin.com/in/er-arpit-gupta'
                : 'https://github.com/er-arpitgupta'
    )
})
