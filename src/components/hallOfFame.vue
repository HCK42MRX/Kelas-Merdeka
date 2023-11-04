<template lang="html">
    <div class="container mt-24">
      <div class="title mb-6 flex justify-between mx-4 md:mx-32 items-center">
        <h3 class="text-white text-lg md:text-xl">Hall Of Fame</h3>
        <a href="" class="biru text-xs md:text-sm">Lihat Semua</a>
      </div>
  
      <div ref="cardScrollWrapper" class="card-scroll-wrapper overflow-y-hidden overflow-x-auto pl-0 md:pl-32 flex gap-8">
        <div v-for="(card, index) in cards" :key="index" class="card card-stroke w-64 h-80 rounded-2xl">
          <div class="card-img">
            <img src="../assets/defaultImg.jpg" class="rounded-t-2xl h-36 w-64" alt="" srcset="" style="max-width: 100%;" />
          </div>
          <div class="card-desc flex flex-col items-start p-3 text-white">
            <h3 class="font-medium text-lg mb-2 w-60 h-16">{{ card.title }}</h3>
            <small class="text-xs mb-2 ungu">{{ card.modules }}</small>
            <small class="text-xs ungu">{{ card.author }}</small>

            <div class="rank mt-4 flex space-x-24">
              <h1 class="ungu font-bold">#TOP {{ index + 1 }}</h1>
              <a href="" class="px-5 py-1 rounded-md background-biru text-white text-sm">Lihat</a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "hallOfFame",
    data() {
      return {
        cards: [
          {
            title: "Back-End Developer Fundamental Course",
            modules: "15 Modul",
            author: "Alexander",
            image: "../src/assets/back-end-image.jpg",
          },
          {
            title: "Front-End Developer Advanced Course",
            modules: "20 Modul",
            author: "Emma",
          },

          {
            title: "Full-Stack Developer Bootcamp",
            modules: "25 Modul",
            author: "John",
        },
        {
            title: "UX/UI Design Essentials",
            modules: "18 Modul",
            author: "Sophie",
        },
        {
            title: "Data Science Fundamentals",
            modules: "22 Modul",
            author: "David",
        },

        ],
      };
    },
    mounted() {
      let isDragging = false;
      let startX;
  
      this.$refs.cardScrollWrapper.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - this.$refs.cardScrollWrapper.scrollLeft;
      });
  
      this.$refs.cardScrollWrapper.addEventListener("mouseup", () => {
        isDragging = false;
      });
  
      this.$refs.cardScrollWrapper.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - startX;
        this.$refs.cardScrollWrapper.scrollLeft = x;
      });
    },
  };
  </script>
  
  <style lang="css">
  .biru {
    color: #677efe;
  }
  
  .background-biru {
    background-color: #677efe;
  }
  
  .card-stroke {
    background-color: #232323;
  }
  
  .ungu {
    color: #9e96cc;
  }
  
  .card-scroll-wrapper {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    cursor: grab;
    width: 100%;
  }
  
  .card-scroll-wrapper:active {
    cursor: grabbing;
  }
  
  .card {
    flex: 0 0 auto;
  }
  
  .card-scroll-wrapper::-webkit-scrollbar {
    display: none;
  }
  </style>
  