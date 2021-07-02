'use strict';

const category = document.querySelector('.main__find');

const idFind = document.querySelector('#idFind');
const pswFind = document.querySelector('#pswFind');
const btn = document.querySelector('.findBtn');
category.addEventListener('click', (e)=>{

  if(e.target.classNmae !== 'select'){
    changePage(e.target);
  }
});


function changePage(target){
  switch(target){
    case pswFind : 
      pswFind.classList.add('select');
      idFind.classList.remove('select');
      btn.innerHTML = '비밀번호 찾기';
      break;
    case idFind :
      idFind.classList.add('select');
      pswFind.classList.remove('select');
      btn.innerHTML = '아이디 찾기';
      break;
  }
};