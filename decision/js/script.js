
$('.choice').click(function () {
    $this = $(this);
    altID = "#" + $($this[0]).attr("data-alt");
    currentID = "#" + $($this[0]).attr("data-current");

    $(altID).slideUp("fast", function () {
        $(altID + ' [data-type="result"]').hide();
    });

    $(currentID).slideDown("fast", function () {
        // $(currentID + '[data-type="result"]').hide();
    });

});
