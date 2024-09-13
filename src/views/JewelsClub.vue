<template>
  <div class="jewels-club-page">
    <section class="jewels-content">
      <h1>Join the Ashhers Jewels Club</h1>
      <p>
        Be part of an exclusive club and enjoy personalized recommendations,
        special discounts, and much more.
      </p>

      <h2>Member Benefits</h2>
      <ul>
        <li>Personalized jewelry recommendations</li>
        <li>Invitations to VIP events</li>
        <li>Special discounts on all collections</li>
      </ul>

      <h2>How to Join</h2>
      <p>
        Signing up is easy! Just create an account and you'll automatically
        become part of the club.
      </p>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.jewels-club-page {
  padding: 60px 20px;
  font-family: "Georgia", serif;
  line-height: 1.6;
  background-color: #f9f9f9;
}

.jewels-content {
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
</style>
