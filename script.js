let divBlockTest = document.querySelector('.block') // выбор элемента из html документа 
console.log(divBlockTest);

let headerTest = document.createElement('h2')   // создали элем 

divBlockTest.appendChild(headerTest)  // добавили дочернии элем

headerTest.textContent = 'the first test js'   //заполняет элемент текстом

headerTest.classList.add('title')          // добавления класса элементу


// создание нескольких элементов черед js
let navTest = document.querySelector('.nav')

let navList = `
<div class="test">
<p>first</p>
<p>secont</p>
<p>third</p>
<p>fourth</p>
<a href="">detail</a>
</div>
`
navTest.innerHTML = navList

// созд html элем у которых есть атрибуты

let elementTest = document.querySelector('.element')
let elementHref = document.createElement('a')
elementTest.appendChild(elementHref)

elementHref.href="./about.html"
elementHref.textContent='info'

let imageTest = document.createElement('img')
imageTest.src="./image/qw.jpg"
imageTest.alt="iphone"
elementTest.appendChild(imageTest)






