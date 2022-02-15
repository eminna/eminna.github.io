const hamButton=document.getElementById('hamburger');
const navList= document.getElementById('navList');

function toggleButton(){
    navList.classList.toggle('show');
}

hamButton.addEventListener('click',toggleButton);

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav").style.fontSize = "14px";
    document.getElementById("nav").style.height = "50px";

  } else {
    document.getElementById("nav").style.fontSize = "18px";
    document.getElementById("nav").style.height = "100px";

  }
} 