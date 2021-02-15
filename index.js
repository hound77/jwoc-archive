var mentee= setInterval(menteecount, 0.5);
var mentor= setInterval(mentorcount, 35);
var project= setInterval(projectcount, 35);
var college= setInterval(collegecount, 15);

let countMentee= 1;
let countMentor= 1;
let countProject= 1;
let countCollege= 1;

function menteecount(){
  countMentee++;
  document.querySelector(".menteeClass").innerHTML=countMentee;
  if(countMentee==650){
    clearInterval(mentee)
  }
}

function mentorcount(){
  countMentor++;
  document.querySelector(".mentorClass").innerHTML=countMentor;
  if(countMentor==24){
    clearInterval(mentor)
  }
}

function projectcount(){
  countProject++;
  document.querySelector(".projectClass").innerHTML=countProject;
  if(countProject==24){
    clearInterval(project)
  }
}

function collegecount(){
  countCollege++;
  document.querySelector(".collegeClass").innerHTML=countCollege;
  if(countCollege==75){
    clearInterval(college)
  }
}

let slideIndex=1;
showSlides(slideIndex);
function nextSlide() {
    showSlides(slideIndex += 1);
}
function prevSlide() {
    showSlides(slideIndex -= 1);  
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("carousel-item");
let dots = document.getElementsByClassName("dot");   

if (n > slides.length) {
  slideIndex = 1
  }
if (n < 1) {
  slideIndex = slides.length
 }
  
for (let slide of slides) {
   slide.style.display = "none";
 }
 for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" activeDot", "");
}
slides[slideIndex - 1].style.display = "block"; 
dots[slideIndex-1].className += " activeDot";   
}

var slideIndexAuto = 0;
showSlidesAuto();

function showSlidesAuto() {
  var i;
  var slides = document.getElementsByClassName("carousel-item");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexAuto++;
  if (slideIndexAuto > slides.length) {slideIndexAuto = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeDot", "");
  }
  slides[slideIndexAuto-1].style.display = "block";
  dots[slideIndexAuto-1].className += " activeDot"; 
  setTimeout(showSlidesAuto, 5000);
}

window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("sticky",window.scrollY > 0);
});