<template lang="html">
    <div class="container px-5 md:px-0 flex flex-col md:flex-row justify-center items-center gap-10">
        <div class="video-container md:px-0 w-full h-64 md:h-96 md:w-2/3 lg:w-1/2 xl:w-2/3">
            <video ref="videoElement" class="rounded-xl w-full h-full" controls>
              <source src="../assets/video/backendDev.mp4" type="video/mp4">
            </video>
          </div>
          
  
      <div class="card card-stroke  w-full md:w-64 h-80 h-full md:h-96 rounded-2xl">
        <div class="card-img">
          <img src="../assets/defaultImg.jpg" class="rounded-t-2xl md:h-48 w-full md:w-64" alt="" srcset="" style="max-width: 100%;" />
        </div>
        <div class="card-desc flex flex-col items-start p-3 text-white">
          <h3 class="font-medium text-lg w-full">Back-End Developer Fundamental Course</h3>
          <small class="text-sm mb-2 ungu">7 Modul</small>
          <small class="text-sm ungu mb-2">Kiana Dmitri</small>
  
          <h1 class="ungu font-bold mb-1">Rp.700.000</h1>
          <a href="" class="px-5 py-1 rounded-md background-biru text-white text-sm">Beli Materi</a>
        </div>
      </div>
    </div>
  
    <div class="container px-4 md:px-32 mt-10">
      <h1 class="title text-lg md:text-xl text-white mb-3">Back-End Developer Fundamental Course</h1>
  
      <div class="list-module bg-list p-3 text-white rounded-md">
        <ul>
          <li>
            <a href="" class="background-biru py-2 px-3 rounded-xl  text-xs md:text-base block mb-3 flex justify-between">
              1. Pengenalan ke Pengembangan Back-End <span class="text-black"><i class="fa-solid fa-play"></i></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  
    <div class="container px-4 md:px-32 mt-8">
      <div class="img-profile">
        <h1 class="title text-white text-2xl mb-5">Instructor</h1>
      </div>
  
      <div class="profile flex flex-row gap-5 mb-3">
        <img src="../assets/profile_default.jpg" class="w-28 rounded-xl" alt="">
        <div class="profile-desc">
          <h1 class="text-biru text-xl font-semibold">Kiana Dmitri</h1>
          <small class="text-white text-xs">Backend Instructor</small>
        </div>
      </div>
  
      <div class="profile-desc">
        <p class="text-white">Instruktur kami dalam kursus 'Back-End Developer Fundamental' adalah seorang ahli sejati dalam dunia pengembangan back-end. Dengan pengalaman bertahun-tahun dalam industri IT dan pengembangan perangkat lunak, instruktur ini adalah sumber pengetahuan yang tak ternilai.</p>
      </div>
    </div>
  
    <div class="container pl-1 md:pl-32 mt-12">
      <div class="title">
        <h1 class="text-white text-2xl mb-5">Reviews</h1>
      </div>
  
      <div ref="reviewsContainer" class="reviews-container flex gap-5">
        <div v-for="(review, index) in reviews" :key="index" class="card card-review w-64 rounded-md p-3">
          <div class="nick text-white text-lg mb-2">
            <h1>{{ review.nickname }}</h1>
          </div>
          <div class="star mb-2 flex">
            <span v-for="stars in review.stars" class="text-yellow-500"><i class="fa-solid fa-star"></i></span>
          </div>
          <div class="comment text-sm">
            <h1 class="text-white">{{ review.comment }}</h1>
          </div>
        </div>
      </div>
    </div>
  
    <div class="container pl-2 md:pl-32">
      <div class="title">
        <h1 class="text-white text-lg md:text-2xl font-medium mb-5">Kursus Lainnya oleh <span class="biru">Kiana Dmitri</span></h1>
      </div>
  
      <div ref="cardContainer" class="card-container flex gap-5 overflow-x-auto">
        <div v-for="(course, index) in courses" :key="index" class="card card-stroke w-56 h-72 rounded-2xl">
          <div class="card-img">
            <img src="../assets/defaultImg.jpg" class="rounded-t-2xl h-36 w-64" alt="" srcset="" style="max-width: 100%;" />
          </div>
          <div class="card-desc flex flex-col items-start p-3 text-white">
            <h3 class="font-medium text-base w-48 ml-2">{{ course.title }}</h3>
            <small class="text-xs mb-3 ungu ml-2">{{ course.modules }}</small>
            <small class="text-xs ungu flex gap-1 ml-2">
              <span class="profile w-3 h-1">
                <img src="../assets/profile_default.jpg" class="rounded-full" alt="" srcset="" />
              </span>
              {{ course.author }}
            </small>
  
            <div class="title flex justify-center mt-1 items-center text-center mx-auto">
              <a href="" class="px-5 py-1 rounded-md background-biru text-white text-sm w-48">Lihat</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="button mx-auto text-center mt-8 mb-12">
        <a href="" class="px-5 py-1 rounded-md background-biru text-white text-lg md:text-xl">Lihat lainnya</a>
    </div>

    <!-- modal -->

    <div v-if="modalVisible" class="flex justify-center items-center">

        <div class="container-modal card-review w-80 p-3 text-center rounded-lg">
            <div class="question mb-3"><h1 class="text-white">Apa itu Backend?</h1></div>
            <div class="answer-group">
                <ul>
                <li class="background-biru rounded-lg mb-2"><a href="#" class="correct text-white">A. Backend mengelola logika dan pemrosesan data di server.</a></li>
                <li class="background-biru rounded-lg mb-2"><a href="#" class="false text-white">B. Backend bertanggung jawab untuk desain antarmuka pengguna.</a></li>
                <li class="background-biru rounded-lg mb-2"><a href="#" class="false text-white">C. Backend hanya menangani penyimpanan data di database.</a></li>
                <li class="background-biru rounded-lg mb-2"><a href="#" class="false text-white">D. Backend tidak memainkan peran penting dalam pengembangan aplikasi.</a></li>
            </ul>
        </div>
    </div>
    

            </div>
  </template>
  
  <script>
  export default {
  data() {
    return {
      reviews: [
        { nickname: "Kana", stars: 5, comment: "Senang sekali dengan penjelasan yang singkat & padat namun mudah dipahami." },
        { nickname: "John", stars: 4, comment: "Great course! Learned a lot." },
        { nickname: "Alice", stars: 5, comment: "Excellent content and presentation." },
        { nickname: "Bob", stars: 3, comment: "Some topics could be explained better." },
        { nickname: "Alpha", stars: 3, comment: "Some topics could be explained better." },
      ],
      courses: [
        {
          title: "Back-End Developer Fundamental Course",
          modules: "7 Modules",
          author: "Kiana Dmitri",
          image: "../assets/defaultImg.jpg",
        },
        {
          title: "Web Development Basics",
          modules: "5 Modules",
          author: "Kiana Dmitri",
          image: "../assets/defaultImg.jpg",
        },
        {
          title: "Introduction to Programming",
          modules: "3 Modules",
          author: "Kiana Dmitri",
          image: "../assets/defaultImg.jpg",
        },
        {
          title: "Database Management Essentials",
          modules: "4 Modules",
          author: "Kiana Dmitri",
          image: "../assets/defaultImg.jpg",
        },
        {
          title: "Cybersecurity Fundamentals",
          modules: "6 Modules",
          author: "Kiana Dmitri",
          image: "../assets/defaultImg.jpg",
        },
      ],
      modalVisible: true,
      videoElement: null,
    };
  },
  setupVideo() {
  this.videoElement = this.$refs.videoElement;
  this.videoElement.addEventListener('timeupdate', this.checkVideoTime);
  this.videoElement.addEventListener('play', this.handleVideoPlay); // Add this line
  this.videoElement.addEventListener('pause', this.handleVideoPause);
  this.videoElement.addEventListener('ended', this.handleVideoEnded);
  this.videoElement.load();
},
checkVideoTime() {
  const currentTime = this.videoElement.currentTime;
  if (currentTime >= 60 && !this.modalVisible) {
    this.modalVisible = true;
  }
},
handleVideoPlay() { 
    this.modalVisible = true;   
},
handleVideoPause() {
  this.modalVisible = false;
},
handleVideoEnded() {
  this.modalVisible = false;
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
  
  .card-review {
    background-color: #131313;
    border: #232323 solid 1px;
  }
  
  .card-stroke {
    background-color: #232323;
  }
  
  .bg-list {
    background-color: #232323;
  }
  
  .ungu {
    color: #9e96cc;
  }
  
  .reviews-container {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  
  .reviews-container::-webkit-scrollbar {
    display: none;
  }
  .card-container {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    scrollbar-width: thin; 
    scrollbar-color: transparent transparent; 
    -ms-overflow-style: none;
    scrollbar-width: none; 
  }
  
  .card-container::-webkit-scrollbar {
    display: none;
  }
  </style>
  