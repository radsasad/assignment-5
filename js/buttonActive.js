function setActive(buttonId) {
    // Remove the 'active' class from all buttons
    document.querySelectorAll('.btn-new').forEach(btn => {
      btn.classList.remove('active');
    });
    
    // Add the 'active' class to the clicked button
    document.getElementById(buttonId).classList.add('active');
  }
  

