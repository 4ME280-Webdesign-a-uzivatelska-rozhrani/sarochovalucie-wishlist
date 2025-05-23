fetch('wishlist.md')
  .then(res => {
    if (!res.ok) throw new Error(`Chyba při načítání MD: ${res.status}`);
    return res.text();
  })
  .then(text => {
    const html = marked.parse(text);
    document.getElementById('content').innerHTML = html;
  })
  .catch(err => {
    document.getElementById('content').innerHTML = `<p style="color: red;">Chyba při načítání wishlistu: ${err.message}</p>`;
    console.error(err);
  });
