var quotes = [
  "I suppose I’ve created an atmosphere where I’m a friend first and a boss second. Probably an entertainer third",
  "When people say to me: would you rather be thought of as a funny man or a great boss? My answer’s always the same, to me, they’re not mutually exclusive",
  "If you were to ask me to name three geniuses, I probably wouldn’t say Einstein, Newton, you know. I’d go Milligan, Cleese, Everett…..Sessions",
  "I’m sure Texas couldn’t run and manage a successful paper merchants. I couldn’t do what…actually, I could do what they do, and I think they knew it back then. Probably what spurred them on",
  "A sergeant major spends his time training his men to be killers. He doesn’t polish his own boots. He probably does polish his own boots, but, you know, that doesn’t mean I have to do my own filing",
  "You know, this is a business. I’m not doing this for an ‘Esther Rantzen Heart of Gold’, or if Esther’s handing out awards, then do it for my charity work. Five fun runs in two years",
  "An amateur will stitch up a professional",
  "Some straight women like it the wrong way. It doesn’t matter if you’re gay. One in 10, apparently. That seems a bit high. You might be. If you are, good luck to you. Just make sure it’s legal and be safe",
  "You will never work in a place like this again. It’s brilliant. Fact. And you’ll never have another boss like me, someone who’s basically a chilled-out entertainer",
  "I know an alcoholic and it’s no laughing matter – particularly for his wife. She’s got alopecia, so not a happy home life",
  "People see me and see the suit, but they know I’m rock and roll through and through. You know ‘Live fast, die young’? Not my way. Live fast, sure. Too bloody fast sometimes! But die young? Die old",
  "I actually like my staff to be better than me. That keeps me on my toes. So my motto would be ‘Be careful because there’s always somebody ready to step into your shoes and do your job better than you do it'",
  "I’d push the brother out of the room, bend them all over, do the drummer, the lead singer, and that one who plays violin",
  "If there’s one thing I don’t like, it’s nicknames. Because nicknames are bad names",
  "When I get wasted, I go to munchie city, so I’m mad enough without the gear as well",
  "Who says famine has to be depressing?",
  "I can wake up one morning and go, ‘I don’t feel like working today. Can I stay in bed?’ ‘You’d better ask the boss.’ ‘David, can I stay in bed?’ ‘Yes, David.’ Both me. Not me in bed with another bloke called David",
  "If you want the rainbow, you’ve got to put up with the rain. Do you know which ‘philosopher’ said that? Dolly Parton. And people say she’s just a pair of tits",
  "Can I ask you something? Who does your tampons?",
  "You see all these white middle-class fuddy duddies going, ‘Oh, we’ve got to find the new equivalent’. They’re looking in Oxford and Cambridge. No. Dr Dre, yeah. Ice T. They’re the equivalent of Wordsworth",
  "I don’t think he could have done better if he’d heard what he was playing, in my opinion"
]

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
