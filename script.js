// ZMĚŇ tento odkaz na tvůj skutečný soubor wishlist.md na GitHubu přes jsDelivr
const mdFileURL = 'https://cdn.jsdelivr.net/gh/YOUR_USERNAME/YOUR_REPO@main/wishlist.md';

fetch(mdFileURL)
  .then(res => res.text())
  .then(data => {
    const lines = data.trim().split('\n');
    let html = '';
    for (let i = 0; i < lines.length; i++) {
      const title = lines[i]?.trim();
      const link = lines[i + 1]?.trim();
      const thirdLine = lines[i + 2]?.trim();
      if (!title || !link || !thirdLine) {
        i += 2; // přeskoč nekompletní položku
        continue;
      }

      let imgTag = '';
      let priceTag = '';

      if (/\.(jpg|jpeg|png|webp)(\?.*)?$/i.test(thirdLine)) {
        imgTag = `<img src="${thirdLine}" alt="${title}">`;
      } else if (/^\d[\d\s]*Kč$/.test(thirdLine)) {
        priceTag = `<div class="price">${thirdLine}</div>`;
      }

      html += `
        <div class="item">
          <div><strong>${title}</strong></div>
          <a href="${link}" target="_blank">${link}</a>
          ${imgTag}
          ${priceTag}
        </div>
      `;
      i += 2;
    }

    document.getElementById('wishlist').innerHTML = html;
  })
  .catch(err => {
    console.error('Chyba při načítání wishlistu:', err);
    document.getElementById('wishlist').textContent = 'Nepodařilo se načíst wishlist.';
  });
