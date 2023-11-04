<template lang="html">
    <div class="container">
        <div class="title text-white text-center mb-11">
            <h1 class="text-lg md:text-xl mb-3">Top Learning Path</h1>
            <p class="text-sm md:text-sm">Tersedia path yang sedang trending di <br> tahun ini</p>
        </div>

        <div class="grid grid-cols-3">
            
            <div class="card text-white flex flex-col justify-center items-center mb-16 ml-0 md:ml-24">
                <img src="../assets/uiux.png" class="w-16 mb-4 md:w-24" alt="" srcset="">
                <p class="text-xs md:text-lg">UI/UX Design </p>
            </div>

            <div class="card text-white flex flex-col justify-center items-center mb-16">
                <img src="../assets/backend.png" class="w-16 mb-4 md:w-24" alt="" srcset="">
                <p class="text-xs md:text-lg">Back-End Developer </p>
            </div>

            <div class="card text-white flex flex-col justify-center items-center mb-16 mr-0 md:mr-24">
                <img src="../assets/frontend.png" class="w-16 mb-4 md:w-24" alt="" srcset="">
                <p class="text-xs md:text-lg text-center">Front-End Developer </p>
            </div>

            <div class="card text-white flex flex-col justify-center items-center ml-0 md:ml-24">
                <img src="../assets/machineLearning.png" class="w-16 mb-4 md:w-24" alt="" srcset="">
                <p class="text-xs md:text-lg">Machine Learning </p>
            </div>

            <div class="card text-white flex flex-col justify-center items-center">
                <img src="../assets/cyberSecurity.png" class="w-16 mb-4 md:w-24" alt="" srcset="">
                <p class="text-xs md:text-lg">Cyber Security </p>
            </div>

            <div class="card text-white flex flex-col justify-center items-center mr-0 md:mr-24">
                <img src="../assets/dataAnalyst.png" class="w-16 mb-4 md:w-24" alt="" srcset="">
                <p class="text-xs md:text-lg">Data Analyst </p>
            </div>

        </div>

    </div>
</template>
<script>
export default {
    name : "LearningPath"
}
</script>
<style lang="">
    
</style>