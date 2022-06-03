<template>
    <div class="BlogListRightAsideComp">

      <!--  Search Box  -->
      <section class="search__wrapper">
        <form class="search__form">
          <div class="form-group">
            <div class="input-and-button__wrapper">
              <input type="text" class="form-control"
                     placeholder='Search Keyword'
                     onfocus="this.placeholder = ''"
                     onblur="this.placeholder = 'Search Keyword'"
              >
              <button class="search__button" type="submit">
                <img :src="search_icon" width="26" />
              </button>
            </div>
          </div>
        </form>
      </section>

      <!--  Category Section  -->
      <section class="category__wrapper">
        <h5 class="section__title">Categories</h5>
        <ul class="category__list">
          <li class="category__list-item">
            <router-link to="#" class="link__wrapper">
              <p>Back End</p> &nbsp;
              <small>(05)</small>
            </router-link>
          </li>
          <li class="category__list-item">
            <router-link to="#" class="link__wrapper">
              <p>Front End</p> &nbsp;
              <small>(18)</small>
            </router-link>
          </li>
          <li class="category__list-item">
            <router-link to="#" class="link__wrapper">
              <p>Mobile Dev</p> &nbsp;
              <small>(12)</small>
            </router-link>
          </li>
          <li class="category__list-item">
            <router-link to="#" class="link__wrapper">
              <p>DevOps</p> &nbsp;
              <small>(04)</small>
            </router-link>
          </li>
          <li class="category__list-item">
            <router-link to="#" class="link__wrapper">
              <p>Others</p> &nbsp;
              <small>(03)</small>
            </router-link>
          </li>
        </ul>
      </section>

      <!--  Recent Post Section  -->
      <aside class="recent-post__wrapper">
        <h5 class="section__title">Recent Posts</h5>
        <ul class="post-list_wrapper">
          <li 
            v-for="post in recentBlogsGetter" 
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
      </aside>

      <!--  Blog tags Section  -->
      <aside class="blog-tag__wrapper">
        <h5 class="section__title">Look out to your favorites</h5>
        <ul class="tag-list__wrapper">
          <li v-for="blogTag in blogTagsGetter" :key="blogTag" class="tag-list__item">
            <router-link to="#" :key="blogTag">{{ blogTag }}</router-link>
          </li>
        </ul>
      </aside>
    </div>
</template>

<script lang="ts">
  import {defineComponent} from "vue";
  import { mapGetters } from "vuex";
  import {Icon} from "@iconify/vue";
  

  //  Import assets.
  import search_icon from '@/assets/images/icons/search_icon.svg';

  export default defineComponent ({
    name: 'BlogListRightAside_Comp',

    components: {
      Icon,
    },

    data() {
      return {
        search_icon,
      };
    },

    computed: {
      ...mapGetters(["recentBlogsGetter", "blogTagsGetter"]),
    }
  });
</script>

<style lang="scss" scoped>
  @import "BlogListRightAside_Comp";
</style>
