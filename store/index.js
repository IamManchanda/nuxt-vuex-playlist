import Vuex from 'vuex';

const store = () => {
  return new Vuex.Store({
    state: {
      products: [
        { name: 'Banana Skin', price: 20 },
        { name: 'Shiny Star', price: 40 },
        { name: 'Green shells', price: 60 },
        { name: 'Red shells', price: 80 },
      ],
    },
    getters: {
      saleProducts(state) {
        return state.products.map((product) => {
          return {
            name: product.name,
            price: product.price,
          };
        });
      },
    },
    mutations: {
      reducePrice(state, payload) {
        state.products.forEach((product) => {
          product.price -= payload;
        });
      },
    },
    actions: {
      reducePrice(context, payload) {
        setTimeout(() => {
          context.commit('reducePrice', payload);
        }, 2000);
      },
    },
  });
};

export default store;
