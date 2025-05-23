document.addEventListener("DOMContentLoaded", function () {
  fetch("wishlist.md")
    .then(response => response.text())
    .then(markdown => {
      const lines = markdown.split("\n");
      const processedLines = [];

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        // Pokud je to obrázková URL, obal ji do ![]()
        if (/\.(jpg|jpeg|png|webp)(\?.*)?$/i.test(line)) {
          processedLines.push(`![](${line})`);
        } else {
          processedLines.push(line);
        }
        // Přidej prázdný řádek mezi bloky
        if (line === "" && i !== lines.length - 1) {
          processedLines.push("");
        }
      }

      const updatedMarkdown = processedLines.join("\n");
      const html = marked.parse(updatedMarkdown);
      document.getElementById("content").innerHTML = html;
    })
    .catch(error => {
      console.error("Chyba při načítání wishlist.md:", error);
      document.getElementById("content").textContent = "Chyba při načítání wishlistu.";
    });
});
