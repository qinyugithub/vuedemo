<template>
  <div class="hello">
   <p>this id helloworld page</p>
   <div>
     <children v-bind:thisisdata="data" v-on:changeevent="dosomething($event)"></children>
     {{childrendata}}
   </div>
   <input type="text" v-model="userinput">
   <ul>
     <li v-for="(item,index) in filterBy(listdata,userinput)" :key="index">
      <p> {{item.id}}</p>
      <article>{{item.title}}</article>
     </li>
   </ul>
  </div>
</template>

<script>
import Child from './HwChildren'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data:"qinyu",
      childrendata:"",
      listdata:[],
      userinput:""
    }
  },
  components:{
    "children":Child
  },
  methods:{
    dosomething:function(data){
      console.log("事件一执行");
      this.childrendata=data;
    },
    getdata:function(){
      this.$axios.get("https://jsonplaceholder.typicode.com/posts").then(data=>{
        this.listdata=data.data;
      })
    },
    filterBy:function(datalist,value){
      return datalist.filter(function(item){
        return item.title.match(value);
      })
    }
  },
  created:function(){
    this.getdata();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
