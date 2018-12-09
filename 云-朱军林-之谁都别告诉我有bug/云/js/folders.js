/*文件夹*/
/*获取元素*/
const folderContent = section.getElementsByClassName("folder-content")[0];
const folders = folderContent.getElementsByClassName("folders")[0];
const breadmenu = folderContent.getElementsByClassName("breadmenu")[0];
const checkedAll = document.getElementById("checkedAll");
const folderBox = document.getElementsByClassName('folder-content')[0];
const fEmpty = folderBox.getElementsByClassName('f-empty')[0];
const {getChild,getParent,getParents,duang,targetP} = myTools;
let onOff = true;

function render(id) {
    folders.innerHTML = "";
    let arr = getChild(id);
    let arr2 = [];
    if (!arr) {//当arr=null时，说明是最后一级了，就让fEmpty.style.display = "block"，否则。。。。
        fEmpty.style.display = "block";
    } else {
        fEmpty.style.display = "none";
        //生成元素
        arr.forEach((e,k,all) => {
            let div = document.createElement("div");
            //div.dataset.id = e.id;//设置行间自定义属性
            div.setAttribute("data-id",e.id);//都可以用，获取的时候用getAttribute
            div.className = e.checked?"file-item active":"file-item";

            //let img = document.createElement("img");
            let img = new Image();//???????什么意思？
            img.src = "img/folder-b.png";
            img.alt = "";
            img.ondblclick = function () {
                render(e.id);
                renderMenu(e.id);

//清除这些元素选中的样式
                arr.forEach(e=>e.checked=false)
            };

            let span = document.createElement("span");
            span.className = "folder-name";
            span.innerHTML = e.title;

            let input = document.createElement("input");
            input.type = "text";
            input.className = "editor";

            let i = document.createElement("i");
            i.className = e.checked?"checked":"";
            i.onclick = function () {
                data[e.id].checked = !data[e.id].checked;
                render(id);
                getTrue();//存数据
                arr2.length = 0
            };
            //插入元素
            div.appendChild(img);
            div.appendChild(span);
            div.appendChild(input);
            div.appendChild(i);
            folders.appendChild(div);

/*******每一个都选中，checkedAll 全选出就打钩********/
            arr2.push(arr[k].checked );
            //console.log(arr2);
            let a = arr2.every(e=>e===true);
            if(arr2.length ===all.length && a ){
                checkedAll.classList = "checked";
                onOff = false
            }else {
                checkedAll.classList = "";
                onOff = true
            }
        })
    }
}
render(0);

/*****************checkedAll点击，全选，再点击取消*************/
function allClick(id) {
    let arr2 = getChild(id);
    let arr3 = [];
    arr2.forEach((ele, i, all) => {
        data[ele.id].checked = !onOff;
        checkedAll.onclick = function () {
            if(checkedAll.classList == "checked"){
                checkedAll.classList = "";
                onOff = true
            }else{
                checkedAll.classList ="checked";
                onOff = false
            }
            allClick(id);
            render(id);
        };
    });
}
allClick(0);