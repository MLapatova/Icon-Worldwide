const contact_form = document.getElementById('contact_form');
const leftPart = contact_form.querySelector('.left_part_contact');
const rightPart = contact_form.querySelector('.right_part_contact');
const exit = rightPart.querySelector('.contact_exit');
const arrow = contact_form.querySelector('.arrow_contact');
const textarea = contact_form.querySelector('#textarea');
const submit_btn = contact_form.querySelector('#submit');
const form = contact_form.querySelector('#the_form');
const email_input = contact_form.querySelector('.email_input');





function openContactForm() {

  contact_form.style.display = 'block';

  setTimeout(function () {
    leftPart.classList.add('animation_active');
    rightPart.classList.add('animation_active');
    arrow.classList.add('arrow_visible');
  }, 500);

  checkedIsOpen(contact_form);
}

function markTextarea() {
  textarea.classList.add('expand_textarea');
}

function validationEmail() {

  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value))) {

    form.email.style.borderBottom = '1px solid red';
    form.querySelector('.email').style.color = 'red';
  } else {
    form.email.style.borderBottom = '1px solid #fff';
    form.querySelector('.email').style.color = '#fff';
    submit_btn.innerHTML = 'Submitting...';
  }
}

function changeTextSubmitBtn() {
  submit_btn.innerHTML = 'Submit';
}

function exitContactForm() {

  leftPart.classList.remove('animation_active');
  rightPart.classList.remove('animation_active');
  arrow.classList.remove('arrow_visible');

  form.email.style.borderBottom = '1px solid #fff';
  form.querySelector('.email').style.color = '#fff';
  submit_btn.innerHTML = 'Submit';

  setTimeout(function () {
    contact_form.style.display = 'none';
    checkedIsOpen(contact_form);
  }, 500);

  textarea.classList.remove('expand_textarea');


}

email_input.addEventListener('keyup', changeTextSubmitBtn);
submit_btn.addEventListener('click', validationEmail);
textarea.addEventListener('click', markTextarea);
exit.addEventListener('click', exitContactForm);



