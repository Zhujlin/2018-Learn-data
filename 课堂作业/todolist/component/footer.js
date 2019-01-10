Vue.component('myfooter', {
    template: `
        <ul class="filters">
            <li v-for="(val,key) in btns">
                <a
                    @click = 'rd(arr,val.id)'
                    :class="{selected:num==val.id}"
                >{{val.name}}</a>
            </li>
        </ul>
    `,
    //:class="{selected:}"
    props:['n'],
    data(){
        return{
            arr:JSON.parse(JSON.stringify(this.n)),
            num:1,
            ary:null,//赋值后传给父级的数据
            btns:[
                {
                    id:1,
                    name:'全部'
                },
                {
                    id:2,
                    name:'未选中'
                },
                {
                    id:3,
                    name:'已选中'
                },
            ]
        }
    },
    methods: { 
        rd(arr,id){
            arr = JSON.parse(JSON.stringify(this.n)),//点击的时候没有拿到最新的数据，所以重新赋值一下数据
            this.num = id;//控制元素的style样式
            this.ary = null;
            this.ary = id;
            // arr.forEach(e=>{
            //     switch(id){
            //         case 1:
            //             //console.log('全选')
            //             // e.onOff=true;
            //             // this.ary.push(e)
            //             this.ary = 1
            //         break;
            //         case 2:
            //             //console.log('未选中',e.checked)
            //             // e.onOff=false;
            //             // if(e.checked==false){
            //             //     e.onOff=true;
            //             // };
            //             // this.ary.push(e)
            //             this.ary = 2
            //         break;
            //         case 3:
            //             //console.log('已选中')
            //             // e.onOff=false;
            //             // if(e.checked==true){
            //             //     e.onOff=true
            //             // };
            //             // this.ary.push(e)
            //             this.ary = 3
            //         break;
            //         default:
            //             // e.onOff=true;
            //             // this.ary.push(e)
            //             this.ary = 1
            //         break;
            //     }
            // })
            //console.log(this.ary);
            this.$emit('givefather',this.ary)
        },
        
    },
    computed:{
        
    }
})