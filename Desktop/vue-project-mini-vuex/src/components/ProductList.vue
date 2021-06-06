<template>
  <div class="">
    <div class="" style="width:15rem" v-for="item in products" :key="item.id">
    <img :src="item.img
    " :alt="item.title">
  <div class="">
  <p class="">{{item.text}}</p>
  <p class="">
  ${{item.price}}
    </p>
  <a href="#" @click="addToCart(item)" class="">Add To Cart</a>
  </div>
  </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default {
name:"productList",
computed:{
...mapGetters(["products"])
},
methods:{
...mapActions(["getProducts",'addToCart'])
},
mounted(){
    this.getProducts()

}
}
</script>

<style>

</style>