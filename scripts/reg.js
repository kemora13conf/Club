const nav = document.getElementById('nav')
const navbtn = document.getElementById('navbtn')

navbtn.addEventListener('click', ()=>{
    nav.classList.toggle('nav')
    navbtn.classList.toggle('btn')
})