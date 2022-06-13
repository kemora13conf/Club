const container = document.getElementById('container')
const header = document.getElementsByClassName('header')
const nav = document.getElementById('nav')
const navbtn = document.getElementById('navbtn')
// for(var i=0; i<4; i++){
//     setTimeout(()=>{
//     container.style.backgroundImage = `url('../images/slide/image-${i}.jpg')`
//     }, 1000)
// }
window.addEventListener('scroll', ()=>{
    const scrolled = window.scrollY
    console.log(scrolled)
    if(scrolled > 586){ // 586 full view height || 458 80% of the view
        header[0].style.background="orange"
    }else{
        header[0].style.background="transparent"
    }
})

navbtn.addEventListener('click', ()=>{
    nav.classList.toggle('nav')
    navbtn.classList.toggle('btn')
})