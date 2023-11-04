<template lang="html">
    <div class="container mt-14 mb-14 md:mb-24">
      <div class="title mb-4 md:mb-12">
        <h1 class="text-center text-white text-xl text-semibold md:text-2xl">Testimoni Siswa</h1>
      </div>
  
      <div class="testimonial-container">
        <div class="testimonial-wrapper flex justify-end" ref="testimonialWrapper">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="card-testi flex-shrink-0 w-96 p-3 rounded-2xl mb-5"
          >
            <div class="profile flex justify-start items-center gap-2 mb-3">
              <img src="../assets/profile_default.jpg" class="w-10 rounded-full" alt="">
              <div class="profile-desc text-white">
                <h1 class="username font-semibold">{{ testimonial.username }}</h1>
                <p class="title font-medium text-sm">{{ testimonial.title }}</p>
              </div>
            </div>
  
            <div class="comment text-white">
              <p class="text-sm">{{ testimonial.comment }}</p>
            </div>
  
            <div class="rating flex justify-end">
              <span class="star" v-for="i in testimonial.rating" :key="i">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 31 29" fill="none">
                  <path
                    d="M15.5 0L18.98 10.7102H30.2414L21.1307 17.3295L24.6107 28.0398L15.5 21.4205L6.38933 28.0398L9.8693 17.3295L0.758624 10.7102H12.02L15.5 0Z"
                    fill="#677EFE"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
  
        <div class="testimonial-container">
          <div class="testimonial-wrapper flex justify-start" ref="testimonialWrapper2">
            <div
              v-for="testimonial in testimonials2"
              :key="testimonial.id"
              class="card-testi flex-shrink-0 w-96 p-3 rounded-2xl mb-5"
            >
              <div class="profile flex justify-start items-center gap-2 mb-3">
                <img src="../assets/profile_default.jpg" class="w-10 rounded-full" alt="">
                <div class="profile-desc text-white">
                  <h1 class="username font-semibold">{{ testimonial.username }}</h1>
                  <p class="title font-medium text-sm">{{ testimonial.title }}</p>
                </div>
              </div>
  
              <div class="comment text-white">
                <p class="text-sm">{{ testimonial.comment }}</p>
              </div>
  
              <div class="rating flex justify-end">
                <span class="star" v-for="i in testimonial.rating" :key="i">
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 31 29" fill="none">
                    <path
                      d="M15.5 0L18.98 10.7102H30.2414L21.1307 17.3295L24.6107 28.0398L15.5 21.4205L6.38933 28.0398L9.8693 17.3295L0.758624 10.7102H12.02L15.5 0Z"
                      fill="#677EFE"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "testiMoni2",
    data() {
      return {
        testimonials: [
          {
            id: 1,
            username: "Leon S Kennedy",
            title: "Murid Sok Asik",
            comment: "Pengajarnya asik dan materi yang disampaikan mudah untuk dipahami, pokoknya gak nyesel beli course di Kelas Merdeka",
            rating: 5,
          },
          {
            id: 2,
            username: "Kiana Dmitri",
            title: "Full stack Developer",
            comment: "Pengajarnya asik dan materi yang disampaikan mudah untuk dipahami, pokoknya gak nyesel beli course di Kelas Merdeka",
            rating: 5,
          },
          {
            id: 3,
            username: "Kiana Dmitri",
            title: "Full stack Developer",
            comment: "Pengajarnya asik dan materi yang disampaikan mudah untuk dipahami, pokoknya gak nyesel beli course di Kelas Merdeka",
            rating: 5,
          },
        ],
        currentIndex: 0,
        intervalId: null,
        
        testimonials2: [
            {
            id: 1,
            username: "Leon S Kennedy",
            title: "Murid Sok Asik",
            comment: "Pengajarnya asik dan materi yang disampaikan mudah untuk dipahami, pokoknya gak nyesel beli course di Kelas Merdeka",
            rating: 5,
            },
            {
            id: 2,
            username: "Claire Redfield",
            title: "Pembelajaran Menyenangkan",
            comment: "Kelas Merdeka membuat pembelajaran begitu menyenangkan. Saya benar-benar menikmati setiap materi dan mendapatkan pemahaman yang kuat. Terima kasih!",
            rating: 5,
            },

            {
            id: 3,
            username: "Jill Valentine",
            title: "Kelas Merdeka Luar Biasa!",
            comment: "Saya sangat puas dengan kualitas pengajaran di Kelas Merdeka. Materi-materi yang diberikan sangat bermanfaat dan pengajarannya menyenangkan. Terima kasih banyak!",
            rating: 5,
            },

            {
            id: 4,
            username: "Alex Johnson",
            title: "Kelas Merdeka Luar Biasa!",
            comment: "Saya merasa sangat termotivasi setelah mengikuti Kelas Merdeka. Pengajarannya tidak hanya informatif tetapi juga menginspirasi. Saya sangat puas dengan pengalaman belajar saya.",
            rating: 5,
            },

            {
              id: 5,
              username: "David Brown",
              title: "Pengalaman Belajar yang Memuaskan",
              comment: "Kelas Merdeka memberikan pengalaman belajar yang memuaskan. Materi disajikan dengan baik, dan ada banyak sumber daya tambahan yang membantu pemahaman. Saya sangat mengapresiasi upaya tim Kelas Merdeka.",
              rating: 5,
            }



        ],
        currentIndex2: 0,
        intervalId2: null,
      };
    },
    mounted() {
    this.setupTestimonialCarousel();
    this.setupTestimonialCarousel2();
  },
  methods: {
    setupTestimonialCarousel() {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex - 1) % this.testimonials.length;
        this.updateCarousel();
      }, 3000);
    },
    updateCarousel() {
      const wrapper = this.$refs.testimonialWrapper;
      const cardWidth = wrapper.children[0].offsetWidth;

      wrapper.style.transform = `translateX(${-this.currentIndex * cardWidth}px)`;
    },

    setupTestimonialCarousel2() {
      this.intervalId2 = setInterval(() => {
        this.currentIndex2 = (this.currentIndex2 + 1) % this.testimonials2.length;
        this.updateCarousel2();
      }, 3000);
    },
    updateCarousel2() {
      const wrapper2 = this.$refs.testimonialWrapper2;
      const cardWidth2 = wrapper2.children[0].offsetWidth;

      wrapper2.style.transform = `translateX(${-this.currentIndex2 * cardWidth2}px)`;
    },
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalId2);
  },
};
  </script>
  
  <style lang="css">
  .testimonial-container {
    overflow-x: hidden;
    position: relative;
  }
  
  .testimonial-wrapper {
    transition: transform 0.5s ease-in-out;
  }
  
  .card-testi {
    border: #232323 solid 1px;
    background-color: #131313;
    margin-right: 10px;
  }
  </style>
  