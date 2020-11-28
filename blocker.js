const blockedUrl = [
    "https://apis.naver.com/commentBox/*"
]

chrome.webRequest.onBeforeRequest.addListener(
    function (info) {
        // alert("차단되었습니다.")
        return { 
            cancel: true 
        }
    },
    {
        urls: blockedUrl
    },
    [ "blocking" ]
)