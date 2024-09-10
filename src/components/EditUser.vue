<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    @click="openModal(user?.userID)"
    class="btn-edit"
    data-bs-toggle="modal"
    :data-bs-target="'#editUser' + user?.userID"
  >
    Edit
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    :id="'editUser' + user?.userID"
    tabindex="-1"
    :aria-labelledby="'editUser' + user?.userID"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">Edit User:</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="updateUser">
            <div class="inputs">
              <label for="firstName" class="form-label">First Name</label>
              <input
                type="text"
                v-model="payload.firstName"
                class="form-control"
                id="firstName"
                required
              />
            </div>

            <div class="inputs">
              <label for="lastName" class="form-label">Last Name</label>
              <input
                type="text"
                v-model="payload.lastName"
                class="form-control"
                id="lastName"
                required
              />
            </div>

            <div class="inputs">
              <label for="emailAdd" class="form-label">Email Address</label>
              <input
                type="email"
                v-model="payload.emailAdd"
                class="form-control"
                id="emailAdd"
                required
              />
            </div>

            <div class="inputs">
              <label for="gender" class="form-label">Gender</label>
              <input
                type="text"
                v-model="payload.gender"
                class="form-control"
                id="gender"
                required
              />
            </div>

            <div class="inputs">
              <label for="userAge" class="form-label">Age</label>
              <input
                type="number"
                v-model="payload.userAge"
                class="form-control"
                id="userAge"
                required
              />
            </div>
            <button type="reset" class="btn-reset">Reset</button>
            <button type="submit" class="btn-save">Save</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {
      updateUserID: null,

      payload: {
        userID: this.user?.userID,
        firstName: this.user?.firstName,
        lastName: this.user?.lastName,
        emailAdd: this.user?.emailAdd, 
        gender: this.user?.gender,
        userAge: this.user?.userAge,
      },
    };
  },
  methods: {
  openModal(userID) {
    this.updateUserID = userID;
    const user = this.$store.state.users.find((user) => user.userID === userID);
    if (user) {
      this.payload = { ...user }; 
    }
  },
  async updateUser() { 
    try {
      await this.$store.dispatch("updateUser", {
        userID: this.updateUserID,
        ...this.payload,
      });
      alert("User has been updated");
      console.log("User has been updated");
    } catch (err) {
      console.error("Error", err);
      alert("Failed to update user: " + err.message); // Notify user of the error
    }
  },
},

};
</script>

<style scoped>
/* Button styles */
.btn-edit {
  background-color: #ff69b4; /* Hot pink */
  color: white; /* Text color */
  border: none; /* Remove default border */
  padding: 10px 15px; /* Padding for a better button size */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  font-size: 16px; /* Font size */
  transition: background-color 0.3s ease; /* Smooth transition */
}

.btn-edit:hover {
  background-color: #ff1493; /* Darker pink on hover */
}

/* Modal header styles */
.modal-header {
  background-color: #f9e5e8; /* Baby pink */
  border-bottom: 1px solid #c0c0c0; /* Silver border */
}

/* Modal body styles */
.modal-body {
  padding: 20px;
}

/* Input field styles */
.inputs {
  margin-bottom: 15px;
}

.inputs .form-label {
  font-weight: bold;
}

/* Form control styles */
.form-control {
  border: 1px solid #c0c0c0; /* Silver border */
  border-radius: 5px; /* Rounded corners */
}

/* Reset button styles */
.btn-reset {
  background-color: #ccc; /* Gray */
  color: #000; /* Black text */
  border: none; /* Remove default border */
  padding: 10px 15px; /* Padding for a better button size */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  font-size: 16px; /* Font size */
  margin-right: 10px; /* Space between buttons */
  transition: background-color 0.3s ease; /* Smooth transition */
}

.btn-reset:hover {
  background-color: #b3b3b3; /* Darker gray on hover */
}

/* Save button styles */
.btn-save {
  background-color: #ff69b4; /* Hot pink */
  color: white; /* Text color */
  border: none; /* Remove default border */
  padding: 10px 15px; /* Padding for a better button size */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  font-size: 16px; /* Font size */
  transition: background-color 0.3s ease; /* Smooth transition */
}

.btn-save:hover {
  background-color: #ff1493; /* Darker pink on hover */
}

</style>
