<script setup>
import topLayer from "./components/header.vue";
import master from "./components/master.vue";
if (window.localStorage.getItem("theme")) {
    document.documentElement.classList.add("dark");
}
</script>
<template>
    <div class="parent w-[100%] sm:w-[70%] md:w-[65%] xl:w-[50%] px-[20px]">
        <topLayer />
        <master />
    </div>
</template>
<style lang="scss"></style>
