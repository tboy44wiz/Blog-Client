<template>
    <div class="BlogComments_Comp mCard">

        <!-- Comments Form -->
        <form>
            <div class="icon-and-textarea__wrapper">
                <img :src="user_icon" width="20" class="user__icon" />

                <div class="textarea-and-button__wrapper">
                    <textarea
                        v-model="commentText"
                        onfocus = "this.placeholder = ''" onblur = "this.placeholder = 'Add your own comment here.'"
                        placeholder="Add your own comment here."
                    />

                    <transition name="slide">
                        <button 
                            v-show="commentText.length >= 1"
                            class="send__button"
                        >Send</button>
                    </transition>
                </div>
            </div>
        </form>


        <!-- Comments Post -->
        <div class="comment__wrapper">
            <h5 :src="user_icon" width="20" class="user__icon">B</h5>

            <div class="comment-detail__wrapper">
                <div class="name-and-date__wrapper">
                    <h5>Ben Okezie</h5>
                    <p>Jan 2</p>
                </div>
                <p>
                    In publishing and graphic design, Lorem ipsum is a placeholder text 
                    commonly used to demonstrate the visual form of a document or a 
                    typeface without relying on meaningful content. 
                </p>
                <ul class="comment-info__items">
                    <li class="comment-info__item">
                        <router-link to="#" 
                            data-bs-toggle="modal" 
                            data-bs-target="#appModal"
                            v-on:click="updateModalTitleAndSubTitle('Like Conversation', 'Please enter your name and email.')"
                        >
                            <img :src="like_icon" width="20" class="comment-info__icons" />
                            <p>6</p>
                        </router-link>
                    </li>
                    <li class="comment-info__item">
                        <router-link to="#">
                            <img :src="chat_icon" width="20" class="comment-info__icons" />
                            <p>1</p>
                        </router-link>
                    </li>
                </ul> 
            </div>
        </div>

        <!-- Comments Reply Post -->
        <div class="comment-reply__wrapper">
            <h6 :src="user_icon" width="20" class="user__icon">A</h6>

            <div class="comment-detail__wrapper">
                <div class="name-and-date__wrapper">
                    <h5>Alleu Sodeeq</h5>
                    <p>Jan 3</p>
                </div>
                <p>
                    In publishing and graphic design, Lorem ipsum is a placeholder text 
                    commonly used to demonstrate the visual. 
                </p>
                <ul class="comment-info__items">
                    <li class="comment-info__item">
                        <router-link to="#">
                            <img :src="like_icon" width="20" class="comment-info__icons" />
                            <p>2</p>
                        </router-link>
                    </li>
                    <li class="comment-info__item">
                        <router-link to="#">
                            <img :src="chat_icon" width="20" class="comment-info__icons" />
                            <!-- <p>1</p> -->
                        </router-link>
                    </li>
                </ul> 
            </div>
        </div>
        <div class="comment-reply__wrapper">
            <h6 :src="user_icon" width="20" class="user__icon">J</h6>

            <div class="comment-detail__wrapper">
                <div class="name-and-date__wrapper">
                    <h5>Joy Ebem</h5>
                    <p>Jan 3</p>
                </div>
                <p>
                    Lorem ipsum is a placeholder text 
                    commonly used to demonstrate the visual. 
                </p>
                <ul class="comment-info__items">
                    <li class="comment-info__item">
                        <router-link to="#">
                            <img :src="like_icon" width="20" class="comment-info__icons" />
                            <!-- <p>2</p> -->
                        </router-link>
                    </li>
                    <li class="comment-info__item">
                        <router-link to="#">
                            <img :src="chat_icon" width="20" class="comment-info__icons" />
                            <!-- <p>1</p> -->
                        </router-link>
                    </li>
                </ul> 
            </div>
        </div>
        <div class="comment-reply__wrapper">
            <h6 :src="user_icon" width="20" class="user__icon">J</h6>

            <div class="comment-detail__wrapper">
                <div class="name-and-date__wrapper">
                    <h5>Joy Ebem</h5>
                    <p>Jan 3</p>
                </div>
                <p>
                    Lorem ipsum is a placeholder text 
                    commonly used to demonstrate the visual. 
                </p>
                <ul class="comment-info__items">
                    <li class="comment-info__item">
                        <router-link to="#">
                            <img :src="like_icon" width="20" class="comment-info__icons" />
                            <!-- <p>2</p> -->
                        </router-link>
                    </li>
                    <li class="comment-info__item">
                        <router-link to="#">
                            <img :src="chat_icon" width="20" class="comment-info__icons" />
                            <!-- <p>1</p> -->
                        </router-link>
                    </li>
                </ul> 
            </div>
        </div>


        <!-- Modal Component -->
        <Modal_Comp :modalTitle="modalTitle" :modalSubTitle="modalSubTitle">
            <form>
                <input type="text" name="fullName"
                    onfocus="this.placeholder = ''" onblur="this.placeholder = 'Full Name'"
                    class="input__box full-name__input" placeholder="Full Name" required
                >
                <input type="text" name="email"
                        onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'"
                        class="input__box email__input" placeholder="Email" required
                >
            </form>
        </Modal_Comp>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "@vue/runtime-core";
    import user_icon from '@/assets/images/icons/user2_icon.svg';
    import like_icon from '@/assets/images/icons/like_icon.svg';
    import chat_icon from '@/assets/images/icons/chat_icon.svg';
    import Modal_Comp from "@/components/layouts/Modal_Comp/Modal_Comp.vue";

    export default defineComponent({
        name: "BlogComments_Comp",

        components: {
            Modal_Comp
        },

        data() {
            return {
                user_icon,
                like_icon,
                chat_icon,
                commentText: "",
                modalTitle: "",
                modalSubTitle: "",
            };
        },

        methods: {
            updateModalTitleAndSubTitle(title: string, subTitle: string) {
                this.modalTitle = title;
                this.modalSubTitle = subTitle;
            },
        }
    });
</script>

<style lang="scss" scoped>
    @import "_BlogComments_Comp";
    @import "@/components/layouts/Modal_Comp/_Modal_Comp";
</style>