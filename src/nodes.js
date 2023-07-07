const $ = (id) => document.querySelector(id);

// Sections
const headerSection = $("#header");
const trendingPreviewSection = $("#trendingPreview");
const categoriesPreviewSection = $("#categoriesPreview");
const genericSection = $("#genericList");
const movieDetailSection = $("#movieDetail");
const likedMoviesSection = $("#liked");
const footer = $("footer");

// Lists & Containers
const searchForm = $("#searchForm");
const trendingMoviesPreviewList = $(".trendingPreview-movieList");
const categoriesPreviewList = $(".categoriesPreview-list");
const movieDetailCategoriesList = $("#movieDetail .categories-list");
const relatedMoviesContainer = $(".relatedMovies-scrollContainer");
const likedMoviesListArticle = $(".liked-movieList");
const categoriesList = $(".categories-list");

// Elements
const headerTitle = $(".header-title");
const arrowBtn = $(".header-arrow");
const headerCategoryTitle = $(".header-title--categoryView");

const searchFormInput = $("#searchForm input");
const searchFormBtn = $("#searchBtn");

const trendingBtn = $(".trendingPreview-btn");

const movieDetailTitle = $(".movieDetail-title");
const movieDetailDescription = $(".movieDetail-description");
const movieDetailScore = $(".movieDetail-score");
