// Funkce pro načtení souboru wishlist.md přes fetch API
fetch('wishlist.md')
  .then(response => {
    if (!response.ok) throw new Error('Nepodařilo se načíst markdown');
    return response.text();
  })
  .then(mdText => {
    // Převod Markdownu na HTML pomocí marked
    const html = marked.parse(mdText);

    // Vložení výsledného HTML do divu
    document.getElementById('content').innerHTML = html;
  })
  .catch(err => {
    document.getElementById('content').innerText = 'Chyba při načítání wishlistu: ' + err;
  });
