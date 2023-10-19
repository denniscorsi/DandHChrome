    lookUpWord = function(word){
        let query = word.selectionText;
        chrome.tabs.create({url: "https://www.merriam-webster.com/dictionary/" + query});
    };
    
    chrome.contextMenus.create({
        id: "test",
        title: 'Define this word',
        contexts: ['all']
    });
    
    chrome.contextMenus.onClicked.addListener((info, tab) => {
      if(info.menuItemId === 'test'){
        chrome.storage.sync.set({ "selectedWord": info.selectionText }, () => {});
        chrome.runtime.openOptionsPage();
      }
    })

   


    //make icon 16x16

    //info, tab