let burger = document.querySelector('.fa-bars');
let close = document.querySelector('.fa-times');
let nav = document.querySelector('.mobNav');

burger.addEventListener('click', ()=>{
    nav.classList.add('mobNavActive');
})

close.addEventListener('click', ()=>{
    nav.classList.remove('mobNavActive');
})

let mainModule = document.querySelector('.mainModule');
let closeModal = document.querySelector('.closeModal');
let singleGalleryImage = document.querySelector('.singleGalleryImage');

singleGalleryImage.addEventListener('click', ()=>{
    mainModule.classList.add('modalActive');
})

closeModal.addEventListener('click', ()=>{
    mainModule.classList.remove('modalActive');

})


window.onscroll = function() {scrollFunction()};
let topFixedShadow = document.querySelector('.topFixedShadow');
function scrollFunction() {
  if (document.body.scrollTop > 621 || document.documentElement.scrollTop > 621) {
    topFixedShadow.classList.add('topActive')
  } else {
    topFixedShadow.classList.remove('topActive')
   
  }
}
