// window.onload = () => document.querySelector('header').classList.remove('hidden');
const headBlock = document.querySelector('header');
const subBlock = document.querySelector('.main__main-page-block')
window.onload = function() {
    headBlock.classList.remove('hidden')
    subBlock.classList.remove('hiddentop')
    
    };

const text = document.querySelector(".text p");
text.innerHTML = text.innerText.split("").map((letter, i) =>
`<span style="transform:rotate(${i * 10.5}deg")>${letter}</span>`
)
.join("");