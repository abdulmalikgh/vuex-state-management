<template>
  <div id="app">
    <div class="container">
      <product-list-one v-bind:products="products"></product-list-one>
      <product-list-two v-bind:products="products"></product-list-two>
    </div>  
  </div>
</template>

<script>
import productListOne from './components/product-list-one.vue'
import productListTwo from './components/product-list-two.vue'
export default {
  name: 'app',
  components: {
    'product-list-one':productListOne,
    'product-list-two':productListTwo
  },
  data( ){
     return{
         products: [
           {name:'Banan Skin', price: 20},
           {name:'Plantain chips', price: 40},
           {name:'Pawpaw Juice', price: 50},
           {name:'Fanta lemon', price: 30},
           {name:'Jollo rice', price: 40},
         ]
     }
  }
}
</script>

<style>
 body{
   font-family:ubuntu;
   color:#555;
 }
</style>
