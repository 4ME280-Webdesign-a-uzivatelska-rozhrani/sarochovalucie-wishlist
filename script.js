document.addEventListener("DOMContentLoaded", function () {
  fetch("wishlist.md")
    .then(response => response.text())
    .then(markdown => {
      // Převod obrázkových URL na Markdown obrázky
      const updatedMarkdown = markdown
        .split("\n")
        .map(line => {
          const isImageURL = /(https?:\/\/.*\.(?:png|jpg|jpeg|webp))/i;
          if (isImageURL.test(line.trim())) {
            return `![](${line.trim()})`;
          }
          return line;
        })
        .join("\n");

      // Převod Markdownu na HTML a vložení na stránku
      const html = marked.parse(updatedMarkdown);
      document.getElementById("content").innerHTML = html;
    })
    .catch(error => {
      console.error("Chyba při načítání wishlist.md:", error);
      document.getElementById("content").textContent = "Chyba při načítání wishlistu.";
    });
});
