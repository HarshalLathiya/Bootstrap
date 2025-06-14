window.onload = function () {
  const modal = document.querySelector(".modal");
  const modalImage = document.querySelector(".modal img");
  const closeButton = document.querySelector(".close");

  function openModal(event, src) {
    const clickedImage = event.target;

    if (clickedImage.classList.contains("premium-image")) {
      alert("This is a premium image. Please select a plan to unlock premium images.");
    
      const pricingSection = document.getElementById("pricing");
    
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth" });
      } else {
        // If not on this page, redirect to pricing on homepage
        window.location.href = "my_website.html#pricing"; 
      }
      return;
    }
    
    modalImage.src = src;
    modal.classList.add("show");
  }

  function closeModal() {
    modal.classList.remove("show");
    modalImage.src = ""; 
  }

  // Click outside the image to close modal
  modal.addEventListener("click", function (e) {
    if (e.target.classList.contains("modal")) {
      closeModal();
    }
  });

  // Close button click handler
  closeButton.addEventListener("click", function () {
    closeModal();
  });

  // Optional: allow ESC key to close the modal
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  // Make functions globally accessible to HTML
  window.openModal = openModal;
  window.closeModal = closeModal;
};
