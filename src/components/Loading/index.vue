<template>
  <div class="loading">Loading...</div>
</template>
<script setup lang="ts">
import { ref, reactive, isShallow } from "vue";
const isShow = ref<boolean>(false);
const show = () => (isShow.value = true);
const hide = () => (isShow.value = false);
defineExpose({
  show,
  hide,
});
</script>
<style scoped>
.loading {
  background-color: black;
  opacity: 0.8;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
width: 100%;
}
</style>
