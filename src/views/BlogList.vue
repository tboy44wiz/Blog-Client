<template>
  <div class="BlogList">

  <!--  Blog List Section  -->
    <section class="blog-section__wrapper">
      <div class="container">
        <div class="row">
          <!--  Blog Left Aside  -->
          <section class="col-lg-8 mb-5 mb-lg-0">
            <BlogListLeftAsideComp />
          </section>

          <!--  Blog Right Aside  -->
          <aside class="col-lg-4">
            <BlogListRightAsideComp />
          </aside>
        </div>
      </div>
    </section>

  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
    import { mapGetters, mapActions } from "vuex";
  
  import BlogListLeftAsideComp from "@/components/pages/blog_list/BlogListLeftAside_Comp/BlogListLeftAside_Comp.vue";
  import BlogListRightAsideComp from "@/components/pages/blog_list/BlogListRightAside_Comp/BlogListRightAside_Comp.vue";

  export default defineComponent({
    name: 'BlogList',

    components: {
      BlogListLeftAsideComp,
      BlogListRightAsideComp,
    },


    methods: {
      ...mapActions(["getAllBlogs"]),
    },


    beforeMount() {
      this.getAllBlogs();
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

