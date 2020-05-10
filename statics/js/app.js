var t = document.querySelector('#teste');

t.onclick = function() {
  
    if (t.classList.contains('fa-chevron-circle-down')) {
      t.classList.remove('fa-chevron-circle-down');
      t.classList.add('fa-chevron-circle-up');
      console.log("a");
    } else {
      t.classList.remove('fa-chevron-circle-up');
      t.classList.add('fa-chevron-circle-down');
      console.log("b");
    }
};