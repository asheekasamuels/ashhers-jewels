<template>
    <nav class="navbar">
      <div class="container">
        <!-- Logo -->
        <router-link class="navbar-brand" to="/">
          <img src="https://asheekasamuels.github.io/All-Images/images/By%20Ashhers%20Jewels.png" alt="Ashhers Jewels logo" class="logo">
        </router-link>
        
        <!-- Navbar links -->
        <div class="nav-links">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/about">About</router-link>
          <router-link class="nav-link" to="/products">Products</router-link>
          <router-link class="nav-link" to="/checkout">Checkout
            <span v-if="cartCount" class="cart-count">{{ cartCount }}</span>
          </router-link>
          <router-link class="nav-link" to="/reachUs">Reach Us</router-link>
          <router-link class="nav-link" to="/admin">Admin</router-link>
        </div>
        
        <!-- User account and mobile menu button -->
        <div class="nav-icons">
          <router-link class="nav-link" to="/login">Login</router-link>
          <button class="mobile-menu-btn" @click="toggleMenu">
            <span class="menu-icon"></span>
          </button>
        </div>
      </div>
  
      <!-- Mobile menu -->
      <div v-if="menuOpen" class="mobile-menu">
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/about">About</router-link>
        <router-link class="nav-link" to="/products">Products</router-link>
        <router-link class="nav-link" to="/checkout">Checkout
          <span v-if="cartCount" class="cart-count">{{ cartCount }}</span>
        </router-link>
        <router-link class="nav-link" to="/reachUs">Reach Us</router-link>
        <router-link class="nav-link" to="/admin">Admin</router-link>
        <router-link class="nav-link" to="/login">Login</router-link>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { computed, ref } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const menuOpen = ref(false);
  const cart = computed(() => store.state.cart);
  const cartCount = computed(() => cart.value.reduce((sum, item) => sum + item.quantity, 0));
  
  function toggleMenu() {
    menuOpen.value = !menuOpen.value;
  }
  </script>
  
  <style scoped>
  /* Navbar container */
  .navbar {
    background-color: white;
    padding: 10px 20px; /* Reduced padding */
    border-bottom: 1px solid #eaeaea;
    position: sticky;
    top: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Georgia", serif;
  }
  
  /* Container for nav links */
  .nav-links {
    display: flex;
    gap: 20px; /* Reduced gap */
  }
  
  .navbar-brand .logo {
    width: 120px; /* Smaller logo */
  }
  
  .nav-link {
    font-weight: 500;
    color: #333;
    text-decoration: none;
    padding: 8px 12px; /* Reduced padding */
    font-size: 16px; /* Reduced font size */
    transition: color 0.3s ease;
  }
  
  .nav-link:hover {
    color: #d88f94; /* Baby pink hover */
  }
  
  /* Icons and Mobile menu button */
  .nav-icons {
    display: flex;
    align-items: center;
    gap: 15px; /* Reduced gap */
  }
  
  .mobile-menu-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    display: none;
  }
  
  .menu-icon {
    width: 20px; /* Smaller icon */
    height: 2px;
    background-color: #333;
    position: relative;
  }
  
  .menu-icon::before,
  .menu-icon::after {
    content: '';
    width: 20px;
    height: 2px;
    background-color: #333;
    position: absolute;
    left: 0;
  }
  
  .menu-icon::before {
    top: -5px;
  }
  
  .menu-icon::after {
    bottom: -5px;
  }
  
  /* Cart count badge */
  .cart-count {
    background-color: #d88f94;
    color: white;
    font-size: 12px;
    padding: 2px 6px;
    border-radius: 50%;
    margin-left: 5px;
  }
  
  /* Mobile menu */
  .mobile-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: white;
    border-top: 1px solid #eaeaea;
    padding: 20px;
  }
  
  .mobile-menu .nav-link {
    margin-bottom: 10px;
  }
  
  /* Responsive for mobile */
  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
  
    .mobile-menu-btn {
      display: block;
    }
  
    .mobile-menu {
      display: flex;
    }
  }
  </style>
  
  