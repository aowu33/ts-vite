<template >
  <el-space wrap>
    <el-card v-for="i in 1" :key="i" class="box-card" style="width: 250px">
      <template #header>
        <div class="card-header">
          <span>Card name{{i}}</span>
          <el-button class="button" text>Operation button</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </el-card>
  </el-space>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
onMounted(() => {
})
</script>