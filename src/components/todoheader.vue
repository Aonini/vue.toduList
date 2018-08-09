<template>
                 <header class="header" >
                      <h1>todos</h1>
                      <input class="new-todo" 
                      placeholder="请输入内容" 
                       @keydown.13="addValue"
                       v-model="value"
                       />
                  </header>
</template>
<script>
export default {
    data(){
      return  {
          value:""
          }
    },
    methods:{
        addValue(){
            this.$emit("add-value",this.value)
            this.value=""
        }
    }
}

</script>