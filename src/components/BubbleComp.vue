<script setup>
/* eslint-disable */
const props = defineProps({
  show: Boolean
})
</script>

<template>
    <Transition name="modal">
        <div v-if="show" class="modal-mask">
            <slot>a bubble</slot>
        </div>
    </Transition>
</template>

<style scoped>
.bubbleComp {
    background-color: rgb(194, 234, 169);
    
}
</style>