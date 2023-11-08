<template lang="html">
    <!-- belajar tanpa batas -->
    <div class="container mb-8">
        <div class="flex justify-center px-4 -mt-0  md:-mt-14 md:px-0 items-center">

            <div class="description text-white">
                <h1 class="text-2xl md:text-5xl mb-3 font-bold"><span class="biru">Belajar</span> Tanpa Batas</h1>
                <h3 class="text-sm md:text-lg mb-1">dan lebih interaktif bersama pengajar - pengajar <br> berkompeten.</h3>
                <h6 class="text-xs  md:text-sm">Dapatkan berbagai benefit dan penawaran menarik <br>
                    saat daftar pertama kali, Yuk <router-link to="" class="biru">Daftar Sekarang.</router-link></h6>

                    <div class="buttonStart w-36 md:w-56 rounded-lg flex justify-between p-3 mt-3">
                        <router-link  to="" class="text-xs">Mulai Sekarang</router-link>
                        <span class="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 17 15" fill="none">
                            <path d="M2.7244 14.3264L13.228 5.01872L14.0798 11.1165C14.0997 11.2578 14.1525 11.3944 14.2351 11.5186C14.3178 11.6428 14.4287 11.752 14.5615 11.8401C14.8297 12.018 15.1709 12.099 15.5101 12.0652C15.8493 12.0314 16.1586 11.8856 16.3701 11.6599C16.5815 11.4342 16.6778 11.1471 16.6376 10.8617L15.4694 2.46669C15.4547 2.40473 15.4346 2.34376 15.4092 2.28428C15.3626 2.24702 15.3789 2.18543 15.35 2.13247C15.2832 2.01146 15.1903 1.90189 15.0762 1.80928C14.9603 1.71814 14.8255 1.64582 14.6784 1.59595C14.6318 1.55869 14.5595 1.57557 14.4951 1.55401C14.4232 1.53578 14.3498 1.52203 14.2755 1.51287L4.25101 0.965814C4.06245 0.955486 3.8735 0.980241 3.6976 1.03832C3.5217 1.0964 3.36317 1.18637 3.23329 1.30185C3.02593 1.48488 2.90129 1.72322 2.88101 1.97551C2.86963 2.11753 2.89167 2.26005 2.94585 2.3949C3.00004 2.52975 3.08531 2.65428 3.19678 2.76135C3.30825 2.86843 3.44373 2.95595 3.59546 3.01891C3.7472 3.08186 3.9122 3.11901 4.08102 3.12823L11.3626 3.52837L0.858947 12.8361C0.624062 13.0442 0.497067 13.3224 0.505899 13.6093C0.51473 13.8962 0.658665 14.1684 0.90604 14.3661C1.15341 14.5637 1.48396 14.6706 1.82497 14.6631C2.16598 14.6557 2.48951 14.5346 2.7244 14.3264Z" fill="white"/>
                        </svg></span>
                    </div>
                </div>
                
                <div class="iconImg">
                    <img src="../assets/pageLogo1.png" class="w-96" alt="">
                </div>

            </div>
    </div>

    <!-- sponsor -->
    <div class="sponsor flex justify-center flex-col items-center">
        <h1 class="text-white text-sm mb-2">Partner Kami</h1>
        <div class="imgSponsor flex gap-5">
            <img src="../assets/partner_smk1.png" class="w-12" alt="">
            <img src="../assets/partner2.png" class="w-12" alt="">
        </div>
    </div>

    <!-- tujuan -->
    <div class="container mt-12 px-1 mb-16">
        <div class="flex justify-center items-center">
            <div class="iconTujuan">
                <img src="../assets/pageLogo2.png" class="w-96" alt="">
            </div>

            <div class="desc">
                <h3 class="title text-lg md:text-2xl text-white font-medium mb-2">Apa Tujuan <span class="biru">Kelas Merdeka?</span></h3>
                <p class="text-white text-xs md:text-base/6 font-sans mb-2 w-32  md:w-96">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia odio soluta 
                     recusandae quo, ratione rem aliquam nulla et facilis porro blanditiis,
                     eveniet excepturi repellat nisi nihil aperiam doloribus enim asperiores.</p>
    
                <router-link to="" class="biru text-xs md:text-sm">Jelajahi Sekarang</router-link>
            </div>

        </div>

    </div>

    <learningPath></learningPath>

    <hallOfFame></hallOfFame>



    <div class="container mt-24 px-6">

        
        <div class="title">
            <h1 class="text-white text-2xl text-center mb-12">Bergabung Dengan Kami</h1>
        </div>
        <div class="flex justify-center items-center  md:px-0"> 
        
            <div class="desc">
                <h1 class="text-white text-lg md:text-2xl font-medium mb-2 md:mb-6 w-auto md:w-96">Menjadi Salah Satu Pengajar Di <span class="biru">Kelas Merdeka</span></h1>
                <p class="text-white text-sm md:text-base mb-1 md:mb-5 w-auto md:w-72">Bergabung dengan kami menjadi salah satu pengajar dan dapatkan berbagai benefit menarik</p>
                <router-link to="" class="biru text-sm">Gabung Sekarang</router-link>
            </div>
    
            <div class="iconImg">
                <img src="../assets/pageLogo3.png" class="w-96" alt="">
            </div>


        </div>
    </div>

    <testiMoni2></testiMoni2>


</template>
<script>
import learningPath from "./top_path.vue"
import hallOfFame from "./hallOfFame.vue"
import testiMoni2 from "./testimoni.vue"

export default {
    name : "homePage",
    components : {
        learningPath,
        hallOfFame,
        testiMoni2,
    }
}
</script>
<style lang="css">

.biru{
    color: #677efe;
}

.buttonStart{
    background-color: #677efe;
}
    
</style>