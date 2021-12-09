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
                <Icon icon="flat-color-icons:search" width="26" />
              </button>
            </div>
          </div>
        </form>
      </section>

      <!--  Category Section  -->
      <section class="category__wrapper">
        <h4 class="section__title">Categories</h4>
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
        <h4 class="section__title">Recent Posts</h4>
        <ul class="post-list_wrapper">
          <li class="post-list-item__wrapper">
            <img :src="postImage_1" class="img-fluid" alt="Post_Image" />
            <div class="post-detail__wrapper">
              <router-link to="#">
                <h5>From life was you fish...</h5>
              </router-link>
              <p>2 Hours ago</p>
            </div>
          </li>
          <li class="post-list-item__wrapper">
            <img :src="postImage_2" class="img-fluid" alt="Post_Image" />
            <div class="post-detail__wrapper">
              <router-link to="#">
                <h5>The Amazing Hubble Hubble</h5>
              </router-link>
              <p>May 7, 2021</p>
            </div>
          </li>
          <li class="post-list-item__wrapper">
            <img :src="postImage_3" class="img-fluid" alt="Post_Image" />
            <div class="post-detail__wrapper">
              <router-link to="#">
                <h5>Astronomy Or Astrology</h5>
              </router-link>
              <p>Sep 26, 2020</p>
            </div>
          </li>
        </ul>
      </aside>

      <!--  Post tags Section  -->
      <aside class="post-tag__wrapper">
        <h4 class="section__title">Tags</h4>
        <ul class="tag-list__wrapper">
          <li v-for="blogTag in blogTags"
              class="tag-list__item">
            <router-link to="#" :key="blogTag">{{ blogTag }}</router-link>
          </li>
        </ul>
      </aside>
    </div>
</template>

<script lang="ts">
  import {defineComponent} from "vue";
  import {Icon} from "@iconify/vue";

  //  Import assets.
  import postImage_1 from '@/assets/images/blog/post_1.png';
  import postImage_2 from '@/assets/images/blog/post_2.png';
  import postImage_3 from '@/assets/images/blog/post_3.png';

  export default defineComponent ({
    name: 'BlogListRightAside_Comp',

    components: {
      Icon,
    },

    data() {
      return {
        postImage_1,
        postImage_2,
        postImage_3,

        blogTags: ["HTML", "CSS", "JavaScript", "NodeJS", "ReactJS", "VueJS", "Svelte", "Dart", "Flutter", "Java", "Kotlin", "Swift"],
      };
    },
  });
</script>

<style lang="scss" scoped>
  @import "BlogListRightAside_Comp";
</style>
