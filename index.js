$('.darkmode label').click(function () {
    $(document.body).toggleClass('dark');
})

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const strTime = `${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;

    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const strDate = now.toLocaleDateString('en-GB', options);

    document.getElementById('time').textContent = strTime;
    document.getElementById('date').textContent = strDate;
}

setInterval(updateClock, 1000);
updateClock();

$(".navbar ul li").click(function (e) {
    $('.navbar ul li span').css('display', 'none');
    $(`.navbar ul li.${e.target.classList.value.split(' ')[0]} span`).css('display', 'block');
    $("html, body").animate(
        {
            scrollTop: $(`.container #${e.target.classList.value.split(' ')[0]}`).offset().top - 150,
        },
        "slow"
    );
});

$(".links img").click(function (e) {
    window.open(
        e.target.alt === "gmail"
            ? "mailto:er.gupta.arpit@gmail.com"
            : e.target.alt === "linkedin"
                ? "https://www.linkedin.com/in/er-arpit-gupta"
                : e.target.alt === 'github' ? "https://github.com/er-arpitgupta"
                    : "https://codepen.io/er-arpitgupta"
    );
});

function calculateMonths(startDate, endDate) {
    const map = {
        Jan: 1,
        Feb: 2,
        Mar: 3,
        Apr: 4,
        May: 5,
        Jun: 6,
        Jul: 7,
        Aug: 8,
        Sep: 9,
        Oct: 10,
        Nov: 11,
        Dec: 12,
    };
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const startDateParts = startDate.split("/");
    const endDateParts =
        endDate === "Present"
            ? [months[new Date().getMonth()], new Date().getFullYear()]
            : endDate.split("/");
    const monCount =
        (parseInt(endDateParts[1], 10) - parseInt(startDateParts[1], 10)) * 12 +
        (map[endDateParts[0]] - map[startDateParts[0]]) +
        1;

    if (monCount > 12) {
        return Math.floor(monCount / 12) + " yrs " + (monCount % 12) + " mon";
    }
    return monCount + " mon";
}

$(".calc1").text(calculateMonths($(".start1").text(), $(".end1").text()));
$(".calc2").text(calculateMonths($(".start2").text(), $(".end2").text()));
$(".calc3").text(calculateMonths($(".start3").text(), $(".end3").text()));


$(window).scroll(function () {
    var allNavLi = [];
    $(".navbar li").each(function () {
        allNavLi.push($(this).attr("class").split(' ')[0]);
    });

    for (let i = 0; i < allNavLi.length; i++) {
        if ($(window).scrollTop() >= $(`#${allNavLi[i]}`).offset().top - 500) {
            $('.navbar ul li span').css('display', 'none');
            $(`.navbar ul li.${allNavLi[i]} span`).css('display', 'block');
        }
    }
});

$('.about-section .links img').click(function (e) {
    window.open(
        e.target.alt === 'gmail'
            ? 'mailto:er.gupta.arpit@gmail.com'
            : e.target.alt === 'linkedin'
                ? 'https://www.linkedin.com/in/er-arpit-gupta'
                : 'https://github.com/er-arpitgupta'
    )
})


$('footer .curr_yr').text(' ' + new Date().getFullYear());