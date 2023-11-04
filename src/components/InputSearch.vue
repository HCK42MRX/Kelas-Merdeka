<template>
  <div class="relative">
    <input
      type="text" name="" id="" class="py-2 w-40 px-1 ps-7 text-white rounded-lg bg-transparent searchBar focus:outline-none"
      placeholder="Cari Sesuatu.."/>
      
    <span class="absolute top-2.5 left-2 text-sm searchIcon"
      ><i class="fa-solid fa-magnifying-glass"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "searchBar",
};
</script>

<style lang="css">

.searchBar::placeholder {
  color: #9e96cc;
}

.searchBar {
  border: 1px solid #9e96cc;
}

.searchIcon {
  color: #9e96cc;
}
</style>
