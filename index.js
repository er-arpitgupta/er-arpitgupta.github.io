function updateClock() {
  const t = new Date();
  let e = t.getHours();
  const a = String(t.getMinutes()).padStart(2, "0"),
    n = e >= 12 ? "PM" : "AM";
  (e %= 12), (e = e || 12);
  const l = `${String(e).padStart(2, "0")}:${a} ${n}`,
    o = t.toLocaleDateString("en-GB", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  (document.getElementById("time").textContent = l),
    (document.getElementById("date").textContent = o);
}
function calculateMonths(t, e) {
  const a = {
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
    },
    n = t.split("/"),
    l =
      "Present" === e
        ? [
            [
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
            ][new Date().getMonth()],
            new Date().getFullYear(),
          ]
        : e.split("/"),
    o =
      12 * (parseInt(l[1], 10) - parseInt(n[1], 10)) + (a[l[0]] - a[n[0]]) + 1;
  return o > 12 ? Math.floor(o / 12) + " yrs " + (o % 12) + " mon" : o + " mon";
}
$(".darkmode label").click(function () {
  $(document.body).toggleClass("dark");
}),
  setInterval(updateClock, 1e3),
  updateClock(),
  $(".navbar ul li").click(function (t) {
    $(".navbar ul li span").css("display", "none"),
      $(`.navbar ul li.${t.target.classList.value.split(" ")[0]} span`).css(
        "display",
        "block"
      ),
      $("html, body").animate(
        {
          scrollTop:
            $(`.container #${t.target.classList.value.split(" ")[0]}`).offset()
              .top - 150,
        },
        "slow"
      );
  }),
  $(".links img").click(function (t) {
    window.open(
      "gmail" === t.target.alt
        ? "mailto:er.gupta.arpit@gmail.com"
        : "linkedin" === t.target.alt
        ? "https://www.linkedin.com/in/er-arpit-gupta"
        : "github" === t.target.alt
        ? "https://github.com/er-arpitgupta"
        : "https://codepen.io/er-arpitgupta"
    );
  }),
  $(".calc1").text(calculateMonths($(".start1").text(), $(".end1").text())),
  $(".calc2").text(calculateMonths($(".start2").text(), $(".end2").text())),
  $(".calc3").text(calculateMonths($(".start3").text(), $(".end3").text())),
  $(window).scroll(function () {
    var t = [];
    $(".navbar li").each(function () {
      t.push($(this).attr("class").split(" ")[0]);
    });
    for (let e = 0; e < t.length; e++)
      $(window).scrollTop() >= $(`#${t[e]}`).offset().top - 500 &&
        ($(".navbar ul li span").css("display", "none"),
        $(`.navbar ul li.${t[e]} span`).css("display", "block"));
  }),
  $(".about-section .links img").click(function (t) {
    window.open(
      "gmail" === t.target.alt
        ? "mailto:er.gupta.arpit@gmail.com"
        : "linkedin" === t.target.alt
        ? "https://www.linkedin.com/in/er-arpit-gupta"
        : "https://github.com/er-arpitgupta"
    );
  }),
  $("footer .curr_yr").text(" " + new Date().getFullYear());
