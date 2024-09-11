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
import { useStore } from 'vuex'

const store = useStore();
const cart = computed(() => store.state.cart);

console.log('Initial cart state:', cart.value); // Add this line

const cartCount = computed(() => {
  return cart.value.reduce((sum, item) => sum + item.count, 0);
});
</script>

<style scoped>
.navbar {
    background-color: #ffffff; /* White background for a clean look */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

.navbar-brand img {
    height: 50px; /* Adjust logo size */
}

.nav-link {
    color: #333; /* Dark color for text */
    font-weight: 500; /* Medium font weight for emphasis */
    transition: color 0.3s ease; /* Smooth color transition */
}

.nav-link:hover {
    color: #d69a6c; /* Highlight color on hover */
}

.navbar-nav .nav-item {
    margin: 0 15px; /* Spacing between nav items */
}

.cart-count {
    background-color: #d69a6c; /* Cart count background color */
    color: #ffffff; /* White text color */
    border-radius: 10px; /* Rounded corners */
    padding: 2px 6px; /* Padding for better appearance */
    margin-left: 5px; /* Space between text and count */
}

.userAccount {
    margin-left: auto; /* Align user account links to the right */
}

.userAccount .nav-link {
    color: #d69a6c; /* User account link color */
}

.userAccount .nav-link:hover {
    color: #333; /* Change color on hover */
}

.navbar-toggler {
    border-color: #d69a6c; /* Toggler border color */
}

.navbar-toggler-icon {
    background-image: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"%3E%3Cpath stroke="%23d69a6c" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E'); /* Custom color for toggler icon */
}

</style>