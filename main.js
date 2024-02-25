
console.log("starting js...")
  
  var aboutLink = document.getElementById("about");
  var resumeLink = document.getElementById("resume");
  var projectLink = document.getElementById("project");
  var certificationLink = document.getElementById("cert");
  var contactLink = document.getElementById("contact");
  
  var aboutContent = document.querySelector(".aboutbox");
  var resumeContent = document.querySelector(".resumebox");
  var projectContent = document.querySelector(".projectbox");
  var certificationContent = document.querySelector(".certbox");
  var contactContent = document.querySelector(".contactbox");
  
  aboutLink.addEventListener("click", function () {
    resumeContent.style.display = "none";
    aboutContent.style.display = "block";
    projectContent.style.display = "none";
    certificationContent.style.display = "none";
    contactContent.style.display = "none";
  });
  
  resumeLink.addEventListener("click", function () {
    aboutContent.style.display = "none";
    resumeContent.style.display = "block";
    projectContent.style.display = "none";
    certificationContent.style.display = "none";
    contactContent.style.display = "none";
  });
  
  projectLink.addEventListener("click", function () {
    aboutContent.style.display = "none";
    resumeContent.style.display = "none";
    projectContent.style.display = "block";
    certificationContent.style.display = "none";
    contactContent.style.display = "none";
  });
  
  certificationLink.addEventListener("click", function () {
    aboutContent.style.display = "none";
    resumeContent.style.display = "none";
    projectContent.style.display = "none";
    certificationContent.style.display = "block";
    contactContent.style.display = "none";
  });
  
  contactLink.addEventListener("click", function () {
    aboutContent.style.display = "none";
    resumeContent.style.display = "none";
    projectContent.style.display = "none";
    certificationContent.style.display = "none";
    contactContent.style.display = "block";
  });
  

  console.log("progress starting");
  var progressBars = document.querySelectorAll(".progressbar");
  
  progressBars.forEach(function (progressBar) {
    var progressValue = progressBar
      .closest(".skillbar")
      .previousElementSibling.querySelector(".progress-value");
    var progress = progressValue.getAttribute("data-progress");
    console.log(progress);
    progressBar.style.width = progress;
  });
  
var expbtn = document.querySelector(".expand-btn")
var sidemore = document.querySelector(".sidebox-more")
console.log("expansion started")

function expansion(){
  
  if(sidemore.style.display === "none"){
    sidemore.style.display = "block"
  }
  else{
    sidemore.style.display = "none" 
  }
}

expbtn.addEventListener("click", expansion)
  
  
  
  
  
  