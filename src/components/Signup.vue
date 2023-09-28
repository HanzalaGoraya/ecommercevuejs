<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-row align-text="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card>
              <v-card-title class="headline">Sign Up</v-card-title>
              <v-card-text>
                <v-form @submit.prevent="Signup">
                  <v-text-field v-model="username" label="Username" required></v-text-field>
                  <v-text-field v-model="email" label="Email" required></v-text-field>
                  <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
                  <v-text-field v-model="confirmpassword" label="Confirm Password" type="password"
                    required></v-text-field>
                  <v-btn color="primary" type="submit" class="mr-4" :disabled="!username || !password">Sign Up</v-btn>
                </v-form>
              </v-card-text>
              <center>
                <p>Already have an account? <router-link to="/login">Login</router-link></p>
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

        username: '',
        email: '',
        password: '',
        confirmpassword: '',
      }
    },
    methods: {
      async Signup() {
        let result = await axios.post('http://10.0.10.220:8080/api/register', {
          name: this.username,

          email: this.email,

          password: this.password,

          confirm_password: this.confirmpassword,

        })


        if (result.status == 200) {

          // localStorage.setItem('user-info', JSON.stringify(result.data));
          this.$router.push('/');

        }
      }

    }


  }
</script>

<!-- <script setup>


import { ref } from 'vue';
import { useRouter } from 'vue-router';
const username = ref("");
const email = ref("");
const password = ref("");
const router = useRouter();



// const Signup = async (e) => {
//   e.preventDefault();

//   try {
//     const response = await fetch('http://127.0.0.1:8000/api/signup', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ username: username.value, email: email.value, password: password.value, }),
//     });

//     if (!response.ok) {
//       // Handle non-2xx HTTP response status codes here
//       console.error('HTTP error:', response.status);
//       alert("User not found");
//       return;
//     }

//     fetch(apiUrl, requestData)
//       .then((response) => {
//         if (response.ok) {
//           // Registration was successful, you can handle it here
//           console.log('User registered successfully');
//           // You might want to navigate the user to another page or display a success message.
//         } else {
//           // Registration failed, handle errors here
//           console.error('User registration failed');
//           // You can handle different error scenarios based on response status codes.
//         }
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         // Handle network errors or other unexpected issues here
//       });
//     // Handle the response data as needed
//   } catch (error) {
//     // Handle other types of errors, e.g., network issues
//     console.error('Error:', error);
//     alert("User not found");
//   }
// };

// const isValidEmail = (email) =>
// {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// };
</script> -->


