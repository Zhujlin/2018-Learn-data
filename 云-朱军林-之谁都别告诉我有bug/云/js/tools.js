/****我的工具，专门写处理数据的方法****/
let myTools = (function () {
    let children = [];
    //1.通过父级的id获取子集：用的时候调用getChild(id)，传入id，找到data中所有pid = id的数据
    function getChild(pid) {
        //if (!data[id])return null;//如果传入的是-1，data没有-1这个属性，此时返回null
        let arr = [];//把所有匹配到的对象push到数组里，往后forEach就能得到每一个数据
        let onOff = false;//进arr了就变成true，返回数组，没进去就返回null（没有pid和传进来的id一样）
        for (let attr in data) {
            if (data[attr].pid === pid) {
                arr.push(data[attr]);
                onOff = true
            }
        }
        if (onOff) {
            return arr;
        } else {
            return null;
        }
    }

    function getChildren(pid) {//拿到所有子孙级
        let arr = getChild(pid);
        arr && arr.forEach(e=>{
            children.push(e);
            getChildren(e.id);
        })
    }

    function getParent(id) {//通过子集的id找对应父级的id，
        /*
         1.当没有对应的id是，或者当前的id是-1，说明没有数据了，返回null
         如果，传子集的id=2，data[2].pid=父级的id是0，0找到微云
        */
        if(!data[id] || data[id].pid === -1 )return null;
        return data[data[id].pid];
    }

    function getParents(id) {//通过子集的id找到对应所有祖先级的id
        let parentArr = [];
        let nowId = data[id];//当前的数据
        while (nowId){
            parentArr.unshift(nowId);
            nowId = getParent(nowId.id)
        }
        return parentArr;
    }

    function duang(obj1,obj2) {//碰撞的方法
        let l1 = obj1.offsetLeft;
        let t1 = obj1.offsetTop;
        let r1 = l1 + obj1.clientWidth;
        let b1 = t1+ obj1.offsetHeight;

        let l2 = obj2.getBoundingClientRect().left;
        let t2 = obj2.getBoundingClientRect().top;
        let r2 = l2 + obj2.clientWidth;
        let b2 = t2+ obj2.offsetHeight;


        if(r1<l2 || b1 < t2 || l1 > r2 || t1 > b2){
            return false;//说明没碰到
        }else{
            return true;//说明碰到了
        }
    }

    function targetP(ele,cName){//元素包含某一个名字，（还没用到）
        if(ele.classList.contains(cName)){
            return true;
        }
        return ele.parentNode.classList.contains(cName);
    }

    function addAttr(attr,value){//改名字的时候用,(还没用到）
        for(let k in data){
            if(Array.isArray(value)){
                data[k][attr] = [];
            }else{
                data[k][attr] = value;
            }
        }
    }
    return {
        getChild,
        getParent,
        getParents,
        duang,
        getChildren,
        children,
        targetP,
        addAttr
    }
})();