function runScript() {
  var script = `
  var paragraphs = document.getElementsByTagName("p");
  for(var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].innerHTML = "YOU HAVE BEEN BRENTIFIED!";
  }
  `

  chrome.tabs.executeScript({
    code: script
  });
}

chrome.browserAction.onClicked.addListener(function(tab) {
  runScript();
});
