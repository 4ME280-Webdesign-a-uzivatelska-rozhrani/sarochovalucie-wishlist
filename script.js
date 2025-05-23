document.addEventListener("DOMContentLoaded", function () {
  fetch("wishlist.md")
    .then(response => response.text())
    .then(markdown => {
      const lines = markdown.split("\n");
      const processed = lines.map(line => {
        line = line.trim();
        if (/\.(jpg|jpeg|png|webp)(\?.*)?$/i.test(line)) {
          return `![](${line})`;
        }
        return line;
      });
      const html = marked.parse(processed.join("\n"));
      document.getElementById("content").innerHTML = html;
    })
    .catch(error => {
      document.getElementById("content").textContent = "Chyba při načítání wishlistu.";
      console.error(error);
    });
});
