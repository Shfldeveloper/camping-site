const navBtn = document.querySelector(".nav__btn")
const navMenu = document.querySelector(".nav-menu")
const likeIco = document.querySelectorAll(".place__like-icon")
let navBtnOpen = false
navBtn.addEventListener("click",function (){
    if(navBtnOpen){
        navBtn.classList.remove("nav__btn--open")
        navMenu.classList.remove("nav-menu--open")
        navBtnOpen = false

    }else if(!navBtnOpen){
        navBtn.classList.add("nav__btn--open")
        navMenu.classList.add("nav-menu--open")
        navBtnOpen = true
    }
})

likeIco.forEach(function (like){
    like.addEventListener("click",function (){
        like.classList.toggle("place__like-icon--fill")
    })
})