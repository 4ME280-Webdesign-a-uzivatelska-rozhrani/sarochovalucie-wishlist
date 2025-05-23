const markdownUrl = 'https://cdn.jsdelivr.net/gh/4me280-webdesign-a-uzivatelska-rozhrani/sarochovalucie-wishlist@main/wishlist.md';

fetch(markdownUrl)
  .then(response => {
    if (!response.ok) throw new Error('Chyba při načítání wishlistu');
    return response.text();
  })
  .then(markdown => {
    document.getElementById('markdown-content').innerHTML = marked.parse(markdown);
  })
  .catch(error => {
    document.getElementById('markdown-content').textContent = 'Chyba při načítání wishlistu.';
    console.error(error);
  });
