import { createStore } from 'vuex'
import products from "../mock/product.json"
export default createStore({
  state: {
    products:[],
    cart:[]
  },
  getters:{
    products:(state)=>state.products,
    cart:(state)=>state.cart
  },
  mutations: {
    getProductsData(state){
      state.products=products
          },
          addItemToCart(state,item){
            const addedItem=state.cart.find(product=>product.id===product.id)
            if(addedItem){
              addedItem.qty++
            }else{
              state.cart.push({...item,qty:1})
      
            }
          },
          addQty(state,id){
      const currentItem=state.cart.find((product)=>product.id===id)
      currentItem.qty++
          },
          reduceQty(state,id){
            const currentItem=state.cart.find((product)=>product.id===id)
            if(currentItem.qty>1){
              currentItem.qty--
      
            }else{
              state.cart=state.cart.filter((product)=>product.id!==id)
      
            }
          },
          removeItem(state,id){
      state.cart=state.cart.filter((product)=>product.id!==id)
          },
          emptyCart(state){
      state.cart=[]
          }
         
  },
  actions: {
    getProducts(state){
      state.commit('getProductsData')
          },
          addToCart({commit},item){
      commit("addItemToCart",item)
          },
          addQty({commit},id){
         commit("addQty",id)
          },
          reduceQty({commit},id){
      commit("reduceQty",id)
          },
          removeItem({commit},id){
      commit('removeItem',id)
          },
          emptyCart({commit}){
            commit('emptyCart')
          }
  },
  modules: {
  }
})
