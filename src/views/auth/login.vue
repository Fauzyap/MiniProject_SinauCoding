<template>
  <div class="container-fluid vh-100 d-flex align-items-center justify-content-center">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-12 d-none d-lg-block">
          <img class="img-fluid block" src="../../assets/img/sinaulogo.png" />
        </div>
        <div class="col-md-12 col-lg-6 col-sm-12 col-12 shadow p-4">
          <form @submit.prevent="submitData">
            <div>
              <h3 class="text-center">login</h3>
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
            <router-link to="/regist" class="mt-4 text-dark block">Belum Punya Akun?</router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AuthLogin",

  data: function () {
    return {
      username: "",

      password: "",
    };
  },

  methods: {
    async submitData() {
      const body = {
        username: this.username,

        password: this.password,
      };

      const response = await axios.post("http://159.223.57.121:8090/auth/login", body, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      console.log(response);
      if (response.data.message === "LOGIN SUCCESS") {
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("profileName", response.data.data.profileName);
        this.$router.push("/indexbar");
      }
    },
  },
};
</script>
