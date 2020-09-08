let navWidgets = document.querySelectorAll(".nav-item");
let navHov = document.querySelectorAll(".hovered-nav");
let navItemHovered = 0
for(widget of navWidgets){
    let hoverCover = navHov[navItemHovered]
    widget.onmouseenter = function(){
        hoverCover.style.height = "100%"
    }
    widget.onmouseleave = function(){
        hoverCover.style.height = "0%"
    }
    navItemHovered++;
}

// let cardEles = document.querySelectorAll('.card')
// for(cardEle of cardEles){
//     let ele = cardEle
//     ele.onmouseenter = function(){
//         // console.log(typeof(window.getComputedStyle(ele).width))
//         ele.style.outline = "solid grey"
//     }
//     ele.onmouseleave = function(){
//         // console.log(typeof(window.getComputedStyle(ele).width))
//         ele.style.outline = "none"
//     }
// }

// for(cardEle of cardEles){
//     let ele = cardEle
//     ele.onmouseenter = function(){
//         // console.log(typeof(window.getComputedStyle(ele).width))
//         ele.style.width = parseInt(window.getComputedStyle(ele).width) + 30 + "px"
//         ele.style.height = parseInt(window.getComputedStyle(ele).height) + 30 + "px"
//     }
//     ele.onmouseleave = function(){
//         // console.log(typeof(window.getComputedStyle(ele).width))
//         ele.style.width = parseInt(window.getComputedStyle(ele).width) - 30 + "px"
//         ele.style.height = parseInt(window.getComputedStyle(ele).height) - 30 + "px"
//     }
// }
