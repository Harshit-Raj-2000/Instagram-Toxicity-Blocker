import * as toxicity from '@tensorflow-models/toxicity';

const threshold = 0.9;
var _model;
const labelsToInclude = ['toxicity'];

toxicity.load(threshold, labelsToInclude).then(model => {
      _model = model
      console.log("model loaded")
});

chrome.browserAction.onClicked.addListener(function(tab) {
    getMessages()
    updated_instagram()
})

function updated_instagram(){
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
      if (/^https:\/\/www\.instagram\.com\/direct/.test(changeInfo.url)){
            getMessages()
          }
    })
}
    
function getMessages(){
    chrome.tabs.insertCSS(null, {file: './style.css'})
    chrome.tabs.executeScript(null, {file: './content.js'}, ()=>{console.log('done')}) 
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
    if (request.message === 'text-classify'){
        text_array = JSON.parse(request.text)
        _model.classify(text_array).then(predictions => {
            sendResponse({ predictions: JSON.stringify(predictions)})
        });
        return true
    }
})

// function check_quality(text_array){
//     _model.classify(text_array).then(predictions => {return predictions});
// }

// async function hello(text){
//     var return_array =  await check_quality(JSON.parse(text))
//     return return_array
// }