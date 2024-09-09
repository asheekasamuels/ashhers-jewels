<template>
  <div v-if="product" class="container-fluid text-center">
    <h1>{{ product.prodName }}</h1>
    <img
      :src="product.prodUrl"
      :alt="product.prodName"
      class="img-fluid"
    />
    <p>Price: R {{ product.amount }}</p>
    <p>{{ product.desc }}</p>
    <button @click="addToCart(product.prodID)">Add To Cart</button>
  </div>
  <div v-else class="d-flex justify-content-center m-3 p-3">
    <SpinnerComp />
  </div>
</template>

<script>
import SpinnerComp from "@/components/SpinnerComp.vue";
export default {
  computed: {
    product() {
      return this.$store.state.selectedProduct; // Changed to selectedProduct
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.$route.params.id);
  },
  components: {
    SpinnerComp,
  },
  methods: {
    addToCart(productID) {
      const userID = this.$store.state.user?.userID; // Ensure userID is accessible
      if (userID) {
        this.$store.dispatch("addToCart", {
          userID,
          productID,
        });
      }
    },
  },
};
</script>

