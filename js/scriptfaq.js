// Accordian
var action="click";
var speed="500";

$(document).ready(function() {
    // Question handler
    $('li.q').on(action, function() {
        // Get next element
        $(this).next()
            .slideToggle(speed)
        // Select all other answers
                .siblings('li.a')
                    .slideUp();
    });
});