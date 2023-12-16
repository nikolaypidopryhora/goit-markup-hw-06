(() => {
  const refs = {
    openModalBtn: document.querySelector("[menu-open]"),
    closeModalBtn: document.querySelector("[menu-close]"),
    modal: document.querySelector("[menu]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector("[modal-open]"),
    closeModalBtn: document.querySelector("[modal-close]"),
    modal: document.querySelector("[modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }
})();
