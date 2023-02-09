// window.onload = () => document.querySelector('header').classList.remove('hidden');
const headBlock = document.querySelector('header');
const subBlock = document.querySelector('.main__main-page-block');
const advantgeBlock = document.querySelector('.main__advantage-block');
window.onload = function() {
    headBlock.classList.remove('hidden')
    subBlock.classList.remove('hiddentop')
    advantgeBlock.classList.remove('hiddenbottom')
    
    };

const text = document.querySelector(".text p");
text.innerHTML = text.innerText.split("").map((letter, i) =>
`<span style="transform:rotate(${i * 10.5}deg")>${letter}</span>`
)
.join("");