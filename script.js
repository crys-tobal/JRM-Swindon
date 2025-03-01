let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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

// Get all giving buttons
const givingButtons = document.querySelectorAll("giving-button");
const overlay = document.getElementById("copyOverlay");

// Function to copy text and show overlay
function copyText(event) {
    event.preventDefault(); // Prevent default link behavior

    // Get the text inside the clicked anchor
    const textToCopy = event.target.textContent.trim();

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