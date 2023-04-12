let openB = document.querySelector('.ri-menu-line');
let closeB = document.querySelector('.ri-close-line');
let menu = document.querySelector('.navbar__menu');
const btn = document.getElementById('btn');


openB.addEventListener('click', () => {
    openB.classList.toggle('hide');
    closeB.classList.toggle('hide');
    menu.classList.toggle('hidden');
})

closeB.addEventListener('click', () => {
    openB.classList.toggle('hide');
    closeB.classList.toggle('hide');
    menu.classList.toggle('hidden');
})


const navEl = document.querySelector('.navbar');
const home = document.querySelector('.main');
console.log(home.offsetTop)
console.log(navEl.offsetHeight)
window.addEventListener('scroll', () => {
    if (window.scrollY > home.offsetTop - navEl.offsetHeight - 50) {
        console.log('scroll');
        navEl.classList.add('active')

    } else {
        navEl.classList.remove('active')
    }
    
})

btn.addEventListener('mouseover', (e) => {
    const x = (e.pageX - btn.offsetLeft);
    const y = (e.pageY - btn.offsetTop);

    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
})

function up() {
    const scroll = document.getElementById('scroll');
    if(this.scrollY >= 200){
        scroll.classList.add('show');
    } else {
        scroll.classList.remove('show')
    }
}
window.addEventListener('scroll', up);

