# EchoSphere – Where news echoes with deeper meaning and unseen narratives. 📰

The **EchoSphere** is a web application that fetches and displays news from various categories (business, technology, health, etc.) using the NewsAPI. Users can search for specific news or filter by categories.

## Features
- Search news by keyword.
- Filter news by category (Business, Entertainment, Health, Science, Sports, Technology).
- Fetches real-time news using NewsAPI.
- Displays news articles with images, descriptions, and links to full articles.
- Fully responsive design, works on mobile, tablet, and desktop devices.

## Project Structure
- `index.html`: The main HTML file that structures the application layout.
- `style.css`: Contains styles for the application, including responsive design.
- `script.js`: JavaScript file that handles API calls to fetch news and dynamically display it.

## How to Use

### Requirements
- You need a valid API key from NewsAPI to use the app. You can sign up and get a free API key.

### Steps to Run Locally
1. Clone the repository or download the files.
2. Replace the API key in `script.js` (`const apiKey = 'your-api-key';`) with your own API key from NewsAPI.
3. Open `index.html` in your preferred web browser.
4. Use the search bar to search for specific news, or click on the category buttons to filter news by category.

## Code Overview

- HTML (index.html):
  - The structure includes a header with the app title, search bar, and category buttons.
  - News articles are dynamically injected into the `news-container` using JavaScript.

- CSS (style.css):
  - The layout is designed to be responsive with flexbox and grid. It ensures a clean user experience on both mobile and desktop devices.
  - It features hover effects for buttons and news cards.

- JavaScript (script.js):
  - Fetches news using the [NewsAPI](https://newsapi.org/).
  - Displays news articles with images, titles, descriptions, and links to the full articles.
  - Implements search functionality and category-based filtering.

## Preview
Here is a sample of what the News Aggregator app looks like:

!LinkedIn Profile (https://www.linkedin.com/feed/update/urn:li:ugcPost:7244653704568561665/) 

## Technologies Used
- HTML5: For structuring the app layout.
- CSS3: For styling and responsive design.
- JavaScript: For fetching and displaying news articles.
- NewsAPI: To provide real-time news data.

## Future Enhancements
- Add more regions for international news.
- Bookmark favorite articles for easy access.
- Store user preferences in local storage (e.g., default category).
