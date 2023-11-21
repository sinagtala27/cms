<template>
  <div>
    <main>
      <section class="absolute w-full h-full">
        <div
          class="absolute top-0 w-full h-full bg-gray-900"
          style="background-size: 100%; background-repeat: no-repeat; "
          :style="{'background-image': 'url(' + require('../assets/img/login_bg.png').default + ')'}"
        ></div>
        <div class="container mx-auto px-4 h-full">
          <div class="flex content-center items-center justify-center h-full">
            <div class="w-full lg:w-4/12 px-4">
              <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-300 border-0"
              >
                <div class="rounded-t mb-0 px-6 py-6">
                  <div class="text-center mb-3">
                    <h6 class="text-gray-950 text-sm font-bold">
                      COMPLAINT PORTAL
                    </h6>
                  </div>
                  <hr class="mt-6 border-b-1 border-blue-500" />
                </div>
                <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div class="text-gray-800 text-center mb-3 font-bold">
                    <small>Sign in</small>
                  </div>
                  <form @submit.prevent="login">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-black-700 text-xs font-bold mb-2"
                        for="email"
                      >Email</label>
                      <input
                        type="email"
                        v-model="email"
                        class="border-0 px-3 py-3 placeholder-blue-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        autocomplete="email"
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-black-700 text-xs font-bold mb-2"
                        for="password"
                      >Password</label>
                      <input
                        type="password"
                        v-model="password"
                        class="border-0 px-3 py-3 placeholder-blue-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Password"
                        autocomplete="current-password"
                      />
                    </div>
                    <div class="text-center mt-6">
                      <button
                        class="bg-blue-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="submit"
                        @click="login"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="flex flex-wrap mt-6">
                <div class="w-1/2">
                  <a href="#pablo" class="text-gray-300"><small>Forgot password?</small></a>
                </div>
                <div class="w-1/2 text-right">
                  <a href="#pablo" class="text-gray-300"><small>Create new account</small></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      errors: [],
    };
  },
  methods: {
    login() {
      this.errors = [];

      axios
        .post('/login', {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          // Check if login is successful
          if (response.data.success) {
            // Redirect to the admin dashboard
            window.location.href = '/admin/dashboard';
          } else {
            this.errors = ['Invalid email or password. Please try again.'];
          }
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = Object.values(error.response.data.errors).flat();
          } else {
            this.errors = ['Invalid email or password. Please try again.'];
          }
        });
    },
  },
};
</script>

