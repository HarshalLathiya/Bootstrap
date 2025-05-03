window.onload = function() {
  const modal = document.querySelector(".modal");
  const modalImage = document.querySelector(".modal img");
  const closeButton = document.querySelector(".close");

  function openModal(src) {
    modalImage.src = src;
    modal.classList.add("show");
  }

  function closeModal() {
    modal.classList.remove("show");
  }

  modal.addEventListener("click", function(e) {
    if (e.target.classList.contains("modal")) {
      closeModal();
    }
  });

  closeButton.addEventListener("click", function() {
    closeModal();
  });

  window.openModal = openModal;
  window.closeModal = closeModal;
};
