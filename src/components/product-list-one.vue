<template>
  <div class="product-list-one">
    <h1> Poduct List One </h1>
    <ul>
      <li v-for="(product, index) in saleProducts" :key="index">
        <span class="name"> {{product.name}} </span>
        <span class="price"> GHC: {{product.price}} </span>
      </li>
    </ul>
    <button @click="reducePrice(8)"> reduce Price </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from 'vuex';

export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    ...mapGetters(['saleProducts'])
  },
  methods: {
   ...mapActions(['reducePrice'])
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .product-list-one{
     background:#FFF881;
     box-shadow:1px 2px 3px rgba(0,0,0,0.2);
     margin-bottom: 30px;
     padding:10px 20px;
 }
 .product-list-one ul {
     padding:0;
     list-style-type:none;
 }

 .product-list-one li{
     display:inline-block;
     margin:10px 10px 0 0;
     padding:20px;
     background: rgba(255,255,255,0.7)
 }
 .price {
     font-weight: bold;
     color: #e8800e;
 }
</style>
