/* =========================================================================
   Homepage script: turns the CALCULATORS registry into clickable cards.
   You normally never need to edit this file.
   ========================================================================= */
(function () {
  var list = window.CALCULATORS || [];
  var grid = document.getElementById("grid");
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = "<p>No calculators yet. Add one in calculators/calculators.js</p>";
    return;
  }

  list.forEach(function (c) {
    var a = document.createElement("a");
    a.className = "card";
    a.href = c.url;
    a.innerHTML =
      '<div class="icon">' + (c.icon || "🧮") + "</div>" +
      "<h2>" + escapeHtml(c.title) + "</h2>" +
      "<p>" + escapeHtml(c.desc || "") + "</p>";
    grid.appendChild(a);
  });

  // Small helper so titles/descriptions can't break the page.
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
})();
