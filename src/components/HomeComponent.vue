<script>

import CardComponent from "@/components/CardComponent.vue";
import PopularPosts from "@/components/GridPopularPostsComponent.vue";
import GridPopularPosts from "@/components/GridPopularPostsComponent.vue";
import OtherPostsComponent from "@/components/OtherPostsComponent.vue";

export default {
    components: {OtherPostsComponent, GridPopularPosts, PopularPosts, CardComponent}
}
</script>

<template>
    <br/>
    <GridPopularPosts/>
    <br/>
    <OtherPostsComponent/>
</template>

<style scoped>
.card-container{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    min-height: 80vh;
}
</style>