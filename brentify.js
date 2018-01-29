function runScript() {
  var script = `var paragraphs = document.getElementsByTagName("p");
  console.log(paragraphs);`

  chrome.tabs.executeScript({
    code: script
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('brentify');
  button.addEventListener('click', function() {
    runScript();
  })
});
