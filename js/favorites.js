'use strict';

const favorites = document.querySelector('.main__favorites');

let status = false;

favorites.addEventListener('click', ()=>{
  favoritesLogic();
});

function favoritesLogic(){
  if(status){
    favorites.innerHTML = `<i class="far fa-star"></i>`;
    status=false;
  }
  else if(status === false){
    favorites.innerHTML = `<i class="fas fa-star"></i>`;
    status=true;
  }
}