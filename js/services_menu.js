const services_menu = document.querySelector('#menu');
const services_btn = document.querySelector('.service_header_nav_menu');
const grey_part = services_menu.querySelector('.grey_half');
const menu_text = services_menu.querySelector('.menu_text');
const exit_btn = services_menu.querySelector('.menu_exit');
const arrow_services = services_menu.querySelector('.arrow');




function openMenuService() {

  services_menu.style.display = 'block';

  setTimeout(function () {
    grey_part.classList.add('animation_open');
    menu_text.classList.add('animation_open');
    arrow_services.classList.add('arrow_visible');
  }, 600);
  checkedIsOpen(services_menu);
}

function closeMenuService () {

  grey_part.classList.remove('animation_open');
  menu_text.classList.remove('animation_open');
  arrow_services.classList.remove('arrow_visible');

  setTimeout(function () {
    services_menu.style.display = 'none';
    checkedIsOpen(services_menu);
  }, 600);

}

services_btn.addEventListener('click',openMenuService);
exit_btn.addEventListener('click', closeMenuService);
