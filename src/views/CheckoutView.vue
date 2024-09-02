<template>
    <div class="checkout-page">
      <div class="checkout-banner">
        <h1>Checkout</h1>
        <p>Complete your order and enjoy your new jewelry.</p>
      </div>
      <div class="order-summary">
        <h2>Order Summary</h2>
        <div class="order-items">
          
        </div>
      </div>
     
      <div class="checkout-footer">
        <p>Thank you for choosing our jewelry. We hope you enjoy your purchase!</p>
      </div>
    </div>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
  .checkout-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    font-family: Arial, sans-serif;
    color: #000;
  }
  
  .checkout-banner {
    background-color: #f9e5e8; /* Baby pink */
    text-align: center;
    padding: 40px 20px;
    color: #000;
  }
  
  .checkout-banner h1 {
    font-size: 36px;
    margin-bottom: 10px;
  }
  
  .checkout-banner p {
    font-size: 18px;
  }
  
  .order-summary, .payment-details {
    background-color: #fff;
    border: 1px solid #c0c0c0; /* Silver border */
    padding: 30px;
    margin: 20px 0;
    border-radius: 8px;
  }
  
  .order-summary h2, .payment-details h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .order-items {
    display: flex;
    flex-direction: column;
  }
  
  .order-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .order-item img {
    height: 100px;
    margin-right: 20px;
  }
  
  .item-details p {
    margin: 0;
  }
  
  .order-total {
    margin-top: 20px;
    text-align: right;
    font-size: 20px;
    font-weight: bold;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
  }
  
  .form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #c0c0c0; /* Silver border */
    border-radius: 4px;
    font-size: 16px;
  }
  
  .form-group input:focus {
    outline: none;
    border-color: #f9e5e8; /* Baby pink focus */
  }
  
  .btn-submit {
    background-color: #000;
    color: #fff;
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    width: 100%;
  }
  
  .btn-submit:hover {
    background-color: #f9e5e8; /* Baby pink hover */
    color: #000;
  }
  
  .checkout-footer {
    text-align: center;
    margin-top: 30px;
    font-size: 16px;
  }
  
  @media (max-width: 768px) {
    .checkout-page {
      padding: 20px;
    }
  
    .checkout-banner h1 {
      font-size: 28px;
    }
  
    .checkout-banner p {
      font-size: 16px;
    }
  
    .order-item {
      flex-direction: column;
      text-align: center;
    }
  
    .order-total {
      text-align: center;
    }
  }
  </style>
  