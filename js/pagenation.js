'use strict';

const pageNation = document.querySelector('.pagenation');
const pageNum = document.querySelectorAll('.pagenation span');

pageNation.addEventListener('click', (e)=>{
  pageNum.forEach(num=>{
    num.classList.remove('selected');
  })
  e.target.classList.add('selected');
})