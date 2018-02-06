var paragraphs = document.getElementsByTagName("p");

function getRandomSentenceIndex(splitParagraph) {
  return Math.floor(Math.random() * splitParagraph.length);
}

function insertSentence(splitParagraph, index) {
  var randomQuote = getRandomQuote();
  if (index === 0 ) {
    splitParagraph[index] = randomQuote;
  } else if (index === splitParagraph.length - 1) {
    splitParagraph[index] = " " + randomQuote + ".";
  } else {
    splitParagraph[index] = " " + randomQuote;
  }
  return splitParagraph.join('.');
}

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

for (var i = 0; i < paragraphs.length; i++) {
  var splitParagraph = paragraphs[i].innerText.split('.');
  paragraphs[i].innerText = insertSentence(splitParagraph, getRandomSentenceIndex(splitParagraph));
};
