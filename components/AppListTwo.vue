<template>
  <div class="c-AppListTwo">
    <div class="product-container">
      <h2>List Two</h2>
      <ul>
        <li v-for="product in saleProducts" :key="product.id">
          <span class="name">{{ product.name }}</span>
          <span class="price">${{ product.price }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    saleProducts() {
      return this.$store.getters.saleProducts;
    },
  },
};
</script>
