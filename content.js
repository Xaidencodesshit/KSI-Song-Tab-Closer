// Check if 'watch' is in the current tab's URL and 'Thick Of It' is found in the page
function detectSongAndCloseTab() {
    const keywords = ["Thick Of It"]; // The song name to search for
  
    // Check if 'watch' is in the URL
    if (window.location.href.includes('watch')) {
      const title = document.title.toLowerCase();
      const metaTags = Array.from(document.getElementsByTagName('meta'));
  
      // Check page title and meta description for the song name
      const found = keywords.some(keyword =>
        title.includes(keyword.toLowerCase()) ||
        metaTags.some(tag => (tag.content || "").toLowerCase().includes(keyword.toLowerCase()))
      );
  
      // If the song is found, send a message to close the tab
      if (found) {
        chrome.runtime.sendMessage({ action: "closeTab" });
      }
    }
  }
  
  // Run detection after the page loads
  window.addEventListener('load', detectSongAndCloseTab);
  