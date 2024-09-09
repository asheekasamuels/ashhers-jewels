<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    @click="openModal(user?.userID)"
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
            <button type="reset" class="">Reset</button>
            <button type="submit" class="">Save</button>
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
        emailAdd: this.user?.emailAdd, // Ensure this matches with the v-model
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
      this.payload = { ...user }; // Populate the payload with user data
    }
  },
  async updateUser() { // Make this an async method
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
