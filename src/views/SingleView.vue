<template>
  <div v-if="product" class="container-fluid text-center">
    <h1>{{ product[0].prodName }}</h1>
    <img :src="product[0].prodUrl" :alt="product[0].prodName" class="img-fluid"/>
    <p>Price: R {{ product[0].amount }}</p>
    <p>{{ product[0].desc }}</p>
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
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$router.push({ name: 'SingleView', params: { id: '[]' } });
    this.$store.dispatch("getSingleProduct", this.$route.params.id);
    this.$store.dispatch("getProducts");

  },
  components: {
    SpinnerComp,
  },
  methods: {
    addToCart(prodID) {
      if (this.user.userID) {
        this.$store.dispatch("addToCart", {
          userID: this.user.userID,
          prodID,
        });
      }
    },
  },
};
</script>


