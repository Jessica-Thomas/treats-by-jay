// CAROUSEL
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
<<<<<<< HEAD


// SUBMIT ALERT

// function validateForm() {

//     if (document.getElementsByClassName("fieldWidth").value == ______) { 
// //  what i want to say:: if required fields are complete

//           alert('There are required fields missing. Check yo self.')

//     } else {
//       function onSubmit
//           alert('Thanks! Someone from Treats by Jay will reach out to you soon!')
//     }
// }
=======
>>>>>>> parent of b7fa7c8... updated some css
