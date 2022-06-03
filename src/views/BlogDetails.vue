<template>
    <div class="BlogDetails">
        <div class="container">
            <div class="row">
                <div class="col-12">

                    <div class="row my-2 my-md-5">

                        <!--   Blog Details Left Side   -->
                        <section class="col-lg-8">
                            <BlogDetailsLeftAsideComp />
                        </section>

                        <!--   Blog Details Right Side   -->
                        <section class="col-lg-4 mt-sm-5 mt-md-0">
                            <BlogDetailsRightAsideComp />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import { mapActions } from "vuex";

    import BlogDetailsLeftAsideComp from "@/components/pages/blog_details/BlogDetailsLeftAside_Comp/BlogDetailsLeftAside_Comp.vue";
    import BlogDetailsRightAsideComp from "@/components/pages/blog_details/BlogDetailsRightAside_Comp/BlogDetailsRightAside_Comp.vue";

    export default defineComponent({
        name: "BlogDetails",

        components: {
            BlogDetailsLeftAsideComp,
            BlogDetailsRightAsideComp,
        },


        data() {
            return {
                blogId: this.$route.params.id,
            }
        },


        methods: {
            ...mapActions(["getSingleBlog"]),
        },


        beforeMount() {
            this.getSingleBlog({blogId: this.blogId});
        },
        
    });
</script>



<style lang="scss" scoped>
    @import "src/assets/styles/GlobalStyle";

    .BlogDetails {
        height: auto;
        width: $fullWidth;
        margin-top: 50px;
        padding: 30px 0 60px 0;
    };

    @media screen and (max-width: 680px) {
        .BlogDetails {
            margin-top: 20px;
        };
    };

</style>