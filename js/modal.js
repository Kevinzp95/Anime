const modal = () => {
  const modal = document.querySelector(".search-model");
  const modalBtn = document.querySelector(".icon_search");
  const closeBtn = modal.querySelector(".search-close-switch");

  modalBtn.addEventListener("click", show);
  closeBtn.addEventListener("click", close);

  function show(el) {
    modal.style.display = "block";
  }

  function close() {
    modal.style.display = "none";
  }
};

modal();
