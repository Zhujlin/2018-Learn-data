/*
 kuang ， 选中
 */
const fileItem = folders.getElementsByClassName("file-item");
const kuang = document.getElementById("kuang");

folders.onmousedown = function (ev) {
    let arr4 = [];
    let arr5 = [];
    let index = null;
    let fIId = fileItem[0].getAttribute("data-id") * 1;//存着当前页面第一个文件夹的id
    let disX = ev.pageX;
    let disY = ev.pageY;
    arr4.length = 0;
    arr5.length = 0;
    arr4.push(getChild(getParent(fIId).id));//找到当前页面所有文件夹的id
    if (targetP(ev.target, 'file-item'))return;//点到文件夹就不出现框
    /*点击空白处，把数据改成false，render一下，就清空选中了*/
    for (let i = 0; i < fileItem.length; i++) {
        index = fileItem[i].getAttribute("data-id") * 1;
        data[index].checked = false;
    }
    render(getParent(fIId).id);//通过渲染页面清除其它层级的选中样式。
    document.onmousemove = function (ev) {
        let l = Math.min(disX, ev.pageX);
        let t = Math.min(disY, ev.pageY);
        kuang.style.display = "block";
        kuang.style.width = Math.abs(ev.pageX - disX) + "px";
        kuang.style.height = Math.abs(ev.pageY - disY) + "px";
        kuang.style.left = l + "px";
        kuang.style.top = t + "px";
        /*碰撞obj1=kuang  给每个fileItem一个自定义属性data-id*/
        for (let i = 0; i < fileItem.length; i++) {
            index = fileItem[i].getAttribute("data-id") * 1;
            if (duang(kuang, fileItem[i])) {//true就说明选中了
                data[index].checked = true;//改变数据
                getTrue();//取数据
                //console.log(data);
                /*操作DOM，*/
                fileItem[i].classList = "file-item active";
                fileItem[i].lastElementChild.className = "checked";
                arr5.length = 0;
                arr4 && Array.from(...arr4).forEach(e=>{//e是当前页面的每一个数据
                    arr5.push(e.checked);
                });
                let a = arr5.every(e => e === true);
                if (a === true) {//说明全选中
                    checkedAll.classList = "checked";
                } else {
                    checkedAll.classList = "";
                }
            }else{
                data[index].checked = false;
                getTrue();//取数据
                fileItem[i].classList = "file-item";
                fileItem[i].lastElementChild.className = "";
            }
        }
        return false;
    };
    document.onmouseup = function () {
        kuang.style.display = "none";
        kuang.style.height = kuang.style.width = 0;
        kuang.style.left = kuang.style.top = 0;
        document.onmousemove = document.onmouseup = null;
        return false;
    };
    return false;
};


