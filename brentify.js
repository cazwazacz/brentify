function runScript() {
  chrome.tabs.executeScript({ null, { file: 'script.js' } });
}

chrome.browserAction.onClicked.addListener(function() {
  runScript();
});
