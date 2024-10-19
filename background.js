chrome.runtime.onInstalled.addListener(() => {
    console.log("KSI Song Tab Closer Extension Installed!");
  });
  
  chrome.runtime.onMessage.addListener((message, sender) => {
    if (message.action === "closeTab" && sender.tab.id) {
      chrome.tabs.remove(sender.tab.id);
    }
  });
  