<template>
  <button >修改</button>
</template>
<script setup lang="ts">
import { customRef, ref, shallowRef, triggerRef } from "vue";
function MyRef<T>(value: T) {
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newVal) {
        value = newVal;
        trigger();
      },
    };
  });
}
const count = ref(0);
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
