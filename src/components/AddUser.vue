<template>
    <!-- Button trigger modal -->
    <button
      type="button"
      class=""
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
            <button type="button" data-bs-dismiss="modal">X</button>
          </div>
          <div class="modal-body">
            <form>
              <p>All fields are required</p>
              <div class="inputs">
                <label for="exampleFormControlInput1" class="form-label"
                  >First Name</label
                >
                <input
                  type="text"
                  v-model="payload.firstName"
                  class="form-control"
                  id="exampleFormControlInput1"
                  required
                  oninvalid="this.setCustomValidity('Please insert first name')"
                  oninput="this.setCustomValidity('')"
                />
              </div>
  
              <div class="inputs">
                <label for="exampleFormControlInput1" class="form-label"
                  >Last Name</label
                >
                <input
                  type="text"
                  v-model="payload.lastName"
                  class="form-control"
                  id="exampleFormControlInput1"
                  required
                  oninvalid="this.setCustomValidity('Please insert last name')"
                  oninput="this.setCustomValidity('')"
                />
              </div>
  
              <div class="inputs">
                <label for="exampleFormControlInput1" class="form-label"
                  >Email Address</label
                >
                <input
                  type="text"
                  v-model="payload.emailAdd"
                  class="form-control"
                  id="exampleFormControlInput1"
                  required
                  oninvalid="this.setCustomValidity('Please insert email address')"
                  oninput="this.setCustomValidity('')"
                />
              </div>
  
              <div class="inputs">
                <label for="exampleFormControlInput1" class="form-label"
                  >Gender</label
                >
                <input
                  type="text"
                  v-model="payload.gender"
                  class="form-control"
                  id="exampleFormControlInput1"
                  required
                  oninvalid="this.setCustomValidity('Please insert gender')"
                  oninput="this.setCustomValidity('')"
                />
              </div>
  
              <div class="inputs">
                <label for="exampleFormControlInput1" class="form-label"
                  >Age</label
                >
                <input
                  type="number"
                  v-model="payload.userAge"
                  class="form-control"
                  id="exampleFormControlInput1"
                  required
                  oninvalid="this.setCustomValidity('Please insert age')"
                  oninput="this.setCustomValidity('')"
                />
              </div>

              <div class="inputs">
                <label for="exampleFormControlInput1" class="form-label"
                  >Password</label
                >
                <input
                  type="password"
                  v-model="payload.userPass"
                  class="form-control"
                  id="exampleFormControlInput1"
                  required
                  minlength="5"
                  oninvalid="this.setCustomValidity('Please set password')"
                  oninput="this.setCustomValidity('')"
                />
              </div>
  
              <div class="inputs">
                <label for="exampleFormControlInput1" class="form-label"
                  >Role</label
                >
                <input
                  type="text"
                  v-model="payload.userRole"
                  class="form-control"
                  id="exampleFormControlInput1"
                  required
                  oninvalid="this.setCustomValidity('Please insert user role')"
                  oninput="this.setCustomValidity('')"
                />
              </div>
              <button type="reset" class="">Reset</button>
              <button type="submit" @click="addUser" class="">Submit</button>
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
          userRole: "user",
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