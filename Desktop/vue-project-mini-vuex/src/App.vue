<template>  
<div class="">
<Header/>
<div class="flex">
 <ProductList/>
 <Cart/>
 </div>
</div>
<router-view/>
</template>
<script>
import Header from "./components/Header.vue"
import ProductList from "./components/ProductList.vue"
import Cart from "./components/Cart.vue"

export default{
  name:"App",
  components:{
    Header,
    ProductList,
    Cart
  }
}
</script>
<style>

</style>
