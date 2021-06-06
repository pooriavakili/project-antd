<template>
  <div class="grid grid-cols-2 p-10">
  <div>
  <span>Navbar</span>
  </div>
    <div class="grid justify-end">
  <span>Cart(({{totalQty}}))</span>
  </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
name:"Header",
computed:{
  ...mapGetters(['cart']),
  totalQty(){
    return this.cart.reduce((a,b)=>a+b.qty,0)
  }
}
}
</script>

<style>

</style>