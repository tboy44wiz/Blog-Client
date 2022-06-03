<template>
    <div class="BlogListLeftAsideComp">
      <article
        v-for="blog in blogsGetter"
        :key="blog.id"
        class="blog-item__wrapper mCard"
        >
        <div class="blog-item__image">
          <img :src="blogImage" class="card__image img-fluid" alt="Blog_One">
        </div>

        <div class="blog-details__wrapper">
          <div class="blog-item__date">
            <h3>{{ moment(blog.createdAt).format("DD") }}</h3>
            <p>{{ moment(blog.createdAt).format("MMM") }}</p>
          </div>

          <router-link :to="/blogs/ + blog.id" class="d-inline-block">
            <h2 class="blog__title">{{ blog.title }}</h2>
          </router-link>

          <p class="blog__content">{{ `${blog.body.slice(0, 240)}...` }}</p>

          <ul class="blog-info__items">
            <li class="blog-info__item">
                <img :src="user_icon" width="23" class="blog-info__icons" />
                <p>{{ blog.author.name }}</p>
              </li>

            <li class="blog-info__item">
                <img :src="like_icon" width="23" class="blog-info__icons" />
                <p>{{ blog.likesCount }}</p>
            </li>

            <li class="blog-info__item">
              <img :src="chat_icon" width="22" class="blog-info__icons" />
              <p>{{ blog.commentsCount }}</p>
            </li>
          </ul>
        </div>
      </article>      
    </div>
</template>

<script lang="ts">
  import {defineComponent} from "vue";
  import { mapGetters } from 'vuex';
  import moment from "moment";

  //  Import assets.
  import user_icon from '@/assets/images/icons/user2_icon.svg';
  import like_icon from '@/assets/images/icons/like_icon.svg';
  import chat_icon from '@/assets/images/icons/chat_icon.svg';
  import blogImage from '@/assets/images/blog/single_blog_1.png';

  export default defineComponent ({
    name: 'BlogListLeftAside_Comp',

    data() {
      return {
        moment,

        user_icon,
        like_icon,
        chat_icon,
        blogImage,
      };
    },


    computed: {
      ...mapGetters(["blogsGetter"]),
    }
  });
</script>

<style lang="scss" scoped>
  @import "BlogListLeftAside_Comp";
</style>
