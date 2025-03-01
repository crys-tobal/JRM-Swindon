
document.addEventListener("DOMContentLoaded", function () {
  // Get all giving buttons
  const givingButtons = document.querySelectorAll(".giving-button");
  const overlay = document.getElementById("copyOverlay");

  // Function to copy text and show overlay
  function copyText(event) {
      event.preventDefault(); // Prevent default link behavior

      // Get the text inside the clicked anchor
      const textToCopy = event.target.innerText.trim();

      // Copy text to clipboard
      navigator.clipboard.writeText(textToCopy).then(() => {
          // Show overlay
          overlay.style.display = "block";

          // Hide overlay after 1.5 seconds
          setTimeout(() => {
              overlay.style.display = "none";
          }, 1500);
      }).catch(err => console.error("Copy failed:", err));
  }

  // Attach event listeners to all giving buttons
  givingButtons.forEach(button => {
      button.addEventListener("click", copyText);
  });
});

















function openModal() {
  document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
  document.getElementById("myModal").style.display = "none";
  }
  
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
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
  }







                      // Open Modal for the second slideshow
                      function openModal2() {
                        document.getElementById("myModal2").style.display = "block";
                    }

                    // Close Modal for the second slideshow
                    function closeModal2() {
                        document.getElementById("myModal2").style.display = "none";
                    }

                    // Second slideshow index
                    var slideIndex2 = 1;
                    showSlides2(slideIndex2);

                    // Show Slides for the second slideshow
                    function plusSlides2(n) {
                        showSlides2(slideIndex2 += n);
                    }

                    function currentSlide2(n) {
                        showSlides2(slideIndex2 = n);
                    }

                    function showSlides2(n) {
                        var i;
                        var slides = document.getElementsByClassName("mySlides2");
                        var dots = document.getElementsByClassName("demo");
                        var captionText = document.getElementById("caption2");
                        
                        if (n > slides.length) {slideIndex2 = 1}
                        if (n < 1) {slideIndex2 = slides.length}
                        
                        // Hide all slides
                        for (i = 0; i < slides.length; i++) {
                            slides[i].style.display = "none";
                        }
                        
                        // Remove the "active" class from all dots
                        for (i = 0; i < dots.length; i++) {
                            dots[i].className = dots[i].className.replace(" active", "");
                        }
                        
                        // Show the current slide
                        slides[slideIndex2-1].style.display = "block";
                        dots[slideIndex2-1].className += " active";
                        
                        // Set the caption text
                        captionText.innerHTML = dots[slideIndex2-1].alt;
                    }
