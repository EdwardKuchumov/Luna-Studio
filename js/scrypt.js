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
const burgerMenu = document.querySelector('.burg__burger-burger');
const burgerButton = document.querySelector('.header__burger-img');
const burgerHrest = document.querySelector('.burg__burger-close');
const navHeader = document.querySelector('.header__nav-block');
burgerButton.addEventListener('click', function() {
    burgerMenu.classList.remove('hidden')
    navHeader.classList.add('hidden')
})
burgerHrest.addEventListener('click', function() {
    burgerMenu.classList.add('hidden')
    navHeader.classList.remove('hidden')
})
//---------------------- ------------------калькулятор

const buttonLanguege = document.querySelectorAll('.main__calc-button-link-lang');
const buttonTime = document.querySelectorAll('.main__calc-button-link-time');
const buttonWeek = document.querySelectorAll('.main__calc-button-link-week');
const rubValue = document.getElementById('#num')
const rubValue2 = document.getElementById('#num2')
const rubValue3 = document.getElementById('#num3')
num1 = 28800
num2 = 121000
num3 = 1497600

function oneBlockButton() {
  for (const elem of buttonLanguege) {
    elem.addEventListener('click', function(){
      buttonLanguege.forEach(function(el){
        el.classList.remove('button-active')
      })
      elem.classList.add('button-active')
      if (elem.classList.contains('button-active')){
        if (elem.dataset.but == 'buttonLanguege1'){
          num1 = 28800
          rubValue.innerHTML = num1
          xNumMounth()
          rubValue2.innerHTML = num2
          xNumYear()
          rubValue3.innerHTML = num3
        }
        if (elem.dataset.but == 'buttonLanguege2') {
          console.log(num1)
          testFn()
          rubValue.innerHTML = num1
          xNumMounth()
          rubValue2.innerHTML = num2
          xNumYear()
          rubValue3.innerHTML = num3
        }
        if (elem.dataset.but == 'buttonLanguege3') {
          console.log(num1)
          testFn1()
          rubValue.innerHTML = num1
          xNumMounth()
          rubValue2.innerHTML = num2
          xNumYear()
          rubValue3.innerHTML = num3
        }
      }
    })
  }
 }
 oneBlockButton()

function twoBlockButton() {
  for (const elem of buttonTime) {
    elem.addEventListener('click', function(){
      buttonTime.forEach(function(el){
        el.classList.remove('button-active')
      })
      elem.classList.add('button-active')
      if (elem.classList.contains('button-active')){
        if (elem.dataset.butt == 'buttonTime1'){
          testFntimeB()
          rubValue.innerHTML = num1
          xNumMounth()
          rubValue2.innerHTML = num2
          xNumYear()
          rubValue3.innerHTML = num3
        }
        if (elem.dataset.butt == 'buttonTime2' && rubValue.innerHTML == 28800){
          testFntimeCenter()
          rubValue.innerHTML = num1
          xNumMounth()
          rubValue2.innerHTML = num2
          xNumYear()
          rubValue3.innerHTML = num3
        } else if (elem.dataset.butt == 'buttonTime2'){
          testFntimeCenter1()
          rubValue.innerHTML = num1
          xNumMounth()
          rubValue2.innerHTML = num2
          xNumYear()
          rubValue3.innerHTML = num3
        }
        if (elem.dataset.butt == 'buttonTime3'){
          testFntimeCenter1()
          rubValue.innerHTML = num1
          xNumMounth()
          rubValue2.innerHTML = num2
          xNumYear()
          rubValue3.innerHTML = num3
        }
      }
    })
  }
 }
 twoBlockButton()
//  console.log(rubValue)

function treeBlockButton() {
  for (const elem of buttonWeek) {
    elem.addEventListener('click', function(){
      buttonWeek.forEach(function(el){
        el.classList.remove('button-active')
      })
      elem.classList.add('button-active')
      if (elem.classList.contains('button-active')){
        if (elem.dataset.butw == 'buttonWeek1'){
          testFntimeWeek1()
          rubValue.innerHTML = num1
          xNumMounth()
          rubValue2.innerHTML = num2
          xNumYear()
          rubValue3.innerHTML = num3
        }
        if (elem.dataset.butw == 'buttonWeek2') {
          testFntimeWeek2()
          rubValue.innerHTML = num1
          xNumMounth()
          rubValue2.innerHTML = num2
          xNumYear()
          rubValue3.innerHTML = num3
        }
        if (elem.dataset.butw == 'buttonWeek3' && rubValue.innerHTML == 28800) {
          testFntimeCenter()
          rubValue.innerHTML = num1
          xNumMounth()
          rubValue2.innerHTML = num2
          xNumYear()
          rubValue3.innerHTML = num3
          
        } else if (elem.dataset.butw == 'buttonWeek3'){
          testFntimeWeek3()
          rubValue.innerHTML = num1
          xNumMounth()
          rubValue2.innerHTML = num2
          xNumYear()
          rubValue3.innerHTML = num3
        }
      }
    })
  }
 }
 treeBlockButton()

  // for (const elem of buttonLanguege) {
  //   elem.addEventListener('click', function() {
  //     buttonLanguege.forEach(function(el) {
  //       el.classList.remove('button-active')
  //     })
  //     elem.classList.add('button-active')
  //     if (elem.classList.contains('button-active')){
  //       if (elem.dataset.but == 'buttonLanguege1'){
  //         rubValue.innerHTML = num1
  //         rubValue2.innerHTML = num1 * 4
  //         rubValue3.innerHTML = num1 * 60
  //         for (const elem of buttonTime) {
  //           elem.addEventListener('click', function() {
  //               buttonTime.forEach(function(el) {
  //               el.classList.remove('button-active')
  //             })
  //             elem.classList.add('button-active')
  //             if (elem.classList.contains('button-active')){
  //               if (elem.dataset.butt == 'buttonTime1'){
  //                 rubValue.innerHTML = num1 + 1
  //                 rubValue2.innerHTML = num1 * 4 + 1
  //                 rubValue3.innerHTML = num1 * 60 + 10
  //                 for (const elem of buttonWeek) {
  //                   elem.addEventListener('click', function() {
  //                       buttonWeek.forEach(function(el) {
  //                       el.classList.remove('button-active')
  //                     })
  //                     elem.classList.add('button-active')
  //                       if (elem.classList.contains('button-active')){
  //                       if (elem.dataset.butw == 'buttonWeek1'){
  //                         rubValue.innerHTML = num1 + 10
  //                         rubValue2.innerHTML = num1 * 4 + 10
  //                         rubValue3.innerHTML = num1 * 60 + 100
  //                       } if (elem.dataset.butw == 'buttonWeek2') {
  //                         rubValue.innerHTML = num1 + 20
  //                         rubValue2.innerHTML = num1 * 4 + 20
  //                         rubValue3.innerHTML = num1 * 60 + 200
  //                       } if (elem.dataset.butw == 'buttonWeek3') {
  //                         rubValue.innerHTML = num1 + 30
  //                         rubValue2.innerHTML = num1 * 4 + 30
  //                         rubValue3.innerHTML = num1 * 60 + 300
  //                       }
  //                     }
  //                   })
  //                 }
  //               } if (elem.dataset.butt == 'buttonTime2') {
  //                 rubValue.innerHTML = num1 + 2
  //                 rubValue2.innerHTML = num1 * 4 + 2
  //                 rubValue3.innerHTML = num1 * 60 + 20
  //                 for (const elem of buttonWeek) {
  //                   elem.addEventListener('click', function() {
  //                       buttonWeek.forEach(function(el) {
  //                       el.classList.remove('button-active')
  //                     })
  //                     elem.classList.add('button-active')
  //                       if (elem.classList.contains('button-active')){
  //                       if (elem.dataset.butw == 'buttonWeek1'){
  //                         rubValue.innerHTML = num1 + 10
  //                         rubValue2.innerHTML = num1 * 4 + 10
  //                         rubValue3.innerHTML = num1 * 60 + 100
  //                       } if (elem.dataset.butw == 'buttonWeek2') {
  //                         rubValue.innerHTML = num1 + 20
  //                         rubValue2.innerHTML = num1 * 4 + 20
  //                         rubValue3.innerHTML = num1 * 60 + 200
  //                       } if (elem.dataset.butw == 'buttonWeek3') {
  //                         rubValue.innerHTML = num1 + 30
  //                         rubValue2.innerHTML = num1 * 4 + 30
  //                         rubValue3.innerHTML = num1 * 60 + 300
  //                       }
  //                     }
  //                   })
  //                 }
  //               } if (elem.dataset.butt == 'buttonTime3') {
  //                 rubValue.innerHTML = num1 + 3
  //                 rubValue2.innerHTML = num1 * 4 + 3
  //                 rubValue3.innerHTML = num1 * 60 + 30
  //                 for (const elem of buttonWeek) {
  //                   elem.addEventListener('click', function() {
  //                       buttonWeek.forEach(function(el) {
  //                       el.classList.remove('button-active')
  //                     })
  //                     elem.classList.add('button-active')
  //                       if (elem.classList.contains('button-active')){
  //                       if (elem.dataset.butw == 'buttonWeek1'){
  //                         rubValue.innerHTML = num1 + 10
  //                         rubValue2.innerHTML = num1 * 4 + 10
  //                         rubValue3.innerHTML = num1 * 60 + 100
  //                       } if (elem.dataset.butw == 'buttonWeek2') {
  //                         rubValue.innerHTML = num1 + 20
  //                         rubValue2.innerHTML = num1 * 4 + 20
  //                         rubValue3.innerHTML = num1 * 60 + 200
  //                       } if (elem.dataset.butw == 'buttonWeek3') {
  //                         rubValue.innerHTML = num1 + 30
  //                         rubValue2.innerHTML = num1 * 4 + 30
  //                         rubValue3.innerHTML = num1 * 60 + 300
  //                       }
  //                     }
  //                   })
  //                 }
  //               }
  //             }
  //           })
  //         }
  //       } if (elem.dataset.but == 'buttonLanguege2') {
  //         rubValue.innerHTML = num2
  //         rubValue2.innerHTML = num2 * 4
  //         rubValue3.innerHTML = num2 * 60
  //         for (const elem of buttonTime) {
  //           elem.addEventListener('click', function() {
  //               buttonTime.forEach(function(el) {
  //               el.classList.remove('button-active')
  //             })
  //             elem.classList.add('button-active')
  //             if (elem.classList.contains('button-active')){
  //               if (elem.dataset.butt == 'buttonTime1'){
  //                 rubValue.innerHTML = num2 + 1
  //                 rubValue2.innerHTML = num2 * 4 + 1
  //                 rubValue3.innerHTML = num2 * 60 + 10
  //                 for (const elem of buttonWeek) {
  //                   elem.addEventListener('click', function() {
  //                       buttonWeek.forEach(function(el) {
  //                       el.classList.remove('button-active')
  //                     })
  //                     elem.classList.add('button-active')
  //                       if (elem.classList.contains('button-active')){
  //                       if (elem.dataset.butw == 'buttonWeek1'){
  //                         rubValue.innerHTML = num2 + 10
  //                         rubValue2.innerHTML = num2 * 4 + 10
  //                         rubValue3.innerHTML = num2 * 60 + 100
  //                       } if (elem.dataset.butw == 'buttonWeek2') {
  //                         rubValue.innerHTML = num2 + 20
  //                         rubValue2.innerHTML = num2 * 4 + 20
  //                         rubValue3.innerHTML = num2 * 60 + 200
  //                       } if (elem.dataset.butw == 'buttonWeek3') {
  //                         rubValue.innerHTML = num2 + 30
  //                         rubValue2.innerHTML = num2 * 4 + 30
  //                         rubValue3.innerHTML = num2 * 60 + 300
  //                       }
  //                     }
  //                   })
  //                 }
  //               } if (elem.dataset.butt == 'buttonTime2') {
  //                 rubValue.innerHTML = num2 + 2
  //                 rubValue2.innerHTML = num2 * 4 + 2
  //                 rubValue3.innerHTML = num2 * 60 + 20
  //                 for (const elem of buttonWeek) {
  //                   elem.addEventListener('click', function() {
  //                       buttonWeek.forEach(function(el) {
  //                       el.classList.remove('button-active')
  //                     })
  //                     elem.classList.add('button-active')
  //                       if (elem.classList.contains('button-active')){
  //                       if (elem.dataset.butw == 'buttonWeek1'){
  //                         rubValue.innerHTML = num2 + 10
  //                         rubValue2.innerHTML = num2 * 4 + 10
  //                         rubValue3.innerHTML = num2 * 60 + 100
  //                       } if (elem.dataset.butw == 'buttonWeek2') {
  //                         rubValue.innerHTML = num2 + 20
  //                         rubValue2.innerHTML = num2 * 4 + 20
  //                         rubValue3.innerHTML = num2 * 60 + 200
  //                       } if (elem.dataset.butw == 'buttonWeek3') {
  //                         rubValue.innerHTML = num2 + 30
  //                         rubValue2.innerHTML = num2 * 4 + 30
  //                         rubValue3.innerHTML = num2 * 60 + 300
  //                       }
  //                     }
  //                   })
  //                 }
  //               } if (elem.dataset.butt == 'buttonTime3') {
  //                 rubValue.innerHTML = num2 + 3
  //                 rubValue2.innerHTML = num2 * 4 + 3
  //                 rubValue3.innerHTML = num2 * 60 + 30
  //                 for (const elem of buttonWeek) {
  //                   elem.addEventListener('click', function() {
  //                       buttonWeek.forEach(function(el) {
  //                       el.classList.remove('button-active')
  //                     })
  //                     elem.classList.add('button-active')
  //                       if (elem.classList.contains('button-active')){
  //                       if (elem.dataset.butw == 'buttonWeek1'){
  //                         rubValue.innerHTML = num2 + 10
  //                         rubValue2.innerHTML = num2 * 4 + 10
  //                         rubValue3.innerHTML = num2 * 60 + 100
  //                       } if (elem.dataset.butw == 'buttonWeek2') {
  //                         rubValue.innerHTML = num2 + 20
  //                         rubValue2.innerHTML = num2 * 4 + 20
  //                         rubValue3.innerHTML = num2 * 60 + 200
  //                       } if (elem.dataset.butw == 'buttonWeek3') {
  //                         rubValue.innerHTML = num2 + 30
  //                         rubValue2.innerHTML = num2 * 4 + 30
  //                         rubValue3.innerHTML = num2 * 60 + 300
  //                       }
  //                     }
  //                   })
  //                 }
  //               }
  //             }
  //           })
  //         }
  //       } if (elem.dataset.but == 'buttonLanguege3') {
  //         rubValue.innerHTML = num3
  //         rubValue2.innerHTML = num3 * 4
  //         rubValue3.innerHTML = num3 * 60
  //         for (const elem of buttonTime) {
  //           elem.addEventListener('click', function() {
  //               buttonTime.forEach(function(el) {
  //               el.classList.remove('button-active')
  //             })
  //             elem.classList.add('button-active')
  //             if (elem.classList.contains('button-active')){
  //               if (elem.dataset.butt == 'buttonTime1'){
  //                 rubValue.innerHTML = num3 + 1
  //                 rubValue2.innerHTML = num3 * 4 + 1
  //                 rubValue3.innerHTML = num3 * 60 + 10
  //                 for (const elem of buttonWeek) {
  //                   elem.addEventListener('click', function() {
  //                       buttonWeek.forEach(function(el) {
  //                       el.classList.remove('button-active')
  //                     })
  //                     elem.classList.add('button-active')
  //                       if (elem.classList.contains('button-active')){
  //                       if (elem.dataset.butw == 'buttonWeek1'){
  //                         rubValue.innerHTML = num3 + 10
  //                         rubValue2.innerHTML = num3 * 4 + 10
  //                         rubValue3.innerHTML = num3 * 60 + 100
  //                       } if (elem.dataset.butw == 'buttonWeek2') {
  //                         rubValue.innerHTML = num3 + 20
  //                         rubValue2.innerHTML = num3 * 4 + 20
  //                         rubValue3.innerHTML = num3 * 60 + 200
  //                       } if (elem.dataset.butw == 'buttonWeek3') {
  //                         rubValue.innerHTML = num3 + 30
  //                         rubValue2.innerHTML = num3 * 4 + 30
  //                         rubValue3.innerHTML = num3 * 60 + 300
  //                       }
  //                     }
  //                   })
  //                 }
  //               } if (elem.dataset.butt == 'buttonTime2') {
  //                 rubValue.innerHTML = num3 + 2
  //                 rubValue2.innerHTML = num3 * 4 + 2
  //                 rubValue3.innerHTML = num3 * 60 + 20
  //                 for (const elem of buttonWeek) {
  //                   elem.addEventListener('click', function() {
  //                       buttonWeek.forEach(function(el) {
  //                       el.classList.remove('button-active')
  //                     })
  //                     elem.classList.add('button-active')
  //                       if (elem.classList.contains('button-active')){
  //                       if (elem.dataset.butw == 'buttonWeek1'){
  //                         rubValue.innerHTML = num3 + 10
  //                         rubValue2.innerHTML = num3 * 4 + 10
  //                         rubValue3.innerHTML = num3 * 60 + 100
  //                       } if (elem.dataset.butw == 'buttonWeek2') {
  //                         rubValue.innerHTML = num3 + 20
  //                         rubValue2.innerHTML = num3 * 4 + 20
  //                         rubValue3.innerHTML = num3 * 60 + 200
  //                       } if (elem.dataset.butw == 'buttonWeek3') {
  //                         rubValue.innerHTML = num3 + 30
  //                         rubValue2.innerHTML = num3 * 4 + 30
  //                         rubValue3.innerHTML = num3 * 60 + 300
  //                       }
  //                     }
  //                   })
  //                 }
  //               } if (elem.dataset.butt == 'buttonTime3') {
  //                 rubValue.innerHTML = num3 + 3
  //                 rubValue2.innerHTML = num3 * 4 + 3
  //                 rubValue3.innerHTML = num3 * 60 + 30
  //                 for (const elem of buttonWeek) {
  //                   elem.addEventListener('click', function() {
  //                       buttonWeek.forEach(function(el) {
  //                       el.classList.remove('button-active')
  //                     })
  //                     elem.classList.add('button-active')
  //                       if (elem.classList.contains('button-active')){
  //                       if (elem.dataset.butw == 'buttonWeek1'){
  //                         rubValue.innerHTML = num3 + 10
  //                         rubValue2.innerHTML = num3 * 4 + 10
  //                         rubValue3.innerHTML = num3 * 60 + 100
  //                       } if (elem.dataset.butw == 'buttonWeek2') {
  //                         rubValue.innerHTML = num3 + 20
  //                         rubValue2.innerHTML = num3 * 4 + 20
  //                         rubValue3.innerHTML = num3 * 60 + 200
  //                       } if (elem.dataset.butw == 'buttonWeek3') {
  //                         rubValue.innerHTML = num3 + 30
  //                         rubValue2.innerHTML = num3 * 4 + 30
  //                         rubValue3.innerHTML = num3 * 60 + 300
  //                       }
  //                     }
  //                   })
  //                 }
  //               }
  //             }
  //           })
  //         }
  //       }
  //     }
  //   })
  // }
function testFn(){
  num1 += 1000
  if (num1 > 29800){
    num1 = 29800
  }
  return num1
}
function testFn1(){
  num1 += 2000
  if (num1 > 30800){
    num1 = 30800
  }
  return num1
}
function testFntimeB(){
  num1 -= 200
  if (num1 < 28600){
    num1 = 28600
  }
  return num1
}
function testFntimeCenter(){
  num1 = 28800
  return num1
}
function testFntimeCenter1(){
  num1 += 200
  if (num1 >31000){
    num1 = 31000
  }
  return num1
}
function testFntimeWeek1(){
  num1 -= 5000
  if (num1 < 23200){
    num1 = 23600
  }
  return num1
}
function testFntimeWeek2(){
  num1 -= 2500
  if (num1 < 26300){
    num1 = 26300
  }
  return num1
}
function testFntimeWeek3(){
  num1 += 2500
  if (num1 > 33500){
    num1 = 33500
  }
  return num1
}
function xNumMounth(){
  num2 = num1 * 4
  return num2
}
function xNumYear(){
  num3 = num2 * 12
  return num3
}
// -------------------------------------------FORMS
const nameForm = document.forms.main
const subButton = document.querySelector('.interview__button')
const nameInputNew = nameForm.main1
const numberInputNew = nameForm.main2
const emailInputNew = nameForm.main3
const comentInputNew = nameForm.namecom

const label1 = nameInputNew.previousElementSibling
const label2 = numberInputNew.previousElementSibling
const label3 = emailInputNew.previousElementSibling
const label4 = comentInputNew.previousElementSibling

console.log(label1)
subButton.addEventListener('click', function(){
  if (nameInputNew.value.length <= 3){
    label1.style.visibility = 'visible'
  } else if (nameInputNew.value.length > 3) {
    label1.style.visibility = 'hidden'
  }
  if (numberInputNew.value.length <= 10){
    label2.style.visibility = 'visible'
  } else if (numberInputNew.value.length > 10) {
    label2.style.visibility = 'hidden'
  }
  if (emailInputNew.value.length <= 3){
    label3.style.visibility = 'visible'
  } else if (emailInputNew.value.length > 3) {
    label3.style.visibility = 'hidden'
  }
  if (comentInputNew.value.length <= 3){
    label4.style.visibility = 'visible'
  } else if (comentInputNew.value.length > 3) {
    label4.style.visibility = 'hidden'
  }
})
console.log(nameInputNew.value)

