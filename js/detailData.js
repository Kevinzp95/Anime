const detailData = () => {
  const renderGanreList = (ganres) => {
    const dropdownBlock = document.querySelector(".header__menu .dropdown");

    ganres.forEach((ganre) => {
      dropdownBlock.insertAdjacentHTML(
        "beforeend",
        `
              <li><a href="./categories.html?ganre=${ganre}">${ganre}</a></li>`
      );
    });
  };

  const renderAnimeDetails = (array, itemId) => {
    const animeObj = array.find((item) => item.id == itemId);
    const imageBlock = document.querySelector(".anime__details__pic");
    const viewsBlock = imageBlock.querySelector(".view");
    const titleBlock = document.querySelector(".view");
    const subtitleBlock = document.querySelector(".view");

    if (animeObj) {
      imageBlock.dataset.setbg = animeObj.image;
      viewsBlock.innerHTML = "";
      viewsBlock.insertAdjacentElement(
        "beforeend",
        `<i class="fa fa-eye"></i> ${animeObj.views}`
      );

      document.querySelectorAll(".set-bg").forEach((elem) => {
        elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
      });
    } else {
      console.log("Аниме отсутствует");
    }
  };

  fetch("./db.json")
    .then((response) => response.json())
    .then((data) => {
      const ganres = new Set();
      const ganreParams = new URLSearchParams(window.location.search).get(
        "itemId"
      );

      console.log(ganreParams);
      data.anime.forEach((item) => {
        ganres.add(item.ganre);
      });
      if (ganreParams) {
        renderAnimeDetails(data.anime, ganreParams);
      } else {
        console.log("Нет Аниме");
      }
      renderGanreList(ganres);
    });
};
detailData();
