<template>
  <div class="container">
    <form>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <form v-if="!isSubmitted">
            <!-- Exercise 1 -->
            <!-- Create a Signup Form where you retrieve the following Information -->
            <!-- Full Name (First Name + Last Name) -->
            <!-- Mail -->
            <!-- Password -->
            <!-- Store Data? Yes/No -->
            <full-name v-model="userData.full_name"></full-name>
            <div class="form-group">
              <label for="mail">Email</label>
              <input
                v-model="userData.email"
                type="email"
                class="form-control"
                id="email"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                v-model="userData.password"
                type="password"
                class="form-control"
                id="passsword"
              />
            </div>
            <div class="form-group">
              <label for="Store Data">Store in Database?</label>
              <select
                v-model="toStore"
                type="select"
                class="form-control"
                id="store_data"
              >
                <option v-for="item in storageOptions" :key="item">
                  {{ item }}
                </option>
              </select>
            </div>
            <div>
              <button
                type="button"
                class="btn form-control btn-primary"
                @click.prevent="submitForm"
              >
                Submit
              </button>
            </div>
          </form>

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
    </form>
    <hr />

    <!-- Exercise 2 -->
    <!-- Only display the Form if it has NOT been submitted -->
    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

    <div v-if="isSubmitted" class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>
              Full Name: {{ userData.full_name }}
            </p>
            <p>Mail:{{ userData.email }}</p>
            <p>Password:{{ userData.password }}</p>
            <p>Store in Database?:{{ toStore }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullName from "./components/FullName.vue";

export default {
  data: function () {
    return {
      userData: {
        email: "",
        password: "",
        full_name: "Yash Tibrewal",
      },
      toStore: false,
      storageOptions: ["Yes", "No"],
      isSubmitted: false,
    };
  },
  methods: {
    submitForm() {
      this.isSubmitted = true;
    },
  },
  components: {
    fullName: FullName,
  },
};
</script>

<style>
</style>
