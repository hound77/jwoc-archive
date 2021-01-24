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
  if(countMentee==320){
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
