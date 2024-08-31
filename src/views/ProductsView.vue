<template>
    <div class="products">
      <h1>Products</h1>
      <div v-if="product">
        <Card :product="product"/>
      </div>   
      <div v-if="!product"> 
          <SpinnerComp/>
      </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import Card from '@/components/Card.vue'
import SpinnerComp from '@/components/SpinnerComp.vue'
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()
const product = computed(
  () => store.state.product
)
onMounted(() => {
  store.dispatch('fetchProduct', route.params.id)
}) 
</script>

<style scoped>
.products {
  text-align: center;
  padding: 20px;
}
</style>