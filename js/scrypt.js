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

// --------------------------------------------------------------анимация крежения букв
const text = document.querySelector(".text p");
text.innerHTML = text.innerText.split("").map((letter, i) =>
`<span style="transform:rotate(${i * 10.5}deg")>${letter}</span>`
)
.join("");

//  ----------------------------------------------------------------переключение в слайдере1
const itemAdvantageSliderLine = document.querySelector('.main__advantage-item-slide');
// const itemAdvantageSliderCont = document.querySelector('.main__advantage-flex-block-slide');
const itemAdvantageAll = document.querySelectorAll('.main__advantage-element-slide');

const itemAdvantageCircle = document.querySelectorAll('.main__advantage-circle');

let slidePosAdv = 0;
let widthAdv;
// -------text-cont

function initRewAdv(){
  widthAdv = document.querySelector('.main__advantage-flex-block-slide').offsetWidth;
  
  itemAdvantageSliderLine.style.width = widthAdv * itemAdvantageAll.length + 'px'
  itemAdvantageAll.forEach(function(item){
    item.style.width = widthAdv + 'px'
    item.style.height = 'auto'
  })
  rolSliderRewAdv()
}

window.addEventListener('resize', initRewAdv);
initRewAdv();

function rolSliderRewAdv(){
  itemAdvantageSliderLine.style.transform = 'translate(-' + slidePosAdv * widthAdv + 'px)';
  itemAdvantageAll.forEach(function(item){
    item.classList.remove('visi')

  })

}

// let widthb = document.body.offsetWidth

function thisCircleSlideRewAdv(index){
  itemAdvantageCircle.forEach(function(item){
    item.classList.remove('color-circle')
  })
  itemAdvantageCircle[index].classList.add('color-circle')
}
itemAdvantageCircle.forEach(function(el, index){
  el.addEventListener('click', function(){
    slidePosAdv = index;
    rolSliderRewAdv()
    thisCircleSlideRewAdv(slidePosAdv)
  })
})

// -------------------------------------------------------------------burger menu
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
const itemHrefBurg = document.querySelectorAll('a')
itemHrefBurg.forEach(function(item){
  item.addEventListener('click', function(){
    burgerMenu.classList.add('hidden')
    navHeader.classList.remove('hidden')
  })
})

//---------------------- ---------------------- ---------------------- ------------------калькулятор

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
// --------------------------------- --------------------------------FORMS
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


// ------------------------- ---------------------- ------------------Слайдер на отзывах

const rewiewSliderLine = document.querySelector('.reviews__slider-block');
const rewiewItemAll = document.querySelectorAll('.reviews__slider-item');
// -------buttons
const butSliderLeft = document.querySelector('.reviews__opacity-left');
const butSliderRight = document.querySelector('.reviews__opacity-right');
const circleItemRew = document.querySelectorAll('.reviews__circle')
let slidePos = 1;
let widthS;
// -------text-cont
const itemId1 = document.querySelector('#s1')
const itemId2 = document.querySelector('#s2')
const itemId3 = document.querySelector('#s3')
const itemId4 = document.querySelector('#s4')
const itemId5 = document.querySelector('#s5')
const itemId6 = document.querySelector('#s6')
function initRew(){
  widthS = document.querySelector('.reviews__block').offsetWidth;
  
  rewiewSliderLine.style.width = widthS * rewiewItemAll.length + 'px'
  rewiewItemAll.forEach(function(item){
    item.style.width = widthS + 'px'
    item.style.height = 'auto'
  })
  rolSliderRew()
}
window.addEventListener('resize', initRew);
initRew();
function rolSliderRew(){
  rewiewSliderLine.style.transform = 'translate(-' + slidePos * widthS + 'px)';
  rewiewItemAll.forEach(function(item){
    item.classList.remove('visi')

  })
  if (slidePos == 0){
    itemId3.classList.add('visi')
  } else if (slidePos == 1){
    itemId4.classList.add('visi')
  } else if (slidePos == 2){
    itemId5.classList.add('visi')
    itemId1.classList.add('visi')
  } else if (slidePos == 3){
    itemId6.classList.add('visi')
    itemId2.classList.add('visi')
  } else if (slidePos == 4){
    itemId3.classList.add('visi')
  } else if (slidePos == 5){
    itemId4.classList.add('visi')
  }

}

butSliderRight.addEventListener('click', function(){
  slidePos++
  if (slidePos >= rewiewItemAll.length){
    slidePos = 0
  }
  rolSliderRew()
  thisItemHover(slidePos)
  thisCircleSlideRew(slidePos)
})
butSliderLeft.addEventListener('click', function(){
  slidePos--
  if (slidePos < 0){
    slidePos = rewiewItemAll.length -1
  }
  rolSliderRew()
  thisItemHover(slidePos)
  thisCircleSlideRew(slidePos)
})

function thisItemHover(index){
  rewiewItemAll.forEach(function(item){
    item.classList.remove('hoveritem')
  })
  rewiewItemAll[index].classList.add('hoveritem')

}
// let widthb = document.body.offsetWidth

function thisCircleSlideRew(index){
  circleItemRew.forEach(function(item){
    item.classList.remove('color-circle')
  })
  circleItemRew[index].classList.add('color-circle')
}
circleItemRew.forEach(function(el, index){
  el.addEventListener('click', function(){
    slidePos = index;
    rolSliderRew()
    thisItemHover(slidePos)
    thisCircleSlideRew(slidePos)
  })
})

// ----------------------------------------------------------------------------------------------Слайдер на отзывах2

const itemId1C = document.querySelector('#ss1');
const itemId2C = document.querySelector('#ss2');
const itemId3C = document.querySelector('#ss3');
const itemId4C = document.querySelector('#ss4');
const itemId5C = document.querySelector('#ss5');
const itemId6C = document.querySelector('#ss6');
const textItemMass = document.querySelectorAll('.reviews-continue__text');
const itemId1Ct = document.querySelector('#st1');
const itemId2Ct = document.querySelector('#st2');
const itemId3Ct = document.querySelector('#st3');
const itemId4Ct = document.querySelector('#st4');
const itemId5Ct = document.querySelector('#st5');
const itemId6Ct = document.querySelector('#st6');

const itemAll = document.querySelectorAll('.reviews-continue__slider-item');
const slideLine = document.querySelector('.reviews-continue__slider-block');
let count = 1;
let width;
const circleItem = document.querySelectorAll('.reviews-continue__circle')

function init(){
  width = document.querySelector('.reviews-continue__block').offsetWidth;
  
  slideLine.style.width = width*itemAll.length + 'px'
  itemAll.forEach(function(item){
    item.style.width = width + 'px'
    item.style.height = 'auto'
  })
  rolSlider()
}

window.addEventListener('resize', init);
init();

document.querySelector('.reviews-continue__opacity-right').addEventListener('click', function(){
  count++
  if (count >= itemAll.length){
    count = 0
  }
  rolSlider()
  thisCircleSlide(count)
})
document.querySelector('.reviews-continue__opacity-left').addEventListener('click', function(){
  count--
  if (count < 0){
    count = itemAll.length -1
  }
  rolSlider()
  thisCircleSlide(count)
})

function rolSlider(){
  slideLine.style.transform = 'translate(-' + count * width + 'px)';
  textItemMass.forEach(function(item){
    item.classList.remove('rotate-right')
    item.classList.remove('rotate-left')
    itemAll.forEach(function(el){
      el.style.transform = 'translateX(0%)'
    })
    
    if (count == 1){
      itemId1Ct.classList.add('rotate-right')
      itemId3Ct.classList.add('rotate-left')
      itemId1C.style.transform = 'translateX(25%)'
      itemId3C.style.transform = 'translateX(-25%)'
    } else if (count == 2) {
      itemId2Ct.classList.add('rotate-right')
      itemId4Ct.classList.add('rotate-left')
      itemId2C.style.transform = 'translateX(25%)'
      itemId4C.style.transform = 'translateX(-25%)'
    } else if (count == 3) {
      itemId3Ct.classList.add('rotate-right')
      itemId5Ct.classList.add('rotate-left')
      itemId3C.style.transform = 'translateX(25%)'
      itemId5C.style.transform = 'translateX(-25%)'
    } else if (count == 4) {
      itemId4Ct.classList.add('rotate-right')
      itemId6Ct.classList.add('rotate-left')
      itemId4C.style.transform = 'translateX(25%)'
      itemId6C.style.transform = 'translateX(-25%)'
    } else if (count == 5) {
      itemId5Ct.classList.add('rotate-right')
      itemId5C.style.transform = 'translateX(25%)'
    } else if (count == 0) {
      itemId2Ct.classList.add('rotate-left')
      itemId2C.style.transform = 'translateX(-25%)'
    }
    
  })

}
function thisCircleSlide(index){
  circleItem.forEach(function(item){
    item.classList.remove('color-circle')
  })
  circleItem[index].classList.add('color-circle')
}
circleItem.forEach(function(el, index){
  el.addEventListener('click', function(){
    count = index;
    rolSlider()
    thisCircleSlide(count)
  })
})


// ------------------ ---------------------- ------------------аккордион блока вопросов
const questItemAll = document.querySelectorAll('.quest__text');
const questArrowAll = document.querySelectorAll('.quest__arrow');

for (const questItem of questItemAll){
  questItem.nextElementSibling.classList.add('hid');
  questItem.addEventListener('click', function(){
    this.nextElementSibling.classList.toggle('hid');
    this.querySelector('.quest__arrow-svg').classList.toggle('rotate-ar');
  })
}