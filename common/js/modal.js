document.addEventListener("DOMContentLoaded", function () {
  const checkboxHowto = document.getElementById("modal-trigger-howto");
  const checkboxMembers = document.getElementById("modal-trigger-members");

  function toggleBodyScroll() {
    if (checkboxHowto.checked || checkboxMembers.checked) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }

  // HOWTOモーダル
  const labelHowto = document.querySelector('label[for="modal-trigger-howto"]');
  const closeHowto = document.querySelector(".modal-wrap.modal-howto .modal-close");
  const overlayHowto = document.querySelector("#modal-trigger-howto ~ .modal-overlay");

  labelHowto.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      checkboxHowto.checked = !checkboxHowto.checked;
      toggleBodyScroll();
    }
  });

  closeHowto.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      checkboxHowto.checked = false;
      toggleBodyScroll();
    }
  });

  overlayHowto.addEventListener("click", function (e) {
    if (e.target === overlayHowto) {
      checkboxHowto.checked = false;
      toggleBodyScroll();
    }
  });

  checkboxHowto.addEventListener("change", toggleBodyScroll);

  // MEMBERSモーダル
  const labelMembers = document.querySelector('label[for="modal-trigger-members"]');
  const closeMembers = document.querySelector(".modal-wrap.modal-members .modal-close");
  const overlayMembers = document.querySelector("#modal-trigger-members ~ .modal-overlay");

  labelMembers.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      checkboxMembers.checked = !checkboxMembers.checked;
      toggleBodyScroll();
    }
  });

  closeMembers.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      checkboxMembers.checked = false;
      toggleBodyScroll();
    }
  });

  overlayMembers.addEventListener("click", function (e) {
    if (e.target === overlayMembers) {
      checkboxMembers.checked = false;
      toggleBodyScroll();
    }
  });

  checkboxMembers.addEventListener("change", toggleBodyScroll);
});