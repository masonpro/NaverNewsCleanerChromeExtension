const targets = [
    "#main_content .end_ad", 
    "#main_content .article_info .article_btns_left",
    "#cbox_module"
]
targets.forEach(node => {
    if (document.querySelector(node)) {
        document.querySelector(node).style.opacity = 0
        document.querySelector(node).style.height = 0
        document.querySelector(node).style.overflow = "hidden"
    }
})