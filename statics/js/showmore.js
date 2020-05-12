var btnShowMore = document.querySelector('#btn-sm');

btnShowMore.onclick = function() {
    var Ticon = document.querySelector('#icon-up-down');

    if (Ticon.classList.contains('fa-chevron-circle-down')) {
      Ticon.classList.remove('fa-chevron-circle-down');
      Ticon.classList.add('fa-chevron-circle-up');
    } else {
      Ticon.classList.remove('fa-chevron-circle-up');
      Ticon.classList.add('fa-chevron-circle-down');
    }
};