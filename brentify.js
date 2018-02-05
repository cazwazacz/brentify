var paragraphs = document.getElementsByTagName("p");

function getRandomSentenceIndex(splitParagraph) {
  return Math.floor(Math.random() * splitParagraph.length);
}

function insertSentence(splitParagraph, index) {
  index === 0 ? splitParagraph[index] = getRandomQuote() : splitParagraph[index] = " " + getRandomQuote();
  return splitParagraph.join('.');
}

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

for (var i = 0; i < paragraphs.length; i++) {
  var splitParagraph = paragraphs[i].innerHTML.split('.');
  paragraphs[i].innerHTML = insertSentence(splitParagraph, getRandomSentenceIndex(splitParagraph));
};
