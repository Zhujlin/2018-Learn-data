/*面包屑*/
const breadNav = breadmenu.getElementsByClassName("bread-nav")[0];
function renderMenu(id) {//传入id，找到所有父级的数据的parentArr
    //<a href="javascript">微云</a>
    // <span>我的音乐</span>
    breadNav.innerHTML = '';
    let arr = getParents(id);
    let arr2 = getChild(id);

    if (arr) {
        arr.forEach((e, i, all) => {
            //all.length是固定的，i会变，i=all.length,就是最后一个数据进入span，其它的是a
            if (i != all.length - 1) {
                let a = document.createElement("a");
                a.href = "javascript:;";//不加：；的话就会跳转页面，让后就404了。
                a.innerHTML = e.title;
                a.onclick = function () {
                    arr2 && arr2.forEach(ele => ele.checked = false);
                    render(e.id);
                    renderMenu(e.id);
                };
                breadNav.appendChild(a);
            } else {
                let span = document.createElement("span");
                span.innerHTML = e.title;//要拿到arr数据，此时要写方法了

                breadNav.appendChild(span)
            }
        });
    }
}
renderMenu(0);

