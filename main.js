window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY > 0);
})

//navtogle
const menutoogle = document.querySelector('.menutoogle input');
const nav = document.querySelector('.nav .navigation');

menutoogle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});