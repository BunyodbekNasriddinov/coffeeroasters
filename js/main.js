var pollDetails = document.querySelectorAll(".poll__details");
// var controlItem = document.querySelector(".control__item");
var controlTitle = document.querySelectorAll(".control__title");



pollDetails[0].addEventListener("click",function() {
  controlTitle[0].classList.toggle("active-control")
})


pollDetails[1].addEventListener("click",function() {
  controlTitle[1].classList.toggle("active-control")
})

pollDetails[2].addEventListener("click",function() {
  controlTitle[2].classList.toggle("active-control")
})

pollDetails[3].addEventListener("click",function() {
  controlTitle[3].classList.toggle("active-control")
})

pollDetails[4].addEventListener("click",function() {
  controlTitle[4].classList.toggle("active-control")
})

