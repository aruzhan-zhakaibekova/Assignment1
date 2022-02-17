
var slideIndex = 1;
      showSlides(slideIndex);
      function plusSlides(n) {  //forward/backward controls
        showSlides(slideIndex += n);
      }
      function currentSlide(n) {
        showSlides(slideIndex = n); //thumbnail controls
      }
      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("slides"); //declaring variable for elements with class name slides
        var dots = document.getElementsByClassName("dot"); //declaring variable for elements with class name dot
        if(n > slides.length) { //the functions depend on the length/number of slides elements
          slideIndex = 1
        }
        if(n < 1) {
          slideIndex = slides.length
        }
        for(i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; //show only one image in the carousel, other images invisible
        }
        for(i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", ""); //set the active dot corresponding to the order of the slide
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
      }
