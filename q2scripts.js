$(document).ready(function() {
    $("nav ul li a[href='q1.html']").click(function() {
    });

    $("nav ul li a[href^='#']").click(function(e) {
        e.preventDefault();
        var sectionId = $(this).attr("href");
        $("section").hide();
        $(sectionId).show();
    });

    $("#backButton").click(function() {
        $("#blog").show();
        $("#contact").hide();
    });
});