'use strict';

const mainBtn = document.querySelector('.main__btn');

const selectBtn = document.querySelectorAll('.main__btn button');

mainBtn.addEventListener('click', (e)=>{
  selectBtn.forEach(btn=>{
    btn.classList.remove('selected');
  })
  e.target.classList.add('selected')
})