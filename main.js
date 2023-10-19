// const names = document.createElement("h1");
// names.style.position = "absolute";
// names.innerText = "Dennis & Hudson";
// document.querySelector('body').appendChild(names);

// const links = document.querySelectorAll("a");
// links.forEach((l) => {
//   l.innerText = "Hudson & Dennis";
// });



getWordData("planet");

function getWordData(word){
  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
  fetch(url)
    .then((response) => response.json())
    .then((wordData) => parseWordData(wordData));
}

function parseWordData(wordData){
  console.log(wordData);
}

///load words list
let wordsList = [];
chrome.storage.sync.get(["wordsList"], function(results){
  wordsList = results["wordsList"];
  console.log("loaded words");
  console.log(wordsList);
});

function storeWord(word, definition){
  wordsList.push(word);
  chrome.storage.sync.set({"wordsList" : wordsList}, () => {});
  const wordObj = {};
  wordObj[word] = definition;
  chrome.storage.sync.set(wordObj, () => {});
}

function getWord(key="word2"){
  chrome.storage.sync.get([key], function(results){
      console.log(results);
  });
}

storeWord("dog", "cute creature");
storeWord("cat", "even cute creature");


function sayHi(){
  console.log("HI");
}


// lookUpWord = function(word){
//     let query = word.selectionText;
//     chrome.tabs.create({url: "https://www.merriam-webster.com/dictionary/" + query});
// };

// chrome.contextMenus.create({
//     title: 'Define this word',
//     contexts: ['selection'],
//     onclick: lookUpWord
// });
