document.addEventListener("DOMContentLoaded", () => {
  fetch("wishlist.md")
    .then(res => res.text())
    .then(text => {
      const lines = text.split("\n").map(line => {
        const trimmed = line.trim();
        if (/\.(jpg|jpeg|png|webp)(\?.*)?$/i.test(trimmed)) {
          return `![](${trimmed})`; // obrázek
        }
        return trimmed; // běžný text nebo odkaz
      });
      const html = marked.parse(lines.join("\n"));
      document.getElementById("content").innerHTML = html;
    })
    .catch(err => {
      document.getElementById("content").textContent = "Chyba při načítání wishlistu.";
      console.error("Chyba fetch:", err);
    });
});
