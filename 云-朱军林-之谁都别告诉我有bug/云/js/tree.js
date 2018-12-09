const treeMenu = document.getElementsByClassName("tree-menu")[0];
let {getChildren,children} = myTools;

function renderTree(pid,num) {
    treeMenu.innerHTML = "";
    let arr = getChild(pid);
    let ul = document.createElement("ul");
    num++;
    ul.style.paddingLeft = num*5 + "px";
    arr && arr.forEach(e=>{
        let ary = getChild(e.id);//子集下面的子集
        let li = document.createElement("li");
        li.onclick = function (ev) {
            render(e.id);
            renderMenu(e.id);
            ev.cancelBubble = true;
        };
        let div = document.createElement("div");
        div.className = `tree-title${ary?" tree-ico":""} close`;
        let span = document.createElement("span");
        span.className = `${ary?"open":""}`;
        span.innerHTML = "<i></i>" + e.title;
        span.onclick = function () {
            let ul = this.parentNode.nextElementSibling;//当前元素的父亲节点的下一个弟弟元素节点
            if(ul){
                if(ary && !span.classList.toggle("open")){
                    ul.style.display = "none";
                }else{
                    ul.style.display = "block";
                }
            }
        };
        div.appendChild(span);
        li.appendChild(div);
        if(ary){
            li.appendChild(renderTree(e.id,num));
        }
        ul.appendChild(li);
    });
    return ul;
}
treeMenu.appendChild(renderTree(-1,-1));