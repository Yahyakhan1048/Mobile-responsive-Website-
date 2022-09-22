$( '#view-work').on('click', function() {
    const images = $ ('#images').position.top;

    $('html, body'). animate(
        {
        scrolltop: images
        },
            900
    );
})