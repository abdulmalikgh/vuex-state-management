<template>
  <div id="app">
    <div class="container">
      <product-list-one ></product-list-one>
      <product-list-two ></product-list-two>
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
