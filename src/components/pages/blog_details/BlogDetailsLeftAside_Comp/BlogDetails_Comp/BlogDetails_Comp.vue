<template>
    <div class="BlogDetails_Comp mCard">
        <h2 class="blog__title">{{ blogGetter.title }}</h2>

        <ul class="blog-info__items">
          <router-link to="#">
            <li class="blog-info__item">
              <img :src="user_icon" width="23" class="blog-info__icons" />
              <p v-if="blogGetter.author">{{ blogGetter.author.name }}</p>
            </li>
          </router-link>

          <router-link to="#">
            <li class="blog-info__item">
                <img :src="calendar_icon" width="23" class="blog-info__icons" />
                <p>{{ moment(blogGetter.createdAt).format("MMM d, YYYY") }}</p>
            </li>
          </router-link>
        </ul>

        <img :src="SingleBlogImage" class="image-fluid blog__image" alt="Single Blog Image" />
        <p class="blog-body__wrapper">{{ blogGetter.body }}</p>

        <div className="share-blog__wrapper">
            <p>share post</p>
            
            <div class="social-icons__wrapper">
              <a :href="shareLink" target="_blank" @click="socialMediaShare({
                shareTitle: blogGetter.title,
                socialName: 'Facebook',
              })">
                <Icon icon="ei:sc-facebook" class="social-media__icons" />
              </a>

              <a :href="shareLink" target="_blank" @click="socialMediaShare({
                shareTitle: blogGetter.title,
                socialName: 'Twitter',
              })">
                <Icon icon="ci:twitter" class="social-media__icons" />
              </a>

              <a :href="shareLink" target="_blank" @click="socialMediaShare({
                shareTitle: blogGetter.title,
                socialName: 'LinkedIn',
              })">
                <Icon icon="ci:linkedin" class="social-media__icons" />
              </a>

              <a :href="shareLink" target="_blank" @click="socialMediaShare({
                shareTitle: blogGetter.title,
                socialName: 'WhatsApp',
              })">
                <Icon icon="jam:whatsapp" class="social-media__icons" />
              </a>

              <a :href="shareLink" title="Copy Link" @click="socialMediaShare({
                shareTitle: blogGetter.title,
                socialName: 'Link',
              })">
                <Icon icon="bx:link" class="social-media__icons" />
              </a>
            </div>
        </div>

        <div class="comment-like__wrapper">
          <ul v-show="!isScrollLimit" class="comment-like__items">
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


        <button class="comment_button" data-bs-toggle="modal" data-bs-target="#myModal">Comment</button>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import { mapGetters, mapActions } from "vuex";
    import moment from "moment";

    import user_icon from '@/assets/images/icons/user2_icon.svg';
    import calendar_icon from '@/assets/images/icons/calendar_icon.svg';
    import like_icon from '@/assets/images/icons/like_icon.svg';
    import chat_icon from '@/assets/images/icons/chat_icon.svg';
    import { Icon } from "@iconify/vue";

    // Import image assets.
    import SingleBlogImage from "@/assets/images/blog/single_blog_3.png";

    export default defineComponent({
        name: "BlogDetails_Comp",

        components: {
            Icon
        },

        props: ["isScrollLimit"],

        data() {
            return {
              moment,
              user_icon,
              calendar_icon,
              like_icon,
              chat_icon,
              SingleBlogImage,

              blogPageLink: encodeURI(document.location.href),
              shareLink: "",
            };
        },


        computed: {
          ...mapGetters(["blogGetter", "blogDetailTagsGetter"]),
        },


        methods: {
          // ...mapActions(["socialMediaShare"]),

          socialMediaShare({ shareTitle, socialName }: { shareTitle: string; socialName: string }) {

          /**
           * Social Share Links:
           * https://crunchify.com/list-of-all-social-sharing-urls-for-handy-reference-social-media-sharing-buttons-without-javascript/
           * 
           * Alternatively, use Vue NPM Package as pasted below.
           * 
           * https://www.360learntocode.com/2022/01/how-to-implement-social-media-share.html  (NPM Docs)
           * 
           * 
           * Facebook:
           * https://www.facebook.com/sharer.php?u=[post-url]
           * 
           * 
           * Twitter:
           * https://twitter.com/share?url=[post-url]&text=[post-title]
           * OR with HashTag
           * https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]
           * 
           * 
           * LinkedIn:
           * https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]
           * 
           * 
           * WhatsApp:
           * https://wa.me/?text=[post-title] [post-url]
           */

            switch (socialName) {
              case 'Facebook':
                this.shareLink = `https://www.facebook.com/sharer.php?u=${this.blogPageLink}&t=${shareTitle}/`;
                break;
            
              case 'Twitter':
                this.shareLink = `https://twitter.com/share?url=${this.blogPageLink}&text=${shareTitle}&hashtags=${ this.blogDetailTagsGetter }`;
                break;
            
              case 'LinkedIn':
                this.shareLink = `https://www.linkedin.com/shareArticle?mini=true&source=${this.blogPageLink}&title=${shareTitle}/`;
                break;
            
              default:
                this.shareLink = `https://wa.me/?text=${shareTitle} ${this.blogPageLink}/`;
                break;
            }

            console.log(this.blogGetter.tags);
            
          }
        },

    });
</script>

<style lang="scss" scoped>
    @import "BlogDetails_Comp";
</style>