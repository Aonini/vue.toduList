<template>
<div>

    <li :class='{completed:option.checked,}'>
        <div class="view">
                <input
                 class="toggle" 
                type="checkbox"
                v-model="option.checked"
                 />
                <label>{{option.title}}</label>
                <button 
                class="destroy" 
                 @click="removeitem"
                    ></button>
        </div>
        <input class="edit" />
    </li>
</div>
</template>
<script>
export default {
    data(){
        return{
            checked:false,
            cid:""
            
        }
    },
   props:{
       option:{
           type:Object,
           required: true
       }
   },
   methods:{
       removeitem(){
           this.$emit("remove-item",this.option.id)
       }, 
       db(id){
          this.cid=id
       }
   }
}


</script>