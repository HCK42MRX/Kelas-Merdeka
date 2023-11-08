<template lang="html">
  <div class="container p-6">
    <div class="title flex justify-center flex-col items-center">
      <img src="../assets/navbarLogo.png" class="w-48 ml-10" alt="">
      <h1 class="text-title text-white text-center text-xl md:text-3xl font-bold">Selamat Datang Kembali !</h1>
    </div>

    <div class="flex justify-between mt-10 px-4 md:px-12 flex-col md:flex-row">
      <div class="form-group w-80 mt-6">
        <form action="">
          <div class="mb-3">
            <p for="" class="text-white ml-2">Username<span class="text-biru">*</span></p>
            <input type="text" class="inputForm rounded-2xl text-white py-2 px-4 w-full" placeholder="Username">
          </div>
          <div class="mb-5 relative">
            <p for="" class="text-white ml-2">Password<span class="text-biru">*</span></p>
            <span
              class="TogglePassword text-white absolute right-4 top-8 cursor-pointer"
              @click="togglePassword"
            >
              <i
                class="fa-solid"
                :class="showPassword ? 'fa-eye' : 'fa-eye-slash'"
              ></i>
            </span>
            <input
              :type="showPassword ? 'text' : 'password'"
              class="inputForm rounded-2xl text-white py-2 px-4 w-full"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            class="text-white block text-center rounded-2xl py-2 w-full"
            style="background-color: #677EFE;"
          >
            Login
          </button>
        </form>
      </div>

      <div class="mt-0 md:mt-14">
        <div class="or flex flex-row md:flex-col items-center">
          <div class="line mr-8 md:mr-0 mb-0 md:mb-12 "></div>
          <h1 class="text-biru block md:mb-0">atau</h1>
          <div class="line mt-12 mb-12 ml-8 md:ml-0"></div>
        </div>
        <router-link to="/register" class="text-biru block text-center md:text-center">Belum punya akun?</router-link>
      </div>

      <div class="login-other w-80 mt-12">
        <div class="mb-5">
          <img src="../assets/google.png" class="absolute ml-5 w-7 mt-1" alt="">
          <button class="bg-white rounded-2xl py-2 w-full text-biru font-semibold text-sm">Sign in With Google</button>
        </div>
        <div class="mb-5">
          <img src="../assets/apple.png" class="absolute ml-4 w-8" alt="">
          <button class="bg-white rounded-2xl py-2 w-full text-biru font-semibold text-sm">Sign in With Apple</button>
        </div>
        <div class="mb-5">
          <img src="../assets/windows.png" class="absolute ml-5 mt-1 w-6" alt="">
          <button class="bg-white rounded-2xl py-2 w-full text-biru font-semibold text-sm">Sign in With Windows</button>
        </div>
      </div>
    </div>

    <div class="term-of-policy mt-24 md:mt-36 text-center flex justify-center items-center">
      <p class="text-white text-xs w-64">By Logging In, you agree to the <span class="text-biru">Terms & Conditions and Privacy Policy.</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginPage",
  data() {
    return {
      showPassword: false,
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>


<style lang="css">
.text-title {
  margin-top: -2rem;
}

.text-biru {
  color: #677EFE;
}

.inputForm {
  background-color: #1A1A1A;
  border: 1px solid #2C2C2C;
  width: 100%;
}

.line {
  width: 50%;
  border-top: 1px solid white;
  transform: rotate(0deg);
}

@screen md {
  .line {
    transform: rotate(90deg);
  }
}

.or {
  color: #677EFE;
}
</style>
