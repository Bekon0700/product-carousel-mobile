const img = document.getElementById('yt-thumbnail')
const crossBtn = document.getElementById('cross-btn')
const video = document.getElementById('video')

$('#yt-thumbnail').on('click', () => {
    $('#video').addClass('active')
    $('.carousel_container').addClass('d-none')
})

$('#cross-btn').on('click', () => {
    $('#video').removeClass('active')
    $('.carousel_container').removeClass('d-none')
})