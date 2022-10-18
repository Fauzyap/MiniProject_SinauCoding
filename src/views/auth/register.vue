<template>
  <div class="container-fluid vh-100 d-flex align-items-center justify-content-center">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-12 d-none d-lg-block">
          <img class="img-fluid block" src="../../assets/img/sinaulogo.png" />
        </div>
        <div class="col-md-12 col-lg-6 col-sm-12 col-12 shadow p-4">
          <form @submit.prevent="register">
            
            <div>
              <h3 class="text-center">Register</h3>
            </div>
            <div class="mb-3">
              <label class="form-label" for="inputName">Profile Name</label>
              <input type="text" v-model="profileName" class="form-control" id="inputName" placeholder="ProfileName" />
            </div>
            <div class="mb-3">
              <label class="form-label" for="inputEmail">Username</label>
              <input type="text" v-model="username" class="form-control rounded-3" id="inputEmail" placeholder="Username" />
            </div>
            <div class="mb-3">
              <label class="form-label" for="inputPassword">Password</label>
              <input type="password" v-model="password" class="form-control" id="inputPassword" placeholder="Password" />
            </div>
            <button type="submit" class="btn btn-primary w-100 rounded rounded-3">Sign in</button>
            <router-link to="/" class="mt-4 text-dark block">sudah Punya Akun?</router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AuthRegis",
  data: function () {
    return {
      profileName: "",
      username: "",
      password: "",
    };
  },
  methods: {
    async register() {
      const body = {
        profileName: this.profileName,
        username: this.username,
        password: this.password,
      };
      axios
        .post("http://159.223.57.121:8090/auth/register", body)
        .then((response) => {
          console.log("response", response);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
};
</script>
