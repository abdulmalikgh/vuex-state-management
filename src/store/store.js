import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        products: [
            {name:'Banan Skin', price: 20},
            {name:'Plantain chips', price: 40},
            {name:'Pawpaw Juice', price: 50},
            {name:'Fanta lemon', price: 30},
            {name:'Jollo rice', price: 40},
          ]
    },
    getters: {
        saleProducts: state => {
           let saleProducts = state.products.map(product => {
                return {
                name: `** ${product.name} **`,
                price: `${product.price / 2}`
                }
            })
            return saleProducts;
        }
    }
})