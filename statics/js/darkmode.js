var btn = document.querySelector('#btn-dm');

btn.onclick = function() {
  var Tbody = document.querySelector('body');
  
  if (Tbody.classList.contains('TbodyDark')) {
    Tbody.classList.remove('TbodyDark')
  } else {
    Tbody.classList.add('TbodyDark')
  }

  if (btn.innerHTML == "OFF"){
    btn.innerHTML = "ON";
  } else {
    btn.innerHTML = "OFF";
  }

  console.log('teste')
};