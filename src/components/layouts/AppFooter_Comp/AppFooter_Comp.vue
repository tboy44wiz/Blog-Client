<template>
    <div class="AppFooter_Comp">

      <!--    Top Footer    -->
      <div class="top-footer__wrapper">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h3 class="brand__name">{{ title }}</h3>
              <p>
                We pursue the goals of becoming price, quality and business leaders in local and global business
                frontier by focusing on continuous improvement, strong partnership and professionalism.
              </p>
            </div>

            <div class="col-md-4 mt-sm-4 mt-md-0">
              <h3 class="footer__subHeader">Contacts</h3>
              <p>No 6B Joseph Shyngle Street, off James Robertson Street, Surulere, Lagos State</p>
              <p>
                <span> +234 813 2403 322</span>,
                <span> +234 806 8998 490</span>, <br/>
                <span> +234 815 3536 249</span>
              </p>
              <p> Email: <router-link to="#">example@eliteschools.com</router-link>
              </p>
              <p>WhatsApp: +234 813 2403 322</p>
              <p>Instagram: @_eliteschools</p>
            </div>

            <div class="col-md-4 mt-sm-4 mt-md-0">
              <h3 class="footer__subHeader">Links</h3>
              <div class="row">
                <div class="col">
                  <p><router-link to="/">Home</router-link></p>
                  <p><router-link to="#">About</router-link></p>
                  <p><router-link to="#">Contact</router-link></p>
                </div>

                <div class="col">
                  <p><router-link to="#">Plans &amp; pricing</router-link></p>
                  <p><router-link to="#">News</router-link></p>
                  <p><router-link to="#">Blogs</router-link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--    Bottom Footer    -->
      <div class="bottom-footer__wrapper">
        <div class="container">
          <div class="row">

            <div class="col-md-5">
              <div class="footer-copyright">
                &copy; Copyright
                <router-link to="#https://eliteschools.com">CarParts</router-link> {{ year }}
              </div>
            </div>

            <div class="col-md-7 text-end">
              <div class="social-icon__wrapper">
                <router-link to="#">
                  <Icon icon="radix-icons:twitter-logo" color="white" />
                </router-link>
                <router-link to="#">
                  <Icon icon="ri:facebook-fill" />
                </router-link>
                <router-link to="#">
                  <Icon icon="ic:round-whatsapp" />
                </router-link>
                <router-link to="#">
                  <Icon icon="dashicons:linkedin" />
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
  // @ is an alias to /src
  import { defineComponent } from "vue";
  import {Icon} from "@iconify/vue";

  export default defineComponent({
    name: 'AppFooter_comp',

    props: {
      title: {
        type: String,
        required: true,
      },
    },
    
    components: {
      Icon
    },

    data() {
      return {
        year: new Date().getFullYear(),
      };
    },
  });
</script>

<style lang="scss" scoped>
  @import "AppFooter_Comp";
</style>
