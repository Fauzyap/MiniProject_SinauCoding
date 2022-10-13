<template>
  <div class="container">
    <div class="col">
      <div class="row">
        <div class="col">
          <div class="img-with-text">
            <img src="../../assets/img/sinaulogo.png" alt="sometext" />
            <h1>Selamat Datang</h1>
          </div>

          <div class="card">
            <h5 class="card-header chead text-center">Register</h5>
            <div class="card-body">
              <form @submit.prevent="register">
                <div class="form-group">
                  <label for="">Profile Name</label>
                  <input type="text" v-model="profileName" class="form-control" placeholder="Enter Profile Name" />
                </div>
                <div class="form-group">
                  <label for="">Username</label>
                  <input type="text" v-model="username" class="form-control" placeholder="Enter Username" />
                </div>
                <div class="form-group">
                  <label for="">Password</label>
                  <input type="password" v-model="password" class="form-control" placeholder="Enter Password" />
                </div>
                <div class="text-center mt-2">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
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
