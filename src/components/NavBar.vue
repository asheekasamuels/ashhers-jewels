<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">
                <img src="https://asheekasamuels.github.io/All-Images/images/By Ashhers Jewels.png" loading="lazy" alt="logo">
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/products">Products</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/checkout">Checkout
                            <span v-if="cartCount" class="cart-count">{{ cartCount }}</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/reachUs">Reach us</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/admin">Admin</router-link>
                    </li>
                    <ul class="userAccount navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/signup">Register</router-link>
                    </li>
                    </ul>
                </ul>
            </div>
        </div>
    </nav>
</template>


<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const cart = computed(() => store.state.cart);
const cartCount = computed(() => {
  return cart.value.reduce((sum, item) => sum + item.quantity, 0);
});
</script>

<style scoped>
.cart-count {
  background-color: #fff; /* White background for count */
  color: #ff69b4; /* Baby pink text */
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 14px;
  position: absolute;
  top: -5px;
  right: -10px;
  font-weight: bold;
}
</style>