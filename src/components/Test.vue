<template>
  <div class="hello">
    <h1>从store中获取值</h1>
      <ul>
        <li v-for="(item,index) in products" :key="index">
          {{item.name}}----{{item.price}}
        </li>
      </ul>
    <h1>从getter中获取值</h1>
    <ul>
      <li v-for="(item,index) in saleProducts" :key="index">
        {{item.name}}----{{item.price}}
      </li>
    </ul>
    <button v-on:click="changdata">直接改变值</button>
    <button v-on:click="reducePrice2(4)">利用action异步改变值</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {
  name: 'HelloWorld',
  computed:{
    products(){
      return this.$store.state.products;
    },
    // saleProducts(){
    //   return this.$store.getters.saleProducts;
    // }
    ...mapGetters([
      "saleProducts"
    ])
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    changdata:function(){
      //严格模式报错
      // this.$store.state.products.forEach(product=>{
      //   product.price-=1;
      // })
      this.$store.commit('reducePrice');
    },
    // changdata2:function(amount){
    //   this.$store.dispatch("reducePrice2",amount);
    // }
    ...mapActions([
      "reducePrice2"
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
