// Sample movie data based on mood
const movieData = {
    happy: [
      { title: "Movie A", img: "https://via.placeholder.com/200x300" },
      { title: "Movie B", img: "https://via.placeholder.com/200x300" },
      { title: "Movie C", img: "https://via.placeholder.com/200x300" },
    ],
    sad: [
      { title: "Movie D", img: "https://via.placeholder.com/200x300" },
      { title: "Movie E", img: "https://via.placeholder.com/200x300" },
      { title: "Movie F", img: "https://via.placeholder.com/200x300" },
    ],
    excited: [
      { title: "Movie G", img: "https://via.placeholder.com/200x300" },
      { title: "Movie H", img: "https://via.placeholder.com/200x300" },
      { title: "Movie I", img: "https://via.placeholder.com/200x300" },
    ],
    calm: [
      { title: "Movie J", img: "https://via.placeholder.com/200x300" },
      { title: "Movie K", img: "https://via.placeholder.com/200x300" },
      { title: "Movie L", img: "https://via.placeholder.com/200x300" },
    ]
  };
  
  let currentSlide = 0;
  
  function updateCarousel(mood) {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.innerHTML = ''; // Clear existing items
  
    // Populate carousel with mood-based movies
    movieData[mood].forEach(movie => {
      const carouselItem = document.createElement('div');
      carouselItem.classList.add('carousel-item');
      if (movieData[mood].indexOf(movie) === 0) carouselItem.classList.add('active'); // Make the first item active
  
      carouselItem.innerHTML = `
        <img src="${movie.img}" alt="${movie.title}">
        <p class="movie-title">${movie.title}</p>
      `;
      carouselInner.appendChild(carouselItem);
    });
  
    currentSlide = 0;
    updateCarouselPosition();
  }
  
  function updateCarouselPosition() {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  
  function prevSlide() {
    const items = document.querySelectorAll('.carousel-item');
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : items.length - 1;
    updateCarouselPosition();
  }
  
  function nextSlide() {
    const items = document.querySelectorAll('.carousel-item');
    currentSlide = (currentSlide < items.length - 1) ? currentSlide + 1 : 0;
    updateCarouselPosition();
  }
  