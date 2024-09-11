<template>
    <footer class="footer">
      <div class="footer-content container-fluid">
        <div class="row justify-content-center">
          <p class="footer-text">
            Ashhers Jewels &copy; <span id="currentYear">{{ currentYear }}</span>
          </p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterComp",
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #f9f9f9; /* Light background */
    padding: 20px 0;
    text-align: center;
    border-top: 1px solid #e0e0e0;
    margin-top: 40px;
    font-family: "Georgia", serif;
  }
  
  .footer-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .footer-text {
    font-size: 1.2rem;
    color: #333;
  }
  
  .footer-text span {
    font-weight: bold;
    color: #d88f94; /* Baby pink for the year */
  }
  </style>
  