<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn-add"
    data-bs-toggle="modal"
    data-bs-target="#addUser"
  >
    Add User
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="addUser"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add User</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
            
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addUser">
            <p>All fields are required</p>
            <div class="inputs">
              <label for="firstName" class="form-label">First Name</label>
              <input
                type="text"
                v-model="payload.firstName"
                class="form-control"
                id="firstName"
                required
                oninvalid="this.setCustomValidity('Please insert first name')"
                oninput="this.setCustomValidity('')"
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
                oninvalid="this.setCustomValidity('Please insert last name')"
                oninput="this.setCustomValidity('')"
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
                oninvalid="this.setCustomValidity('Please insert email address')"
                oninput="this.setCustomValidity('')"
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
                oninvalid="this.setCustomValidity('Please insert gender')"
                oninput="this.setCustomValidity('')"
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
                oninvalid="this.setCustomValidity('Please insert age')"
                oninput="this.setCustomValidity('')"
              />
            </div>

            <div class="inputs">
              <label for="userPass" class="form-label">Password</label>
              <input
                type="password"
                v-model="payload.userPass"
                class="form-control"
                id="userPass"
                required
                minlength="5"
                oninvalid="this.setCustomValidity('Please set password')"
                oninput="this.setCustomValidity('')"
              />
            </div>

            <div class="inputs">
              <label for="userRole" class="form-label">Role</label>
              <input
                type="text"
                v-model="payload.userRole"
                class="form-control"
                id="userRole"
                required
                oninvalid="this.setCustomValidity('Please insert user role')"
                oninput="this.setCustomValidity('')"
              />
            </div>
            <button type="reset" class="btn-reset">Reset</button>
            <button type="submit" class="btn-submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        payload: {
          firstName: "",
          lastName: "",
          emailAdd: "",
          gender: "",
          userAge: "",
          userPass: "",
          userRole: "",
        },
      };
    },
    methods: {
      addUser() {
        this.$store.dispatch("register", this.payload);
        alert("User Has Been Added Successfully");
        window.location.reload();
      },
    },
  };
  </script>

<style scoped>
.btn-add {
  background-color: #ff69b4;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.btn-add:hover {
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

.btn-submit {
  background-color: #ff69b4;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.btn-submit:hover {
  background-color: #ff1493;
}
</style>
