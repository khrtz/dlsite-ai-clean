function removeFilteredElements() {
    const filteredElements = document.querySelectorAll("*[class*='_filter']");
    for (let i = 0; i < filteredElements.length; i++) {
      const parentTR = filteredElements[i].closest("tr");
      const parentLI = filteredElements[i].closest("li");
      if (parentTR) {
        // Category Ranking
        parentTR.remove();
      } else if (parentLI) {
        // All Ranking
        parentLI.remove();
      }
    }
  }
  
  window.addEventListener("load", removeFilteredElements);
  const observer = new MutationObserver(removeFilteredElements);
  observer.observe(document, { childList: true, subtree: true });
  