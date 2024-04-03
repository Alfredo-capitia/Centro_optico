
window.addEventListener('scroll',()=>{
    let header = document.querySelector('#header')
    header.classList.toggle('rolar', window.scrollY > 750)  
})

const contentSlide = document.querySelector(".content");
let count = 1
setInterval(()=>{
    contentSlide.innerHTML = `<img src="/Centrooptico – Centrooptico_files/b${count}.png" alt="">`
    count = count + 1
    if (count ==  7) {
        count = 1
    }
},4000)






