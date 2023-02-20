const img = document.getElementById('yt-thumbnail')
const crossBtn = document.getElementById('cross-btn')
const video = document.getElementById('video')

img.addEventListener('click', () => {
    video.classList.add('active')
    $('.carousel_container').addClass('d-none')
})

crossBtn.addEventListener('click', () => {
    video.classList.remove('active')
    $('.carousel_container').removeClass('d-none')
})