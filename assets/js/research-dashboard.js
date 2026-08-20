(function () {
  var filterButtons = document.querySelectorAll("[data-filter]");
  var filterTargets = document.querySelectorAll(".project-card[data-category], .project-detail[data-category]");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var filter = button.getAttribute("data-filter");

      filterButtons.forEach(function (item) {
        item.classList.toggle("is-active", item === button);
      });

      filterTargets.forEach(function (target) {
        var category = target.getAttribute("data-category");
        target.classList.toggle("is-filtered-out", filter !== "all" && category !== filter);
      });
    });
  });

  document.querySelectorAll(".media-frame img").forEach(function (image) {
    image.addEventListener("error", function () {
      image.classList.add("is-missing");
    });
  });

  document.querySelectorAll(".media-frame video").forEach(function (video) {
    video.addEventListener("error", function () {
      video.classList.add("is-missing");
    });
  });
})();
