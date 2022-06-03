<template>
    <div class="BlogDetailsRightAside_Comp">

        <!--  Post tags Section  -->
        <section class="blog-tag__wrapper">
            <h5 class="section__title">Tags</h5>
            <ul class="tag-list__wrapper">
                <li v-for="blogTag in blogDetailTagsGetter" :key="blogTag" class="tag-list__item">
                    <router-link to="#" :key="blogTag">{{ blogTag }}</router-link>
                </li>
            </ul>
        </section>

        <!--  Latest Posts Section  -->
        <section class="suggested-post__wrapper">
            <h5 class="section__title">Suggested Posts</h5>
            
            <ul class="post-list_wrapper">
                <li 
                    v-for="post in suggestedBlogsGetter" 
                    :key="post.id"
                    class="post-list-item__wrapper"
                    >

                    <img :src="post.image" class="img-fluid" alt="Post_Image" />
                    
                    <div class="post-detail__wrapper">
                    <router-link to="#">
                        <h5>{{ post.title }}</h5>
                    </router-link>
                    <p>{{ post.date }}</p>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>




<script lang="ts">
    import { defineComponent } from "vue";
    import { mapGetters } from "vuex";

    export default defineComponent({
        name: "BlogDetailsRightAside_Comp",

        data() {
            return {};
        },

        computed: {
            ...mapGetters(["suggestedBlogsGetter", "blogDetailTagsGetter"])
        }
    });
</script>



<style lang="scss" scoped>
    @import "BlogDetailsRightAside_Comp";
</style>