<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Child from './Child.vue'

const child = ref(null)

onMounted(() => {
  
})
</script>

<template>
  <Child ref="child" />
</template>