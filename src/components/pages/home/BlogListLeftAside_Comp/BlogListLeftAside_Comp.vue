<template>
    <div class="BlogListLeftAsideComp">
      <article class="blog-item__wrapper mCard">
        <div class="blog-item__image">
          <img class="card__image img-fluid" :src="blogImage_1" alt="Blog_One">
        </div>

        <div class="blog-details__wrapper">
          <router-link to="#" class="blog-item__date">
            <h3>15</h3>
            <p>Jan</p>
          </router-link>

          <router-link to="/blog_details" class="d-inline-block">
            <h2 class="blog__title">Google inks pact for new 35-storey office</h2>
          </router-link>

          <p class="blog__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud  commodo consequat.
          </p>
          <ul class="blog-info__items">
            <li class="blog-info__item">
              <router-link to="#">
                <Icon icon="flat-color-icons:businessman" width="21" class="blog-info__icons" />
                <p>Travel, Lifestyle</p>
              </router-link>
            </li>
            <!--  <li class="blog-info__item">|</li>
            <li class="blog-info__item">
              <router-link to="#">
                <Icon icon="flat-color-icons:clock" width="20" class="blog-info__icons" />
                <p>Jan 1, 2020</p>
              </router-link>
            </li>-->
            <li class="blog-info__item">|</li>
            <li class="blog-info__item">
              <router-link to="#">
                <Icon icon="flat-color-icons:faq" width="20" class="blog-info__icons" />
                <p>03 Comments</p>
              </router-link>
            </li>
          </ul>
        </div>
      </article>

      <article class="blog-item__wrapper mCard">
        <div class="blog-item__image">
          <img class="card__image img-fluid" :src="blogImage_2" alt="Blog_One">
        </div>

        <div class="blog-details__wrapper">
          <router-link to="#" class="blog-item__date">
            <h3>15</h3>
            <p>Jan</p>
          </router-link>

          <router-link to="/blog_details" class="d-inline-block">
            <h2 class="blog__title">Google inks pact for new 35-storey office</h2>
          </router-link>

          <p class="blog__content">
            Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et
            laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque
            deleniti aperiam unde soluta.
          </p>
          <ul class="blog-info__items">
            <li class="blog-info__item">
              <router-link to="#">
                <Icon icon="flat-color-icons:businessman" width="21" class="blog-info__icons" />
                <p>Travel, Lifestyle</p>
              </router-link>
            </li>
            <!--  <li class="blog-info__item">|</li>
            <li class="blog-info__item">
              <router-link to="#">
                <Icon icon="flat-color-icons:clock" width="20" class="blog-info__icons" />
                <p>Jan 1, 2020</p>
              </router-link>
            </li>-->
            <li class="blog-info__item">|</li>
            <li class="blog-info__item">
              <router-link to="#">
                <Icon icon="flat-color-icons:faq" width="20" class="blog-info__icons" />
                <p>03 Comments</p>
              </router-link>
            </li>
          </ul>
        </div>
      </article>

      <article class="blog-item__wrapper mCard">
        <div class="blog-item__image">
          <img class="card__image img-fluid" :src="blogImage_3" alt="Blog_One">
        </div>

        <div class="blog-details__wrapper">
          <router-link to="#" class="blog-item__date">
            <h3>15</h3>
            <p>Jan</p>
          </router-link>

          <router-link to="/blog_details" class="d-inline-block">
            <h2 class="blog__title">Google inks pact for new 35-storey office</h2>
          </router-link>

          <p class="blog__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud  commodo consequat.
          </p>
          <ul class="blog-info__items">
            <li class="blog-info__item">
              <router-link to="#">
                <Icon icon="flat-color-icons:businessman" width="21" class="blog-info__icons" />
                <p>Travel, Lifestyle</p>
              </router-link>
            </li>
            <!--  <li class="blog-info__item">|</li>
            <li class="blog-info__item">
              <router-link to="#">
                <Icon icon="flat-color-icons:clock" width="20" class="blog-info__icons" />
                <p>Jan 1, 2020</p>
              </router-link>
            </li>-->
            <li class="blog-info__item">|</li>
            <li class="blog-info__item">
              <router-link to="#">
                <Icon icon="flat-color-icons:faq" width="20" class="blog-info__icons" />
                <p>03 Comments</p>
              </router-link>
            </li>
          </ul>
        </div>
      </article>
    </div>
</template>

<script lang="ts">
  import {defineComponent} from "vue";
  import {Icon} from "@iconify/vue";

  //  Import assets.
  import blogImage_1 from '@/assets/images/blog/single_blog_1.png';
  import blogImage_2 from '@/assets/images/blog/single_blog_2.png';
  import blogImage_3 from '@/assets/images/blog/single_blog_3.png';

  export default defineComponent ({
    name: 'BlogListLeftAside_Comp',

    components: {
      Icon
    },

    data() {
      return {
        blogImage_1,
        blogImage_2,
        blogImage_3,
      };
    },
  });
</script>

<style lang="scss" scoped>
  @import "BlogListLeftAside_Comp";
</style>
