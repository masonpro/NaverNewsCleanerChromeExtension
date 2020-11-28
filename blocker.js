const blockedUrl = [
    "https://news.naver.com/main/read.nhn*"
]

chrome.webRequest.onBeforeRequest.addListener(

    function (info) {
        // return { 
        //     cancel: true 
        // }
    },

    // filters
    {
        urls: blockedUrl
    },

    // extraInfoSpec
    ["blocking"]
)