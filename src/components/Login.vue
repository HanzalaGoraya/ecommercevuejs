
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
                  <v-text-field v-model="username" label="Username" required></v-text-field>
                  <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
                  <v-btn color="primary" type="submit" class="mr-4" :disabled="!username || !password">Login</v-btn>
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
export default
  {
    name: "Login"
  }
</script>

<script setup>


import { ref } from 'vue';
import { useRouter } from 'vue-router';
const username = ref("");
const password = ref("");
const router = useRouter();



const login = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username.value, password: password.value, }),
    });

    if (!response.ok) {
      // Handle non-2xx HTTP response status codes here
      console.error('HTTP error:', response.status);
      alert("User not found");
      return;
    }

    const data = await response.json();
    localStorage.setItem("login", JSON.stringify(data));
    console.log(data);
    router.push({ name: 'Dashboard' });

    username.value = "";
    password.value = "";





    // Handle the response data as needed
  } catch (error) {
    // Handle other types of errors, e.g., network issues
    console.error('Error:', error);
    alert("User not found");
  }
};

// const isValidEmail = (email) =>
// {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// };
</script>

