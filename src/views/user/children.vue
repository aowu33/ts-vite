<template>
  <div class="screen-root">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.screen-root {
     width: 100%;
     height: 100%;
     display: flex;
     justify-content: center;
     margin-top: 20vh;
}

ul {
     background-color: #fff;
     margin: 0 auto;
     padding: 20px;
     width: 40vw;
}

li {
     background-image: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
     width: 100%;
     height: 0.6rem;
     list-style: none;
     background-size: 400% 100%;
     margin-top: 0.6rem;
     background-position: 100% 50%;
     animation: skeleton-loading 1.4s ease infinite;
}

li:first-child {
     width: 38%;
}

li:last-child {
     width: 61%;
}

@keyframes skeleton-loading {
     0% {
          background-position: 100% 50%;
     }

     100% {
          background-position: 0 50%;
     }
}
</style>
