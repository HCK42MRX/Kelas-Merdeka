<template>
    <nav class="px-4 sm:px-6">
      <div class="flex items-center justify-between flex-row">
        <div class="mt-3">
          <router-link to="/">
            <img src="../assets/navbarLogo.png" alt="Logo" class="w-36 sm:w-60">
          </router-link>
        </div>

  
        <!-- Offcanvas Toggle Button -->
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-white focus:outline-none mb-4">
          <span class= "text-white text-xl"><i class="fa-solid fa-bars"></i></span>
          </button>
        </div>
  
        <!-- Isi Offcanvas -->
        <div :class="['offcanvas-menu', { 'offcanvas-menu-open': isMenuOpen }]">
          <div class="flex justify-end p-4">
            <button @click="toggleMenu" class="text-white focus:outline-none">
              <span class="text-white text-xl">
                <i class="fa-solid fa-xmark"></i>
              </span>
            </button>
          </div>
  
          <div class="flex flex-col items-center space-y-4 text-white text-base">
            <router-link to="" class="text-white">Promo</router-link>
            <router-link to="" class="text-white">Program</router-link>
            <router-link to="" class="text-white">Layanan Kami</router-link>
            <searchBar></searchBar>
            <router-link to="" class="loginbtn px-8 py-2 rounded-lg">Login</router-link>
            <router-link to="" class="daftarbtn border text-white border-none px-8 py-2 rounded-lg">Daftar</router-link>
          </div>
        </div>
        <!-- end -->
  
        <!-- Menu Untuk layar besar -->
        <div class="hidden md:flex items-center space-x-6 mb-8">
          <router-link to="" class="text-white hover:text-blue-400 text-sm">Promo</router-link>
          <router-link to="" class="text-white hover:text-blue-400 text-sm">Program</router-link>

          <!-- dropdown -->
          <div class="relative" @click="toggleDropdown">
              <router-link to="" class="text-white hover:text-blue-400 text-sm">Layanan Kami</router-link>
              <span class="dropDownButton text-white text-xs ml-1">
                <i :class="isDropdownOpen ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'"></i>
              </span>

            <!-- isi dropdown -->
            <ul v-if="isDropdownOpen" @click="closeDropdown" class="absolute dropDown top-full left-0 mt-2 text-sm text-white p-2 rounded shadow-md w-28">
              <li>
                  <router-link to="/login" class="">Layanan 1</router-link>
                </li>
                <li>
                  <router-link to="" class="">Layanan 2</router-link>
                </li>
            </ul>
          </div>


          <searchBar></searchBar>

          <router-link to="/login" class="loginbtn px-8 py-2 rounded-lg">Login</router-link>
          <router-link to="/register" class="daftarbtn border text-white border-none px-8 py-2 rounded-lg  ml-auto">Daftar</router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import searchBar from './InputSearch.vue';
  
  export default {
    name: 'NavMenu',
    components: {
      searchBar,
    },
    data() {
      return {
        isMenuOpen: false,
        isDropdownOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown() {
      this.isDropdownOpen = false;
    },
    },
  };
  </script>
  
  <style>
  
  .offcanvas-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 60%;
    height: 100%;
    background-color: #131313;
    z-index: 1000;
    overflow-x: hidden;
    transition: right 0.3s ease-in-out;
  }
  
  .offcanvas-menu-open {
    right: 0;
  }
  
  .blue-hover {
    color: #677EFE;
  }
  
  .daftarbtn {
    background-color: #677EFE;
  }

  .loginbtn{
    border: 1px solid #9E96CC;
    color: #9E96CC;
  }

  .dropDown{
    background-color: #131313;
  }

  </style>
  