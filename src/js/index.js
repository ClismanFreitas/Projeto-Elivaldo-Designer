

const myObserver = new IntersectionObserver( (abacate) => {
   abacate.forEach( (entry) => {
    if(entry.isIntersecting){
        entry.target.classList.add('show')
    } else{
        entry.target.classList.remove('show')
    }
   })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach( (element) => myObserver.observe(element))
