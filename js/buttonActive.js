function setActive(buttonId) {
    
    document.querySelectorAll('.btn-new').forEach(btn => {
      btn.classList.remove('active');
    });
    
    document.getElementById(buttonId).classList.add('active');
  }
  

