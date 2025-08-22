function goToResume(): void {
  // go to resume page once button is clicked
  window.location.href = "pages/resume.html"
}

function goToHome(): void {
  // go to resume page once button is clicked
  window.location.href = "/index.html"
}

document.addEventListener("DOMContentLoaded", () =>
{
  const btn = document.getElementById("resumeBtn");
  const btnHome = document.getElementById("homeBtn");
  // returns element id or null 
  if(btn) {
    // on click go to resume.html page
    btn.addEventListener("click",goToResume);
  }
  if(btnHome) {
    console.log("hello world!");
    btnHome.addEventListener("click",goToHome);
  }
});



