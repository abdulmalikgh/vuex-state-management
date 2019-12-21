<template>
  <div id="app">
    <div class="container">
      <product-list-one></product-list-one>
      <product-list-two></product-list-two>
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
  }
}
</script>

<style>

 body{
   font-family: Arial, sans-serif;
   line-height: 1.6;
   background:#e8f7f0;

 } 
 

</style>
