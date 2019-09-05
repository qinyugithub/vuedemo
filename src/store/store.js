import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store=new Vuex.Store({
    state:{
        products:[
            {name:"apple",price:1000},
            {name:"banbana",price:800},
            {name:"pear",price:500},
            {name:"orange",price:300}
        ]
    },
    getters:{
        saleProducts:(state)=>{
            var saleProducts=state.products.map(product=>{
                return{
                    name:"**"+product.name+"**",
                    price:product.price/2
                };
            });
            return saleProducts;
        }
    },
    mutations:{
        reducePrice:(state,value)=>{
            value=value?value:1;
            state.products.forEach(product=>{
                product.price-=value;
            })
        }
    },
    actions:{
        reducePrice2:(contex,value)=>{
            setTimeout(function(){
                contex.commit("reducePrice",value)
            },2000);
        }
    }

});