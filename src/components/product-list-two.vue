<template>
    <div class="product-list-two">
     <h1> Product List Two </h1>
    <ul>
      <li v-for="product in products" :key="product">
        <span class="name"> {{product.name}} </span>
        <span class="price">GHC: {{product.price}} </span>
      </li>
    </ul>
    </div>
</template>
<script>

export default {
   props:['products']
}
</script>

<style scoped>
 .product-list-two{
     background:#D1E4FF;
     box-shadow:1px 2px 3px rgba(0,0,0,0.2);
     margin-bottom: 30px;
     padding:10px 20px;
 }
 .product-list-two ul {
     padding:0;
     list-style-type:none;
 }

 .product-list-two li{
     margin:10px 10px 0 0;
     padding:20px;
     background: rgba(255,255,255,0.7)
 }
 .price {
     font-weight: bold;
     color: #860ce8;
     display: block;
 }
</style>