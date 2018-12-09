/*新建文件夹*/
const create = document.getElementById('create');
//console.log(create);
//写个条件，就是页面没有打钩的时候才能点击！！！！！！！！！！！！！！



create.onclick = function () {

    let arr8 = [];
    for (attr in data) {
        arr8.push(data[attr]);
    }
    let xxxx = arr8.every((e) => {
        return e.checked == false
    })
    if (xxxx) {
        fEmpty.style.display = 'none';
        let v = "";//默认的新建文件夹编号

        //这里开始添加数据
        let newId = Date.now();//不重复的 id  也就是新建的文件夹的 id
        let newPid = data[fileItem[0].getAttribute("data-id")].pid//当前页面的pid，也就是新建的文件夹的 pid
        let name = "新建文件夹"  // 新建的文件夹的 title   （这里还要考虑 名字重复的情况，回头再写）
        data[newId] = {
            "id": newId,
            "pid": newPid,
            "title": name,
            "type": "file",
            "checked": true
        }

        //RepeatedNaming(newPid, 0);

        let div = document.createElement("div");
        div.className = "file-item";
        div.setAttribute("data-id", newId);

        let img = new Image();
        img.src = "img/folder-b.png";

        let span = document.createElement("span");
        span.className = "folder-name"
        span.innerHTML = name
        span.display = "none"

        let input = document.createElement("input");
        input.type = "text";
        input.className = "editor";

        let i = document.createElement("i");
        i.className = "checked"



        div.appendChild(img);
        div.appendChild(span);
        div.appendChild(input);
        div.appendChild(i);
        folders.appendChild(div);



        console.log(data)
        render[newPid];
        treeMenu.appendChild(renderTree(-1, -1));



        span.style.display = "none";
        input.style.display = "block";
        v = input.value = span.innerHTML;
        input.select();

        //改名字的时候有问题
        let onOff = false;
        input.oninput = function () {
            v = input.value;
        }

        input.onblur = function () {
            let seleEleArr = [data[newId]]
            seleEleArr[0].title = v
            getTrue()
            RepeatedNaming(newPid, 0, v,seleEleArr);
        }
    } else {
        alert("请先取消勾选")
    }
};

//没完成，，觉得要先写重命名






