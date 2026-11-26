const tabs = document.querySelectorAll('.tab-link');

// Add click event listener to each tab
tabs.forEach(tab => {
  tab.addEventListener('click', function(event) {
    // Prevent default anchor link jump behavior
    event.preventDefault();

    // Remove 'active' class from all tabs
    tabs.forEach(t => t.classList.remove('active'));

    // Add 'active' class to the clicked tab
    this.classList.add('active');
  });
});