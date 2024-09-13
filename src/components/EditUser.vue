<template>
  <button
    type="button"
    @click="openModal(user?.userID)"
    class="btn-edit"
    data-bs-toggle="modal"
    :data-bs-target="'#editUser' + user?.userID"
  >
    Edit
  </button>

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
        await this.$store.dispatch("editUser", {
          userID: this.updateUserID,
          ...this.payload,
        });
        alert("User has been updated");
        console.log("User has been updated");
      } catch (err) {
        console.error("Error", err);
        alert("Failed to update user: " + err.message);
      }
    },
  },
};
</script>

<style scoped>
.btn-edit {
  background-color: #ff69b4;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.btn-edit:hover {
  background-color: #ff1493;
}

.modal-header {
  background-color: #f9e5e8;
  border-bottom: 1px solid #c0c0c0;
}

.modal-body {
  padding: 20px;
}

.inputs {
  margin-bottom: 15px;
}

.inputs .form-label {
  font-weight: bold;
}

.form-control {
  border: 1px solid #c0c0c0;
  border-radius: 5px;
}

.btn-reset {
  background-color: #ccc;
  color: #000;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;
  transition: background-color 0.3s ease;
}

.btn-reset:hover {
  background-color: #b3b3b3;
}

.btn-save {
  background-color: #ff69b4;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.btn-save:hover {
  background-color: #ff1493;
}
</style>

