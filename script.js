var paragraphs = document.getElementsByTagName("p");

function getRandomSentenceIndex(splitParagraph) {
  return Math.floor(Math.random() * splitParagraph.length);
}

function insertSentence(splitParagraph, index) {
  index === 0 ? splitParagraph[index] = "YOU HAVE BEEN BRENTIFIED!" : splitParagraph[index] = ". YOU HAVE BEEN BRENTIFIED!";
  return splitParagraph.join('');
}

for (var i = 0; i < paragraphs.length; i++) {
  var splitParagraph = paragraphs[i].innerHTML.split('.');
  paragraphs[i].innerHTML = insertSentence(splitParagraph, getRandomSentenceIndex(splitParagraph));
};
