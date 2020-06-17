const body = document.querySelector('body');


function checkedIsOpen (form) {
  if (form.style.display === 'block'){
    body.style.overflow = 'hidden';
  }else {
    body.style.overflow = 'auto';
  }
}
