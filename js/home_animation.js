const homeAnimation = document.getElementById('welcomeAnimation');
const animationIcon = document.getElementById('welcomeAnimationIcon');
const animationWorldwide = document.getElementById('welcomeAnimationWorldwide');
const lines = document.querySelectorAll('.yellow_line');
const boxes = document.querySelectorAll('.box');

 let flag;

function collapseText() {
  animationIcon.classList.add('collapseIconWord');
  animationWorldwide.classList.add('collapseWorldwide');
}

function stretchLine() {
  lines.forEach(line => line.classList.add('stretchYellowLine'));
}

function closeBox() {
boxes.forEach(box => box.classList.add('closingBox'));
body.style.overflow = 'auto';
}

function  startHomeAnimation (){
    collapseText();
    setTimeout(stretchLine, 800);
    setTimeout(closeBox, 1600);
}

function checkedShowAnimation () {
  if (flag){
    flag = false;
    homeAnimation.style.display = 'none';
    homeAnimation.style.overflow = 'auto';
  }else
    startHomeAnimation();
    flag = true;
}

  homeAnimation.addEventListener('click', checkedShowAnimation);




