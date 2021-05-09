$('input[id="logo-size"]').on("change", function() {
    var total = 0;
    $('input[id="logo-size"]').each(function() {
        number = parseInt(this.value);
        total += number;
    });
    $("#out-logo-size").html(total);
});

$('input[id="star-size"]').on("change", function() {
    var total = 0;
    $('input[id="star-size"]').each(function() {
        number = parseInt(this.value);
        total += number;
    });
    $("#out-star-size").html(total);
});

$('input[id="environment-level"]').on("change", function() {
    var total = 0;
    $('input[id="environment-level"]').each(function() {
        number = parseInt(this.value);
        total += number;
    });
    $("#out-environment-level").html(total);
});