var paragraphs = document.getElementsByTagName("p");

function getRandomSentenceIndex(splitParagraph) {
  return Math.floor(Math.random() * splitParagraph.length);
}

function insertSentence(splitParagraph, index) {
  if (index === 0 ) {
    splitParagraph[index] = getRandomQuote();
  } else if (index === splitParagraph.length - 1) {
    splitParagraph[index] = " " + getRandomQuote() + ".";
  } else {
    splitParagraph[index] = " " + getRandomQuote();
  }
  return splitParagraph.join('.');
}

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

for (var i = 0; i < paragraphs.length; i++) {
  var splitParagraph = paragraphs[i].innerHTML.split('.');
  paragraphs[i].innerHTML = insertSentence(splitParagraph, getRandomSentenceIndex(splitParagraph));
};
