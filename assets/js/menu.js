$(".clickable").click(function () {
    $(".menu").slideToggle(400);
});
$(".first").click(function () {
    $(this).find("ul").slideToggle(400);
});