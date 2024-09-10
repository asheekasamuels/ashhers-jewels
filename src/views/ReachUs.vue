<template>
  <div class="contact-page">
    <div class="banner">
      <h1>Contact Us</h1>
      <p>We're here to assist you with any inquiries or support.</p>
    </div>
    <div class="contact-form">
      <h2>Get in Touch</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Full Name & Surname</label>
          <input type="text" id="name" placeholder="Enter your full name & surname" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" rows="5" placeholder="Enter your message" required></textarea>
        </div>
        <button type="submit" class="btn-submit">Send Message</button>
      </form>
    </div>
    <div class="contact-info">
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13233.069675818386!2d18.4926986!3d-33.9856643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc433bedd50e81%3A0x9c746d268c8e0ad9!2sLife%20Choices!5e0!3m2!1sen!2sza!4v1694259988434!5m2!1sen!2sza"
          width="300"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <h2>Our Contact Details</h2>
      <p>Email: support@ashhersjewels.com</p>
      <p>Phone: +123 456 7890</p>
      <p>Address: 314 Imam Haron Road, Lansdowne</p>
      <p>Business Hours: 9AM - 4PM</p>
    </div>
  </div>
</template>

<script setup>
const submitForm = () => {
  alert("Thank you for contacting us. We will get back to you soon!");
};
</script>

<style scoped>
.contact-page {
  max-width: 1300px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Georgia", serif;
}

.banner {
  background-color: #f9e5e8; /* Baby pink */
  text-align: center;
  padding: 40px 20px;
  color: #000;
}

.banner h1 {
  font-size: 36px;
  margin-bottom: 10px;
  color: #000;
}

.banner p {
  font-size: 18px;
}

.contact-form {
  background-color: #fff;
  border: 1px solid #c0c0c0; /* Silver border */
  padding: 30px;
  margin: 20px 0;
  border-radius: 8px;
}

.contact-form h2 {
  font-size: 24px;
  color: #000;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  color: #000;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #c0c0c0; /* Silver border */
  border-radius: 4px;
  font-size: 16px;
}

.form-group input:focus,
.form-group textarea:focus {
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
}

.btn-submit:hover {
  background-color: #f9e5e8; /* Baby pink hover */
  color: #000;
}

.contact-info {
  text-align: center;
  margin-top: 30px;
}

.contact-info h2 {
  font-size: 24px;
  color: #000;
}

.contact-info p {
  font-size: 16px;
  color: #000;
}

@media (max-width: 768px) {
  .contact-page {
    padding: 20px;
  }

  .banner h1 {
    font-size: 28px;
  }

  .banner p {
    font-size: 16px;
  }

  .contact-form {
    padding: 20px;
  }
}
</style>
