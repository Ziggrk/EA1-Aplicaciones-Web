<script>
import {PostService} from "@/services/post.service";

export default {
    name: "gridPopularPosts",
    components: {},
    data(){
        return{
            posts:[],
            size: 0,
            postsService : new PostService()
        }
    },
    methods:{
        getOtherPosts(){
            this.postsService.getAll().then((response)=>{
               this.size = response.data.length;
               console.log(this.size);
               this.postsService.getOthersPosts(this.size).then((response)=>{
                  console.log(response);
               });
            });
        },
        getPopularPosts(){
            this.postsService.getPopularPosts().then((response)=>{
               this.posts = response.data;
               console.log(this.posts);
            });
        },
        updateLike(body){
            body.likes = body.likes + 1;
            console.log('Id: '+body.id);
            console.log('Likes: '+body.likes);
            this.postsService.update(body.id,body).then((response)=>{
                console.log(response);
            });
        }

    },
    beforeMount() {
        this.getPopularPosts();
    }
}
</script>

<template>
    <div class=grid>
        <div v-for="post in posts" :key="post.id">
            <pv-card>
                <template #title>{{post.title}}</template>
                <template #subtitle>{{$t('views')}}: {{post.views}}</template>
                <template #content>
                    <p>{{post.content}}</p>
                </template>
                <template #footer>
                    <pv-button class="footer-button" :label="post.likes +' '+ $t('like')" icon="pi pi-heart" @click="updateLike(post)"></pv-button>
                    <router-link :to="'/posts/' + post.id">
                        <pv-button class="footer-button" :label="$t('seeMore')" icon="pi pi-ellipsis-h"></pv-button>
                    </router-link>
                </template>
            </pv-card>
        </div>
    </div>

</template>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;
    margin: 10px;
}
.footer-button{
    margin-right:20px;
}
</style>