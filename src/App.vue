<template>
      <section class="todoapp">
              <div>
                <Heads @add-value="addParent"></Heads>
                <List 
                 v-show="list.length"
                :list="filterList"
                @remove-list="removelistparent"
                ></List>
                <Footers
                 v-show="list.length"
                 :nocheckedlength="nocheckedlength"
                 :hash="hash"
                ></Footers>
              </div>
          </section>
</template>

<script>
// 初始数据就是localStorage里面的数据吧
let list = JSON.parse(localStorage.getItem('miaov-06-02')) || [];
import Heads from "./components/todoheader"
import List from "./components/todolist"
import Footers from "./components/todofooter"

export default {
  name: 'App',
  data(){
     return{
            list,
             hash:"all"

     } 
  },
    components: {
      Heads,
      List,
      Footers
  },
  methods:{
    addParent(value){
      if(value!=""){
        this.list.push({
                title:value, 
               	id: Date.now(),
                checked:false
      })
      }
      
    },
    removelistparent(id){

     let index =this.list.findIndex(item=>item.id===id)
     if(index!==-1){
       this.list.splice(index,1)
     }

    },
    gethash(){
      let hash=window.location.hash
      let hashvalue="all"
      if(hash){
        hashvalue=hash.slice(2)
      }
      this.hash=hashvalue
    }
  },
  mounted(){
    // 生命周期函数   等这个组件挂载完了之后执行的  执行上面更改hash的函数
    this.gethash()
    //    window 监控一个hashchange事件  hash改变的时候触发  每次触发都会执行一下上边的函数
    window.addEventListener("hashchange", this.gethash)
  },
    watch:{
    list:{
      handler(){
        localStorage.setItem('miaov-06-02',JSON.stringify(this.list))
      },
      deep:true
    }
  },
  computed:{
    filterList(){
      if(this.hash === 'all') {
        return this.list;
      }else if(this.hash === 'active'){
         return this.list.filter(item => !item.checked);
      }else if(this.hash === "completed"){
        return this.list.filter(item=>item.checked)

      }
    },
    // 这里面记录是几条选中没选中的长度
    nocheckedlength(){
       return this.list.filter(item => !item.checked).length;
    }
  }
}
</script>