<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Aside from'./saide.vue'
</script>

<style lang="less">
.common-layout {
  width: 100%;
  height: 100vh;
  margin: 0;
  display: flex;
  .el-container {
    width: 100%;
    background-color: #fff;
    .el-aside {
      height: 100vh;
      color: #efefef;
      background-color: rgb(25, 35, 48);
    }
    .el-container {
      background-color: #efefef;
      .el-header {
        line-height: 60px;
        text-align: left;
        background-color: rgb(204, 215, 226);
      }
      .el-main {
        background-color: #fff;
        margin: 20px;
        border-radius: 2px;
        position: relative;
      }
    }
  }
}
</style>
