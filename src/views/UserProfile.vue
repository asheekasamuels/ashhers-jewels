<template>
    <div class="container">
        <div class="welcome-message">
            <h2 v-if="user.firstName && user.lastName">Welcome, {{ user.firstName }} {{ user.lastName }}!</h2>
            <h2 v-else>Please login!</h2>
        </div>
        <div v-if="user.firstName && user.lastName" class="row profile-info">
            <div class="col-md-4">
                <img :src="user.userProfile" alt="Profile Picture" class="profile-picture" />
            </div>
            <div class="col-md-8">
                <h3>{{ user.firstName }} {{ user.lastName }}</h3>
                <p><strong>Age:</strong> {{ user.userAge }}</p>
                <p><strong>Email:</strong> {{ user.emailAdd }}</p>
                <p><strong>Role:</strong> {{ user.userRole }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const user = ref({
    firstName: "John",
    lastName: "Doe",
    userAge: 30,
    emailAdd: "johndoe@example.com",
    userRole: "User",
    userProfile: "https://codjoelmayer.github.io/projectImages/images/profile-Image.png"
});
</script>

<style scoped>
.container {
    padding: 40px;
}

.profile-info {
    margin-top: 20px;
}

.profile-picture {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
}

h3 {
    color: #d88f94;
}

p {
    color: #333;
}

/* Media Queries for Responsiveness */
@media (max-width: 700px) {
    .container {
        padding: 30px 15px;
    }

    .profile-picture {
        width: 120px;
        height: 120px;
    }

    h3 {
        font-size: 1.8rem;
    }

    p {
        font-size: 0.9rem;
    }
}

@media (max-width: 300px) {
    .profile-picture {
        width: 100px;
        height: 100px;
    }

    h3 {
        font-size: 1.5rem;
    }

    p {
        font-size: 0.8rem;
    }
}
</style>
