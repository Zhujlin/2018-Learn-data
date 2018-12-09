/*移动到*/
const remove = document.getElementById("remove");
const modelTree = box.getElementsByClassName("modal-tree")[0];
const ok = modelTree.getElementsByClassName("ok")[0];//确定
const cancel = modelTree.getElementsByClassName("cancel")[0];//取消
const content = modelTree.getElementsByClassName("content")[0];//内容
const iconClose = modelTree.getElementsByClassName("icon_close")[0];
let kid = 0;//拿到  点击的那个元素的id

/*需要拿到所有选中的数据，循环数据，把所有checked: true的数据push到seleEleArr里，*/

function getTrue() {//拿到是true的数据
    seleEleArr.length = 0;//seleEleArr放在层级最高的data里，这里清空一下
    getChildren(-1);
    children.forEach((e, i) => {
        //console.log(children);//点了两下children翻倍了，要清一下children
        if (e.checked === true) {
            seleEleArr.push(e)//为什么push4次？？
        }
    });
    children.length = 0;
    //console.log(seleEleArr);
    return seleEleArr
}


/*移动到的点击效果*/
remove.onclick = function () {
    if (seleEleArr.length !== 1) {
        alert('请选择一个想移动的文件');
    } else {
        modelTree.style.display = 'block';
        content.appendChild(renderTree2(-1, -1));

        iconClose.onclick = function () {
            modelTree.style.display = 'none'
        };

        cancel.onclick = function () {
            modelTree.style.display = 'none'
        };

        ok.onclick = function () {
            //console.log(kid);//点击的那个元素的id
            //console.log(seleEleArr);//我选择中的文件的数据
            seleEleArr.forEach(e => {
                children.push(e);
                getChildren(e.id);
            });
            //console.log(children);//我选中的文件和它的所有子集
            if (!children.some(e => e.id == kid)) {//说明没有非法操作
                /*让移动的文件的pid = kid*/
                seleEleArr.forEach(i => {
                    data[i.id].pid = kid;
                    // console.log(i.id);
                    // console.log(data[i.id].pid);
                    // console.log(data);
                    render(kid);
                    treeMenu.appendChild(renderTree(-1,-1));
                    renderMenu(kid);
                    modelTree.style.display = 'none'

                    //判断是否重名
                   
                    //console.log(seleEleArr)
                    getTrue()
                    v = seleEleArr[0].title
                    seleEleArr = [data[i.id]]
                    //console.log(seleEleArr,kid,v)
                    RepeatedNaming(kid, 0,v,seleEleArr);
                });
            }else{
                alert("请选择正确的文件夹")
            }
        }
    }
};

/***************************************************************************************** */
function renderTree2(pid, num) {
    content.innerHTML = "";
    let arr = getChild(pid);
    //console.log(arr);
    let ul = document.createElement("ul");
    num++;
    ul.style.paddingLeft = num * 5 + "px";
    arr && arr.forEach(e => {
        let ary = getChild(e.id);
        let li = document.createElement("li");
        /*点击变色*/
        li.onclick = function (ev) {
            let lis = content.getElementsByTagName("li");
            for (let i = 0; i < lis.length; i++) {
                lis[i].children[0].style.background = '';
            }
            this.children[0].style.background = "#999";

            //console.log(e.id);//点击的那个元素的id
            kid = e.id;
            ev.cancelBubble = true;
        };
        let div = document.createElement("div");
        div.className = `tree-title${ary ? " tree-ico" : ""} close`;
        let span = document.createElement("span");
        span.className = `${ary ? "open" : ""}`;
        span.innerHTML = "<i></i>" + e.title;
        div.appendChild(span);
        li.appendChild(div);
        if (ary) {
            li.appendChild(renderTree2(e.id, num));
        }
        ul.appendChild(li);
    });
    return ul;
}





















