<template>
  <div class="c-AppListOne">
    <div class="product-container">
      <h2>List One</h2>
      <ul>
        <li v-for="product in saleProducts" :key="product.id">
          <span class="name">{{ product.name }}</span>
          <span class="price">${{ product.price }}</span>
        </li>
      </ul>
      <button @click="reducePrice(4)">Reduce Price</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['saleProducts']),
  },
  methods: {
    ...mapActions(['reducePrice']),
  },
};
</script>
