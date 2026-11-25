const images = document.querySelectorAll('.mini');

function resizeImages() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  images.forEach((img) => {

    console.log()
    // Example logic: set image width to a percentage of the window width
    // Or scale based on specific conditions
    const newWidth = Math.min(windowWidth * 0.3, 600); // Max 600px or 50% of window
    img.style.width = `${newWidth}px`;
     img.style.marginTop = "-30px"
    
    // Optional: maintain aspect ratio or adjust height automatically
    // img.style.height = 'auto'; 
  });
}

// Run on window resize and initial load
window.addEventListener('resize', resizeImages);
window.addEventListener('DOMContentLoaded', resizeImages);