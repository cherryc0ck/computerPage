const deleteBtn = document.querySelectorAll('.delete');

const mainList = document.querySelector('.main__list');
const li = document.querySelectorAll('.main__list li');

mainList.addEventListener('click', (e)=>{
  console.log(e.target.dataset.index);
  mainList.removeChild(li[e.target.dataset.index-1])
})

