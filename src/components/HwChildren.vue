<template>
  <div class="children">

    从父组件传来的值为{{thisisdata}}
    <button v-on:click="toparent()">向父组件传值</button>
  </div>
</template>

<script>

export default {
  name: 'children',
  props:{
      thisisdata:{
          type:String,
          required:true
      }
  },
  data () {
    return {
      padata:"111"
    }
  },
  methods:{
    toparent:function(){
        //注册一个事件
      this.$emit("changeevent","这里是子组件向父组件传的值");
    //  this.$http.get("/api/posts").then((data)=>{
    //      console.log(data);
    //  })
    //  console.log("请求完成");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
