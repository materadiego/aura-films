let page = 1;
let maxPage;
let infiniteScroll;

window.addEventListener(
  "DOMContentLoaded",
  () => {
    navigator();
    window.history.pushState({ loadUrl: window.location.href }, null, "");
  },
  false
);
searchFormBtn.addEventListener("click", () => {
  location.hash = "#search=" + searchFormInput.value;
});
trendingBtn.addEventListener("click", () => {
  location.hash = "#trends";
});
arrowBtn.addEventListener("click", () => {
  const stateLoad = window.history.state ? window.history.state.loadUrl : "";
  if (stateLoad.includes("#")) {
    window.location.hash = "";
  } else {
    window.history.back();
  }
});

window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);
window.addEventListener("scroll", infiniteScroll, false);

function navigator() {
  console.log({ location });

  if (infiniteScroll) {
    window.removeEventListener("scroll", infiniteScroll, { passive: false });
    infiniteScroll = undefined;
  }

  if (location.hash.startsWith("#trends")) {
    trendsPage();
  } else if (location.hash.startsWith("#search=")) {
    searchPage();
  } else if (location.hash.startsWith("#movie=")) {
    movieDetailsPage();
  } else if (location.hash.startsWith("#category=")) {
    categoriesPage();
  } else {
    homePage();
  }
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  if (infiniteScroll) {
    window.addEventListener("scroll", infiniteScroll, false);
  }
}

function homePage() {
  console.log("Homepage");

  headerSection.classList.remove("header-container--long");
  headerSection.style.background = "";
  arrowBtn.classList.add("inactive");
  arrowBtn.classList.remove("header-arrow--white");

  headerCategoryTitle.classList.add("inactive");
  headerTitle.classList.remove("inactive");
  searchForm.classList.remove("inactive");

  trendingPreviewSection.classList.remove("inactive");
  likedMoviesSection.classList.remove("inactive");

  categoriesPreviewSection.classList.remove("inactive");
  categoriesList.remove("detail-categories");

  genericSection.classList.add("inactive");
  movieDetailSection.classList.add("inactive");
  footer.classList.remove("inactive");

  getTrendingMoviesPreview();
  getCategoriesPreview();
  getLikedMovies();
}

function trendsPage() {
  console.log("Trends");

  headerSection.classList.remove("header-container--long");
  headerSection.style.background = "";
  arrowBtn.classList.remove("inactive");
  arrowBtn.classList.remove("header-arrow--white");
  arrowBtn.classList.remove("header-arrow--detail");

  headerCategoryTitle.classList.remove("inactive");
  headerCategoryTitle.innerHTML = "Tendencias";

  headerTitle.classList.add("inactive");
  searchForm.classList.remove("inactive");

  trendingPreviewSection.classList.add("inactive");
  likedMoviesSection.classList.add("inactive");
  categoriesPreviewSection.classList.add("inactive");
  categoriesList.remove("detail-categories");

  genericSection.classList.remove("inactive");
  movieDetailSection.classList.add("inactive");
  footer.classList.add("inactive");

  getTrendingMovies();

  infiniteScroll = getPaginatedTrendingMovies;
}

function movieDetailsPage() {
  console.log("Movie");

  headerSection.classList.add("header-container--long");
  // headerSection.style.background = "";
  arrowBtn.classList.remove("inactive");
  arrowBtn.classList.add("header-arrow--white");
  arrowBtn.classList.add("header-arrow--detail");

  headerCategoryTitle.classList.add("inactive");
  headerTitle.classList.add("inactive");
  searchForm.classList.add("inactive");

  trendingPreviewSection.classList.add("inactive");
  likedMoviesSection.classList.add("inactive");
  categoriesPreviewSection.classList.add("inactive");
  categoriesList.classList.add("detail-categories");
  genericSection.classList.add("inactive");
  movieDetailSection.classList.remove("inactive");
  footer.classList.add("inactive");
  const [_, movieId] = location.hash.split("=");
  getMovieById(movieId);
}

function searchPage() {
  console.log("Search");

  headerSection.classList.remove("header-container--long");
  headerSection.style.background = "";
  arrowBtn.classList.remove("inactive");
  arrowBtn.classList.remove("header-arrow--white");
  arrowBtn.classList.remove("header-arrow--detail");

  headerCategoryTitle.classList.add("inactive");
  headerTitle.classList.add("inactive");
  searchForm.classList.remove("inactive");

  trendingPreviewSection.classList.add("inactive");
  likedMoviesSection.classList.add("inactive");

  categoriesPreviewSection.classList.add("inactive");
  categoriesList.remove("detail-categories");

  genericSection.classList.remove("inactive");
  movieDetailSection.classList.add("inactive");
  footer.classList.add("inactive");

  const [_, query] = location.hash.split("=");
  getMoviesBySearch(query);
  infiniteScroll = getPaginatedMoviesBySearch(query);
}

function categoriesPage() {
  window.scroll(0, 0);
  console.log("Categories");

  headerSection.classList.remove("header-container--long");
  headerSection.style.background = "";
  arrowBtn.classList.remove("inactive");
  arrowBtn.classList.remove("header-arrow--white");
  arrowBtn.classList.remove("header-arrow--detail");

  headerCategoryTitle.classList.remove("inactive");
  headerTitle.classList.add("inactive");
  searchForm.classList.remove("inactive");

  trendingPreviewSection.classList.add("inactive");
  likedMoviesSection.classList.add("inactive");
  categoriesPreviewSection.classList.add("inactive");
  categoriesList.remove("detail-categories");

  genericSection.classList.remove("inactive");
  movieDetailSection.classList.add("inactive");
  footer.classList.add("inactive");

  const [_, categoryData] = location.hash.split("=");
  const [categoryId, categoryName] = categoryData.split("-");
  const newCategoryName = decodeURI(categoryName);
  headerCategoryTitle.innerHTML = newCategoryName;

  getMoviesByCategory(categoryId);
  infiniteScroll = getPaginatedMoviesByCategory(categoryId);
}
