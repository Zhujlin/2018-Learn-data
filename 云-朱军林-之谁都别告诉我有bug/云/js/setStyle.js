
/*计算下样式*/
const head = document.getElementById("head");
const section = document.getElementById("section");
let wh = window.innerHeight;
let headH = head.offsetHeight;
section.style.height = wh - headH + "px";//上来就给个高度
//当页面缩放时动态计算 section 的高度
window.onresize = function () {
    wh = window.innerHeight;
    section.style.height = wh - headH + "px"
};