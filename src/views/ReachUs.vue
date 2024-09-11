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
          width="100%"
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Georgia", serif;
  color: #333;
}

.banner {
  background-color: #f9e5e8; /* Light pink background */
  text-align: center;
  padding: 40px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.banner h1 {
  color: #d88f94; /* Baby pink color */
  font-size: 2.5rem;
}

.banner p {
  color: #555; /* Darker gray for readability */
}

.contact-form {
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.contact-form h2 {
  color: #d88f94; /* Baby pink color for form heading */
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: #333; /* Dark text color */
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #d88f94; /* Change border color on focus */
  outline: none; /* Remove outline */
}

.btn-submit {
  background-color: #d88f94; /* Baby pink for submit button */
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-submit:hover {
  background-color: #c77b84; /* Darker pink on hover */
}

.contact-info {
  margin-top: 20px;
}

.contact-info h2 {
  color: #d88f94; /* Baby pink for contact details heading */
  margin-bottom: 10px;
}

.contact-info p {
  margin: 5px 0;
  color: #555; /* Darker gray for text */
}

.map {
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden; /* Prevents overflow from iframe */
}
</style>

