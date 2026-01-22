const footerHtml = `
  <footer>
    <p>&copy; 2021-2026   Quotation with attribution is permitted.</p>
  </footer>
`;


// bodyの最後（または特定の場所）に挿入する
document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML('beforeend', footerHtml);
});
