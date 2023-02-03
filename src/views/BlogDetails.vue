<template>
    <div class="BlogDetails">
        <div class="container">
            <div class="row">
                <!--   Blog Details Left Side   -->
                <section class="col-lg-8">
                    <BlogDetailsLeftAsideComp id="blogDetailsLeftAsideCompRef" :isScrollLimit="isScrollLimit" />
                </section>

                <!--   Blog Details Right Side   -->
                <section class="col-lg-4 mt-sm-5 mt-md-0">
                    <BlogDetailsRightAsideComp />
                </section>
            </div>
        </div>

        <!-- The Modal -->
        <div class="modal fade" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false">
            <div class="modal-dialog modal-lg modal-dialog-scrollable">
                <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h2 class="modal-title">Comments (13)</h2>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <BlogCommentsComp />
                </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import { mapActions, mapGetters } from "vuex";

    import BlogDetailsLeftAsideComp from "@/components/pages/blog_details/BlogDetailsLeftAside_Comp/BlogDetailsLeftAside_Comp.vue";
    import BlogDetailsRightAsideComp from "@/components/pages/blog_details/BlogDetailsRightAside_Comp/BlogDetailsRightAside_Comp.vue";
    import BlogCommentsComp from "@/components/pages/blog_details/BlogComments_Comp/BlogComments_Comp.vue";
    import like_icon from '@/assets/images/icons/like_icon.svg';
    import chat_icon from '@/assets/images/icons/chat_icon.svg'; 

    export default defineComponent({
        name: "BlogDetails",

        components: {
            BlogDetailsLeftAsideComp,
            BlogDetailsRightAsideComp,
            BlogCommentsComp,
        },


        data() {
            return {
                like_icon,
                chat_icon,
                isScrollLimit: false,
                blogId: this.$route.params.id,
            }
        },


        methods: {
            ...mapActions(["getSingleBlog"]),
            handleScroll(event: any) {
                const compHeight = this.$el.querySelector("#blogDetailsLeftAsideCompRef").clientHeight;
                const commentLikeWrapperPosition = this.$el.querySelector("#commentLikeWrapper").getBoundingClientRect().top;
                let scrollYPosition = window.pageYOffset;
                this.isScrollLimit = ((compHeight - commentLikeWrapperPosition + 43) > scrollYPosition);                
            }
        },


        computed: {
            ...mapGetters(["blogGetter"]),
        },

        beforeMount() {
            this.getSingleBlog({blogId: this.blogId});
        },

        mounted() {
            window.addEventListener("scroll", this.handleScroll);
        },

        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        },
        
    });
</script>



<style lang="scss" scoped>
    @import "src/assets/styles/GlobalStyle";

    .BlogDetails {
        height: auto;
        width: $fullWidth;
        padding: 150px 0 60px 0;
    };

    @media screen and (max-width: 680px) {
        .BlogDetails {
            margin-top: 20px;
        };
    };

</style>