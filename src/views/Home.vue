<template>
  <div class="Home">

  <!--  Blog List Section  -->
    <section class="blog-section__wrapper">
      <div class="container">
        <div class="row">
          <!--  Blog Left Aside  -->
          <section class="col-lg-8 mb-5 mb-lg-0">
            <BlogListLeftAside_Comp />
          </section>

          <!--  Blog Right Aside  -->
          <aside class="col-lg-4">
            <BlogListRightAside_Comp />
          </aside>
        </div>
      </div>
    </section>

  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import BlogListLeftAside_Comp from "@/components/pages/home/BlogListLeftAside_Comp/BlogListLeftAside_Comp.vue";
  import BlogListRightAside_Comp from "@/components/pages/home/BlogListRightAside_Comp/BlogListRightAside_Comp.vue";

  export default defineComponent({
    name: 'Home',

    components: {
      BlogListLeftAside_Comp,
      BlogListRightAside_Comp,
    },
  });
</script>

<style lang="scss" scoped>
  @import "src/assets/styles/GlobalStyle";

  .blog-section__wrapper {
    height: auto;
    width: $fullWidth;
    margin-top: 70px;
    padding: 100px 0 60px 0;
  };
</style>

