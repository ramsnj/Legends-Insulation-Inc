
function handleModal(){
  const modal = document.querySelector('#menu-modal')
  if(modal.style.display !== 'flex'){
      modal.style.display = 'flex';
  }else{
    modal.style.display = 'none';
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      const modal = document.querySelector('#menu-modal');
      modal.style.display = 'none';
  });
});