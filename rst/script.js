"use strict"

const tog = document.getElementById('tog');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
text2.style.display = 'none';

tog.onchange = function () {
  if (tog.checked) {
    text1.style.display = 'block';
    text2.style.display = 'none';
    AOS.init();
  } else {
    text2.style.display = 'block';
    text1.style.display = 'none';
    AOS.init();
  }
};

AOS.init({
  duration: 1200,
})