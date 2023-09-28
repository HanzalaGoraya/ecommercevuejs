
<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card>
              <v-card-title class="headline">Login</v-card-title>
              <v-card-text>
                <v-form @submit.prevent="login">
                  <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
                  <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
                  <v-btn color="primary" type="submit" class="mr-4" :disabled="!email || !password">Login</v-btn>
                </v-form>
              </v-card-text>
              <center>
                <p>Already have an account? <router-link to="/signup">Signup</router-link></p>
              </center>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
  
  
  
  
  
<script>
import axios from 'axios';
export default
  {
    data() {
      return {
        email: '',
        password: '',

      }
    },
    methods: {
      async login() {
        let result = await axios.post('http://10.0.10.220:8080/api/login', {
          email: this.email,
          password: this.password,
        })
        if (result.status == 200) {
          console.log(result.data);
          // this.$store.state.users.push(result.data);
          localStorage.setItem('user', JSON.stringify(result.data));
          this.$router.push('/home');

        }
      }

    }


  }
</script>