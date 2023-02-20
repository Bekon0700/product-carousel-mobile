$('.img-div').on('click', function() {
    $('#zoom').addClass('active')
    $('.carousel_container').addClass('d-none')
})

$('#zoom-close').on('click', function() {
    $('#zoom').removeClass('active')
    $('.carousel_container').removeClass('d-none')
})