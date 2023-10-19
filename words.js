// const header = document.querySelector(".head");
// header.innerText = "D&H";
// document.addEventListener('')
const head =  document.getElementById("head")
//const newHeader = document.createElement("h2");
head.innerText = "D&H";
const textToDisplay = (inputWords => console.log(...inputWords));
textToDisplay(...wordsList);


chrome.storage.sync.get(["selectedWord"], function(results){
  console.log(results['selectedWord']);
});