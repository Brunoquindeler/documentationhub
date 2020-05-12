var btnShowMore = document.querySelector('#button-show-more');

btnShowMore.onclick = function() {
  
    if (btnShowMore.classList.contains('fa-chevron-circle-down')) {
      btnShowMore.classList.remove('fa-chevron-circle-down');
      btnShowMore.classList.add('fa-chevron-circle-up');
    } else {
      btnShowMore.classList.remove('fa-chevron-circle-up');
      btnShowMore.classList.add('fa-chevron-circle-down');
    }
};