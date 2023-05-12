<script setup>
import ToolbarComponent from "@/components/ToolbarComponent.vue";
</script>

<template>
    <div class="container">
        <ToolbarComponent></ToolbarComponent>
        <router-view></router-view>
    </div>

</template>

<style scoped>
.container{
    min-height: 100vh;
    background-color: #f2f2f2;
}
</style>