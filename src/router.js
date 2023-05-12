import {createRouter, createWebHistory} from 'vue-router';
import HomeComponent from "@/components/HomeComponent.vue";
import TableComponent from "@/components/TableComponent.vue";
import PageNotFoundComponent from "@/components/PageNotFoundComponent.vue";
import PostComponent from "@/components/PostComponent.vue";

const routes =[
    { path: '/home', component: HomeComponent},
    { path: '/', redirect: { path: '/home' }},
    { path: '/records', component: TableComponent},
    {path:'/posts/:id',component: PostComponent},
    { path:'/:pathMatch(.*)*', component: PageNotFoundComponent}
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router