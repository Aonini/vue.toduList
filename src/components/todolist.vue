<template>
  <section class="main">
                      <input class="toggle-all"
                      type="checkbox" 
                      v-model="allchecked"
                      />
                    <ul class="todo-list">
                          <Item 
                            v-for="item in list" 
                            :option="item"
                            @remove-item="removelist" ></Item>
                      </ul>
    </section>
</template>
<script>

import Item from "./todoitem"


export default {
    components:{
        Item
    },
    props:{
       list:{
           type:Array,
           default(){
             return  []
             }
       } 
    },
    
    methods:{
        removelist(id){
            this.$emit("remove-list",id)
        },
        // listchecked(id){

        // }
    },
   computed:{
       allchecked:{
           get(){
               //取值时候  每一项item上都要有checked  
                return this.list.every(item=>item.checked)
                 console.log(this.list)
           },
           set(i){
            //    设置值时候  每一个item都要加上checked
                this.list.forEach(item=>item.checked=i);
                console.log(this.list)
           }
       }
   }
}
</script>