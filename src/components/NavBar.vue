<template>
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="https://asheekasamuels.github.io/All-Images/images/By Ashhers Jewels.png" loading="lazy" alt="logo">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
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
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Products</a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li class="nav-item">
                   <router-link class="nav-link" to="/products">Products</router-link>
                </li>
                <li><router-link class="dropdown-item" to="/products/rings">Rings</router-link></li>
                <li><router-link class="dropdown-item" to="/products/necklaces">Necklaces</router-link></li>
                <li><router-link class="dropdown-item" to="/products/bracelets">Bracelets</router-link></li>
                <li><router-link class="dropdown-item" to="/products/earrings">Earrings</router-link></li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/checkout">Checkout</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/reachUs">Reach Us</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Admin</a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li class="nav-item">
                   <router-link class="nav-link" to="/admin">Admin</router-link>
                </li>
                <li><router-link class="dropdown-item" to="/login">Login</router-link></li>
                <li><router-link class="dropdown-item" to="/signup">Register</router-link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavbarComp',
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #fff;
    border-bottom: 1px solid #c0c0c0; /* Silver border */
  }
  
  .navbar-brand img {
    height: 50px;
  }
  
  .nav-link {
    color: #000;
    font-weight: bold;
  }
  
  .nav-link:hover {
    color: #f9e5e8; /* Baby pink */
  }
  
  .dropdown-menu {
    background-color: #fff;
    border: 1px solid #c0c0c0; /* Silver border */
  }
  
  .dropdown-item {
    color: #000;
  }
  
  .dropdown-item:hover {
    background-color: #f9e5e8; /* Baby pink */
    color: #000;
  }
  
  .userAccount .nav-link {
    color: #000;
  }
  
  .userAccount .nav-link:hover {
    color: #f9e5e8; /* Baby pink */
  }
  </style>
  