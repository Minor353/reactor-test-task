/**applicants arrow rotate**/
const applicantsArrows = document.querySelectorAll('.applicants-data-trigger');

if(applicantsArrows) {
    for(let i = 0; i < applicantsArrows.length; i++){
        applicantsArrows[i].addEventListener('click', function(){
            applicantsArrows[i].classList.toggle('applicants-item-data-active');
        });
    }
}
/****/

$(function () {
    $('[data-toggle="popover"]').popover()
  })