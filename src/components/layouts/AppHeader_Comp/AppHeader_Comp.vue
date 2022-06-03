<template>
    <div class="AppHeader_Comp">
      <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div class="container-fluid">

          <h2 class="brand__name">
            <router-link to="/" class="nav-link">
              <a class="navbar-brand" href="#">{{ title }}</a>
            </router-link>
          </h2>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link">About</router-link>
              </li>
              <!-- <li class="nav-item">
                <router-link to="/gallery" class="nav-link">Gallery</router-link>
              </li>-->
              <li class="nav-item">
                <router-link to="#" class="nav-link">Contact</router-link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
</template>

<script lang="ts">
  // @ is an alias to /src
  import { defineComponent } from "vue";

  export default defineComponent({
    name: 'AppHeader_comp',

    props: {
      title: {
        type: String,
        required: true
      },
    },
  });
</script>

<style lang="scss" scoped>
  @import "AppHeader_Comp";
</style>
