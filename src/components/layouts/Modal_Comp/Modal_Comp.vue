<template>
    <div class="Modal_Comp">
        <!-- Modal -->
        <div class="modal fade" id="appModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="appModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="modal-captions__wrapper">
                            <h5 class="modal-title" id="appModalLabel">{{ modalTitle }}</h5>
                            <small>{{ modalSubTitle }}</small>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    
                    <div class="modal-body">
                        <slot></slot>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="close-modal__button" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="send-like__button">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "@vue/runtime-core";

    export default defineComponent({
        name: "Modal_Comp" as string,

        props: {
            modalTitle: String,
            modalSubTitle: String,
        },
    });
</script>

<style lang="scss" scoped>
    @import "Modal_Comp";
</style>