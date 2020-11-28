const targets = ["#main_content .end_ad", "#cbox_module"]
targets.forEach(node => {
    document.querySelector(node).style.opacity = 0
    document.querySelector(node).style.height = 0
    document.querySelector(node).style.overflow = "hidden"
})