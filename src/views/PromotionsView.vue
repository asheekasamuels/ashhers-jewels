<template>
    <div class="promotions-page">
      <section class="promotions-content">
        <h1>Current Promotions</h1>
        <p>Explore our latest promotions and special offers exclusively for Ashhers Jewels customers.</p>
  
        <h2>Exclusive Offers</h2>
        <ul>
          <li>Buy one, get one 50% off</li>
          <li>20% off on select items</li>
          <li>Free shipping on orders over R100</li>
        </ul>
      </section>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .promotions-page {
    padding: 60px 20px;
    font-family: "Georgia", serif;
    line-height: 1.6;
    background-color: #f9f9f9;
  }
  
  .promotions-content {
    max-width: 800px;
    margin: 0 auto;
    background-color: white;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  h1, h2 {
    color: #d88f94;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  h2 {
    font-size: 1.8rem;
    margin-top: 30px;
  }
  
  p {
    color: #333;
  }
  
  ul {
    margin-top: 10px;
    margin-left: 20px;
  }
  
  ul li {
    margin-bottom: 10px;
  }
  
  a {
    color: #d88f94;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  /* Media Queries for Responsiveness */
  @media (max-width: 700px) {
    .promotions-content {
      padding: 30px;
    }
  
    h1 {
      font-size: 2rem;
    }
  
    h2 {
      font-size: 1.5rem;
    }
  
    p, ul li {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 300px) {
    .promotions-page {
      padding: 20px 10px;
    }
  
    .promotions-content {
      padding: 20px;
    }
  
    h1 {
      font-size: 1.5rem;
    }
  
    h2 {
      font-size: 1.2rem;
    }
  
    p, ul li {
      font-size: 0.9rem;
    }
  }
  </style>
  
