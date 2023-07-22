function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  var html = document.querySelector("#html");
  var css = document.querySelector("#css");
  var js = document.querySelector("#js");
  var x = true;
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
      html.classList.add("cards")
      css.classList.add("cards")
      js.classList.add("cards")
      html.classList.remove("card")
      css.classList.remove("card")
      js.classList.remove("card")
  
    } else {
      reveals[i].classList.remove("active");
     

    }
  }
}

window.addEventListener("scroll", reveal);

 
const cbox = document.querySelectorAll(".more");
const apear = document.querySelectorAll(".triger")
const ul=document.querySelectorAll(".ul")

for (let i = 0; i < cbox.length; i++) {
    let x = 0;
   cbox[i].addEventListener("click", function () {
      
       x += 1;
       console.log(x)
     if (x % 2 != 0) {
        apear[i].classList.remove("disapear")
         apear[i].classList.add("apear")
   
       cbox[i].classList.add("button_plus")
     }
       else if (x%2===0||x==0){
        apear[i].classList.add("disapear")
       cbox[i].classList.remove("button_plus")
      
       }
     });
}


// Add event listeners for focus and blur events
const avatar = document.getElementById("avatar");
const right_hand = document.getElementById("right_hand");
const left_hand = document.getElementById("left_hand");
const glasess = document.getElementById("glasess");
const hand_top = document.getElementById("hand_top");
function email_av() {
      avatar.classList.add("avtar_left");
}

function b_email_av() {
    avatar.classList.remove("avtar_left");
}
function name_av() {
      avatar.classList.add("avtar_up");
}

function b_name_av() {
    avatar.classList.remove("avtar_up");
}
function subject_av() {
 avatar.classList.add("avatar_subject");

  left_hand.classList.add("hl");
  right_hand.classList.add("hr");
   left_hand.classList.remove("hl_r");
  right_hand.classList.remove("hr_r");
}

function b_subject_av() {
  left_hand.classList.remove("hl");
  right_hand.classList.remove("hr");
  left_hand.classList.add("hl_r");
  right_hand.classList.add("hr_r");
  avatar.classList.remove("avatar_subject");
  setTimeout(() => {
    left_hand.classList.remove("hl_r");
  right_hand.classList.remove("hr_r");
  },3000)

}
function glasess_on() {
  console.log(glasess)
  glasess.classList.add("gl_go");
  hand_top.classList.add("gl_hand_go");
  setTimeout(() => {
  hand_top.classList.remove("gl_hand_go");
  hand_top.classList.add("gl_hand_back");
  }, 1000);
  avatar.classList.add("message_avatar");
}
function glasess_off() {
   
 hand_top.classList.remove("gl_hand_go");
  hand_top.classList.remove("gl_hand_back");
  hand_top.classList.add("gl_hand_go");
  setTimeout(() => {
  glasess.classList.remove("gl_go");
  glasess.classList.add("gl_back");
  hand_top.classList.add("gl_hand_back");   
    }, 1000);
  setTimeout(() => {
    glasess.classList.remove("gl_go");
    glasess.classList.remove("gl_back");
    hand_top.classList.remove("gl_hand_go");
    hand_top.classList.remove("gl_hand_back");
    }, 2500);
   avatar.classList.remove("message_avatar");
}
const slider = document.getElementById('pojects-layout');
let isDown = false;
let startX; 
let scrollLeft;
slider.addEventListener('mousedown',(e) => {
  isDown = true;
  slider.classList.add("active_slider")
  startX = e.pageX - slider.offsetLeft;
  scrollLeft=slider.scrollLeft;

 
});
slider.addEventListener('mouseleave',()=>{
  isDown = false
   slider.classList.remove("active_slider")
});
slider.addEventListener('mouseup',()=>{
  isDown = false
   slider.classList.remove("active_slider")
});
slider.addEventListener('mousemove',(e)=>{
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX
  slider.scrollLeft= scrollLeft-walk
    console.log(walk)
});