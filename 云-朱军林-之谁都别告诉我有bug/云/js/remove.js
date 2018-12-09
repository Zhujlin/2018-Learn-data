/*删除*/
const del = document.getElementById("del");
const tanbox = document.getElementById('tanbox');
const aa = tanbox.getElementsByTagName('a');
const closeIco = tanbox.getElementsByClassName('close-ico')[0];

del.onclick = function () {
    //console.log(seleEleArr);//打钩的那个文件夹的数据
    if(seleEleArr.length){//如果有打钩的
        tanbox.style.display = "block";
        aa[0].onclick = function () {
            seleEleArr.forEach(e=>{
                //console.log(data[e.id]);
                //console.log(e);
                delete data[e.id];
                //console.log(data);
                getChildren(e.id);
                // console.log(children);
                if(children.length){//如果有children
                    children.forEach(i=>{
                        //console.log(data[i.id]);
                        delete data[i.id];
                        //console.log(data);
                    })
                }

            });
            //console.log(seleEleArr);
            seleEleArr.forEach(e=>{
                render(e.pid);
                treeMenu.appendChild(renderTree(-1,-1));
                renderMenu(e.pid);
            });

            tanbox.style.display = "none";
        }
    }else{
        alert("请选择要删除的文件夹")
    }
    aa[1].onclick = function () {
        tanbox.style.display = "none";
    };
    closeIco.onclick = function () {
        tanbox.style.display = "none";
    }


};