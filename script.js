const wishlistContainer = document.getElementById('wishlist');

const markdownUrl = 'https://cdn.jsdelivr.net/gh/4ME280-Webdesign-a-uzivatelska-rozhrani/sarochovalucie-wishlist/blob/main/wishlist.md';

fetch(markdownUrl)
  .then(response => {
    if (!response.ok) throw new Error('Chyba při načítání wishlistu');
    return response.text();
  })
  .then(markdown => {
    // Převod markdown na HTML pomocí marked.js
    wishlistContainer.innerHTML = marked.parse(markdown);
  })
  .catch(error => {
    wishlistContainer.textContent = error.message;
    console.error(error);
  });
