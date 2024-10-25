function toggleInfo(infoId) {
    const infoDiv = document.getElementById(infoId);
    infoDiv.style.display = infoDiv.style.display === "block" ? "none" : "block";
  }
  function toggleInfo(id) {
    var element = document.getElementById(id);
    
    // Check if the element is currently hidden or visible
    if (element.style.display === "block") {
      element.style.display = "none";  // Hide the link
    } else {
      element.style.display = "block"; // Show the link
    }
  }
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-list ul');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });