const sliders = document.querySelectorAll('.panel')

sliders.forEach(slide => {
    slide.addEventListener('click', ()=>{
        removeActive ()
        slide.classList.add('active')
    })
})

function removeActive () {
    sliders.forEach(slide => {
        slide.classList.remove('active')
    })
}