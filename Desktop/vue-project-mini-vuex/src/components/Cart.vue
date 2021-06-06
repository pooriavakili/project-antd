<template>
  <div class="flex mr-10 mt-10">
<div v-if="cart.length" class="">
No Product In Cart!
</div>
<div v-if="orderPlaced" class="">
Order SuccessFully placed
<button type="button"  @click="()=>(orderPlaced=false)"></button>
</div>
<ul class="">
<li class="" v-for="item in cart" :key="item.id">
<button type="button" @click="removeItem(item.id)" class="" >
<span >&times;</span>
</button>
<div class="">
<img :src="item.img" style="width:80px" class="mr-3" :alt="item.title"/>
<div class="">
<p class="mb-0">{{item.title}}</p>
<button @click="reduceQty(item.id)" class="">-</button>
x{{item.qty}}
<button @click="addQty(item.id)" class="">+</button>

</div>
</div>
</li>
</ul>
<button @click="placeOrder" :disabled="isProcessing" class="" v-if="cart.length"><span v-if="!isProcessing" >Checkout(${{totalPrice}})</span>
<div v-else class="" >
<span class="">loading...</span>
</div>
</button>
</div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default {
name:"Cart",
 data(){
        return{
isProcessing:false,
orderPlaced:false
        }
    },
    computed:{
        ...mapGetters(['cart']),
        totalPrice(){
            return this.cart.reduce((a,b)=>a+b.qty*b.price,0)
        }
    },
    methods:{
...mapActions(["addQty","reduceQty","removeItem","emptyCart"]),
placeOrder(){
this.isProcessing=true
setTimeout(()=>{
this.orderPlaced=true
this.orderPlaced=false
this.emptyCart()

},1000)
}
    }
}
</script>

<style>

</style>