<template>
  <div>
    <form @submit.prevent="register">
      <input type='text' v-model='profileName'/>
      <input type="text" v-model='Username'/>
      <input type="text" v-model='Password'/>
      <button type="submit">Checking</button>
  </form>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: 'LoginView',
  data() {
    return {
      profileName: "",
      Username: "",
      Password: "",
    };
  },
  methods: {
    async register() {
        try {
            const config = {
        profileName: this.profileName,
        Username: this.Username,
        Password: this.Password,
      };
      console.log(config);
      const response = await axios.post('http://159.223.57.121:8090/auth/register',config,{
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
    withCredentials:true,
      })
        console.log(response);
        } catch (error) {
            console.log(error.response.data)
        }

    },
  },
  
}
</script>