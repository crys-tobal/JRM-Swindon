
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




