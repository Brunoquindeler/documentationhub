var btn = document.querySelector('#btn-dm');


btn.onclick = function() {
  var Tbody = document.querySelector('body');
  var cards = document.querySelectorAll('.card');

  if (Tbody.classList.contains('TbodyDark')) {
    Tbody.classList.remove('TbodyDark')
    
    array.forEach(cards => {
      cards.classList.remove('text-white')
      cards.classList.remove('bg-dark')
    });


  } else {
    Tbody.classList.add('TbodyDark')
  }

  if (btn.innerHTML == "OFF"){
    btn.innerHTML = "ON";
    btn.classList.remove('btn-danger')
    btn.classList.add('btn-success')
  } else {
    btn.innerHTML = "OFF";
    btn.classList.remove('btn-success')
    btn.classList.add('btn-danger')
  }

  console.log('teste')
};