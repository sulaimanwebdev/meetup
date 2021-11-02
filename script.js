let burger = document.querySelector('.fa-bars');
let close = document.querySelector('.fa-times');
let nav = document.querySelector('.mobNav');

burger.addEventListener('click', ()=>{
    nav.classList.add('mobNavActive');
})

close.addEventListener('click', ()=>{
    nav.classList.remove('mobNavActive');
})