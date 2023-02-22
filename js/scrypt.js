// window.onload = () => document.querySelector('header').classList.remove('hidden');
// --------------------------плавность появления 
const headBlock = document.querySelector('header');
const subBlock = document.querySelector('.main__main-page-block');
const advantgeBlock = document.querySelector('.main__advantage-block');
window.onload = function() {
    headBlock.classList.remove('hidden')
    subBlock.classList.remove('hiddentop')
    advantgeBlock.classList.remove('hiddenbottom')
    
    };

// ---------------------------анимация крежения букв
const text = document.querySelector(".text p");
text.innerHTML = text.innerText.split("").map((letter, i) =>
`<span style="transform:rotate(${i * 10.5}deg")>${letter}</span>`
)
.join("");

//  -------------------------------переключение в слайдере
const itemSlider = document.querySelector('.main__advantage-item');
const itemCircle = document.querySelectorAll('.main__advantage-circle');
// 395-790-1185-1580-1975
const nextSlide = () => {
    const position = 372;
    if (position < (itemSlider.length - 1) * 372) {
        position += 372
    } else {
        position = 0
    }
    itemSlider.style.left = -position + 'px'
}
itemCircle.forEach((item, index) => {
    item.addEventListener('click', function(){
        const position1 = 372 * index;
        itemSlider.style.left = -position1 + 'px'
        dotIndex = index
        thisSlide(dotIndex)
    })
})
const thisSlide = (index) => {
    for (let dot of itemCircle) {
        dot.classList.remove('color-circle')

    }
    itemCircle[index].classList.add('color-circle')
}
// --------------------------burger menu
const burgerMenu = document.querySelector('.header__burger-burger');
const burgerButton = document.querySelector('.header__burger-img');
const burgerHrest = document.querySelector('.header__burger-close');
burgerButton.addEventListener('click', function() {
    burgerMenu.classList.remove('hidden')
})
burgerHrest.addEventListener('click', function() {
    burgerMenu.classList.add('hidden')
})
