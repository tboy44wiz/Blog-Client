<template>
    <div class="BlogDetailsLeftAside_Comp">
        <BlogDetailsComp id="blogDetailsCompRef" :isScrollLimit="isScrollLimit" />

        <div class="comment-like__wrapper" id="commentLikeWrapper">
          <ul v-show="isScrollLimit" class="comment-like__items">
            <router-link to="#">
              <li class="comment-like__item">
                  <img :src="like_icon" width="23" class="comment-like__icons" />
                  <p>{{ blogGetter.likesCount }}</p>
              </li>
            </router-link>

            <span class="vertical_divider">|</span>

            <router-link to="#">
              <li class="comment-like__item" data-bs-toggle="modal" data-bs-target="#myModal">
                <img :src="chat_icon" width="20" class="comment-like__icons" />
                <p>{{ blogGetter.commentsCount }}</p>
              </li>
            </router-link>
          </ul>
        </div>


        <!-- ============= Comments ============== -->
        <!-- Vertically centered scrollable modal -->

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
    import { defineComponent } from "@vue/runtime-core";
    import { mapGetters } from "vuex";

    import BlogDetailsComp from "./BlogDetails_Comp/BlogDetails_Comp.vue";
    import BlogCommentsComp from "./BlogComments_Comp/BlogComments_Comp.vue";
    import like_icon from '@/assets/images/icons/like_icon.svg';
    import chat_icon from '@/assets/images/icons/chat_icon.svg'; 

    export default defineComponent({
        name: "BlogDetailsLeftAside_Comp",

        components: { 
            BlogDetailsComp,
            BlogCommentsComp,
        },

        data() {
            return {
              like_icon,
              chat_icon,
              isScrollLimit: false,
            }
        },

        computed: {
            ...mapGetters(["blogGetter"]),
        },


        methods: {
            handleScroll(event: any) {
                const compHeight = this.$el.querySelector("#blogDetailsCompRef").clientHeight;
                const commentLikeWrapperPosition = this.$el.querySelector("#commentLikeWrapper").getBoundingClientRect().top;
                let scrollYPosition = window.pageYOffset;
                this.isScrollLimit = ((compHeight - commentLikeWrapperPosition + 43) > scrollYPosition);                
            }
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

    .BlogDetailsLeftAside_Comp {
        height: min-content;
        width: $fullWidth;
        border-radius: 5px;
        position: relative;

        .comment-like__wrapper {
            margin-top: 50px;

            display: flex;
            justify-content: center;

            position: fixed;
            bottom: 55px;
            left: calc(33%);
            transform: translate(-33%, -55px);

            .comment-like__items {
            background: $secondaryColor;
            border-radius: 50px;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            font-weight: 300;
            list-style-type: none;
            padding: 10px 20px;
            z-index: 1000;
        
            display: flex;
            align-items: center;
        
            a {
                color: $primaryColor;
        
                &:hover {
                color: #727272;
                };
        
                .comment-like__item {
                margin: 0;
                display: flex;
                align-items: center;
                
                .comment-like__icons {
                    margin-right: 2px;
                };
                p {
                    margin: 0;
                    font-size: 0.9rem;
                };
                };
            };

            .vertical_divider {
                margin: 0 20px;
                color: $linkColorHover
            }
            };
        };

        hr {
            margin: 30px 20px 10px 20px;
        };
    };
</style>