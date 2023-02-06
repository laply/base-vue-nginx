<template>
  <b-form id="login-main" @submit="onSubmit" @reset="onReset">
    <b-form-group class="b-form-group" id="input-group-1" label="Email address:" label-for="input-1">
      <b-form-input id="input-1" v-model="email" type="email" placeholder="Enter email" required></b-form-input>
    </b-form-group>

    <b-form-group class="b-form-group" id="input-group-2" label="Your Password:" label-for="input-2">
      <b-form-input
        id="input-2"
        type="password"
        v-model="password"
        placeholder="Enter Password"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group class="b-form-group" id="input-group-3">
      <b-button class="b-button" type="reset" variant="secondary">Sign up</b-button>
      <b-button class="b-button" type="submit" variant="primary">Sigh In</b-button>
    </b-form-group>
  </b-form>
</template>

<script>
import { auth, setAuthInHeader } from "../api";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      rPath: "",
    };
  },
  created() {
    this.rPath = this.$route.query.rPath || "/";
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      auth
        .login(this.email, this.password)
        .then((data) => {
          localStorage.setItem("token", data.accessToken);
          setAuthInHeader(data.accessToken);
          this.$router.push(this.rPath);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onReset(event) {
      event.preventDefault();
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style>
#login-main {
  padding: 20px;
}
.b-form-group {
  margin: 20px;
}
.b-button {
  margin: 10px;
}
</style>
