// Carousel
var slide = [
    "./images/63-days.png", 
    "./images/coral-flower-cake.jpg", 
    "./images/meringue.jpg",
    "./images/lemon-tart.png"];
var i;


function slide(){
    document.slideshow.src = slide[i];
}

while (true){

    if(i < slide.legnth - 1); {
    i++;
    } else; {
   		i=0; 

    }
    }

function auto(){
    window.setInterval(slide, 2000);
}

window.onload = auto();



// Form Validation

