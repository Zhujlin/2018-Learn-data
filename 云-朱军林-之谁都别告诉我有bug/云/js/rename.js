const rename = document.getElementById("rename");
let name = null;//存放改之前的勾选的问价夹的  名字
let v = null;//存放 input 中输入的  名字
let arr6 = [];//data的所有数据
let ary6 = [];//当前页面的数据

rename.onclick = function () {
    let ele = null;
    let span = null;
    let input = null;

    //console.log(seleEleArr);//打钩的那个文件夹的数据
    if (seleEleArr.length === 1) {

        name = data[seleEleArr[0].id].title//存放打钩的，改名之前的名字，为重复命名时用！！！

        let eles = folders.getElementsByClassName('file-item');
        //把ele转成数组，循环数据拿到对应id的 [i],再获取选中的那个文件夹
        Array.from(eles).forEach((e, i) => {
            //console.log(e.dataset.id,seleEleArr[0].id+"")
            if (e.dataset.id === seleEleArr[0].id + "") {
                ele = eles[i];
                //console.log(ele.children[1])
                span = ele.children[1];

                input = ele.children[2];
                //console.log(span.innerHTML)
                v = input.value = span.innerHTML;
                span.style.display = "none";
                input.style.display = "block";
                input.select();
            }
        });
        input.oninput = function () {
            v = input.value;
            //console.log(input.value,v,span.innerHTML)
        };
        input.onblur = function () {
            //span.innerHTML = v;
            //if(data[seleEleArr[0].id+""])


            data[seleEleArr[0].id + ""].title = v;
            //console.log(v)
            RepeatedNaming(seleEleArr[0].pid, 0,v,seleEleArr)


            //console.log(span.innerHTML)//没出效果，试试改数据，在render一下
        }

    } else {
        alert("请选择一个文件夹")
    }
}

//出效果了，下面，考虑名字重复的情况
/*写个 名字重复就加-副本（n） 的方法，来回调用。 
console.log(seleEleArr);//打钩的那个文件夹的数据
n 都穿 0
1.需要传入 当前页面的pid 
2.通过pid 找到当前页面的所有id.title  循环一下，判断有没有重复的名字，如果重复了，就加上 -副本（1）
3.有一个问题？ 
 */

function RepeatedNaming(pid, n,v,seleEleArr) {
    arr6 = [];//data的所有数据
    ary7 = [];//当前页面的数据
    //console.log(v,seleEleArr)
    if (seleEleArr) {//有选中
        //getChildren(seleEleArr[0].pid);
        for (attr in data) {
            arr6.push(data[attr]);
        }

        arr6.filter(e => {//过滤，拿到当前页面的数据 ary7
            if (e.pid === seleEleArr[0].pid) {
                //过滤掉自己，，如果不行，试试不要直接改数据，拿输入的内容去对比，成功后在改数据。（结论：过滤掉自己就可以了）
                if(e.id !== seleEleArr[0].id){
                    ary7.push(e)
                }
            }
        })
        //console.log(ary7)
        
        
        ary7.forEach(e => {
            //console.log(seleEleArr[0].title)
            //console.log(name)
            if (seleEleArr[0].title !== name) {
                //这里相当于有改名字，
                if (seleEleArr[0].title === e.title) {
                    //debugger
                    //这里说明有重复的名字，（e.title是除了选中的文件夹，当前页面的其它文件夹的名字）
                    //seleEleArr[0].title是选中的文件的名字
                    seleEleArr[0].title = v + `-副本(${n})`;
                    //v是 input 中输入的  名字
                    
                    //让选中的文件夹的名字加上 -副本（n），再循环一遍，再看看有没有重名的，有重名的就递归，让n++
                    RepeatedNaming(pid, ++n,v,seleEleArr);//用debugger测试一下，返现要 ++n ，n的值才会变。
                }else{
                    render[seleEleArr[0].pid + ""];
                    treeMenu.appendChild(renderTree(-1, -1));
                }
            }
        })
    }
    return seleEleArr[0].title
}











