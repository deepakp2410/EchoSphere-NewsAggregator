// Your API Key from https://newsapi.org
const apiKey = 'bd0c361660854f37af52bba63598dca2'; // Replace this with your own API key

// DOM Elements
const newsContainer = document.getElementById('news-container');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const categoryButtons = document.querySelectorAll('.categories button');

// Fetch and display news based on category or search term
async function fetchNews(query = '', category = '') {
  // Build the API URL depending on query and category
  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  if (category) {
    url += `&category=${category}`;
  }

  if (query) {
    url += `&q=${query}`;
  }

  try {
    const res = await fetch(url);
    const data = await res.json();
    
    // Error handling if API response is not ok
    if (data.status !== 'ok') {
      newsContainer.innerHTML = `<p>Error: ${data.message}</p>`;
      return;
    }

    displayNews(data.articles);
  } catch (error) {
    newsContainer.innerHTML = `<p>Error fetching news. Please try again later.</p>`;
  }
}

// Display the fetched news articles
function displayNews(articles) {
  newsContainer.innerHTML = '';  // Clear previous news articles

  if (articles.length === 0) {
    newsContainer.innerHTML = `<p>No news found. Try a different search or category.</p>`;
    return;
  }

  articles.forEach(article => {
    const newsCard = document.createElement('div');
    newsCard.classList.add('news-card');

    newsCard.innerHTML = `
      <img src="${article.urlToImage}" alt="news-image" onerror="this.src='fallback-image.jpg'">
      <h3>${article.title}</h3>
      <p>${article.description ? article.description : 'No description available.'}</p>
      <a href="${article.url}" target="_blank">Read more</a>
    `;

    newsContainer.appendChild(newsCard);
  });
}

// Event Listeners for Search and Category Buttons
searchBtn.addEventListener('click', () => {
  const query = searchInput.value;
  if (query.trim()) {
    fetchNews(query);  // Fetch news based on search query
  } else {
    newsContainer.innerHTML = `<p>Please enter a search term.</p>`;
  }
});

categoryButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const category = e.target.dataset.category;
    fetchNews('', category);  // Fetch news based on category
  });
});

// Initial Fetch of Default News
fetchNews();
